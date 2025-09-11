class Utility{
    async randomNumber(max,min){
        const randomValue = Math.floor(Math.random()*(max-min+1))+min;
        return randomValue;
    }
}
module.exports = new Utility();