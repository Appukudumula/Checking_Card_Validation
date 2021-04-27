const cardService = require('./card.service')

let status
let json
function mockRes() {
    this.status = s => {
        status = s
        return this
    }
    this.json = obj => {
        json = obj
        return this
    }
}
describe('checkValid', () => {
    it('check whether the card has valid card number or not', () => {
        let mockReq = { body: { 'cardNumber': [4111111111111111, 4111111111111, 4012888888881881, 378282246310005, 6011111111111117, 5105105105105100, 5105105105105106, 9111111111111111] } }
        cardService.checkValid(mockReq, new mockRes())
        expect(status).toEqual(200)
        expect(json).toHaveProperty('cards')
    })
})