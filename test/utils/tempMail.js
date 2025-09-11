const axios = require('axios');
const BASE = 'https://api.guerrillamail.com/ajax.php';

async function createMailbox() {
    const { data } = await axios.get(`${BASE}?f=get_email_address`);
    return { email: data.email_addr, sidToken: data.sid_token };
}

async function waitForOtp(sidToken, regex = /\b(\d{4,8})\b/, timeoutMs = 60000, pollMs = 5000) {
    const deadline = Date.now() + timeoutMs;
    while (Date.now() < deadline) {
        const { data } = await axios.get(`${BASE}?f=get_email_list&sid_token=${sidToken}&offset=0`);
        if (data.list && data.list.length > 0) {
            const latest = data.list[0];
            const mailResp = await axios.get(`${BASE}?f=fetch_email&sid_token=${sidToken}&email_id=${latest.mail_id}`);
            const content = `${mailResp.data.mail_subject}\n${mailResp.data.mail_body}`;
            const match = content.match(regex);
            if (match && match[1]) {
                return match[1];
            }
        }
        await new Promise(r => setTimeout(r, pollMs));
    }
    throw new Error('OTP not received in time');
}

module.exports = { createMailbox, waitForOtp };
