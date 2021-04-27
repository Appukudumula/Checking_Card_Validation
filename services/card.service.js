module.exports = {
    checkValid: (req, res) => {
        let finalCheck = []
        let amex = new RegExp('^3[47][0-9]{13}$');
        let mastercard = new RegExp('^5[1-5][0-9]{14}$');
        let visa = new RegExp('4[0-9]{12}(?:[0-9]{3})?$');
        let disco1 = new RegExp('^6011[0-9]{12}[0-9]*$');
        console.log('req.body -- ',req)
        let cardDetails = req.body.cardNumber
        cardDetails.forEach(value => {
            let cardName = 'Unknown'
            // accept only digits, dashes or spaces
            //if (/[^0-9-\s]+/.test(value)) return false;
            var nCheck = 0, nDigit = 0, bEven = false;
            value = value.toString();
            value = value.replace(/\D/g, "");

            for (var n = value.length - 1; n >= 0; n--) {
                var cDigit = value.charAt(n),
                    nDigit = parseInt(cDigit, 10);

                if (bEven) {
                    if ((nDigit *= 2) > 9) nDigit -= 9;
                }

                nCheck += nDigit;
                bEven = !bEven;
            }

            let validCheck = (nCheck % 10) == 0 ? 'valid' : 'invalid'
            if (amex.test(value)) {
                cardName = 'AMEX';
            }
            if (mastercard.test(value)) {
                cardName = 'MASTERCARD';
            }
            if (disco1.test(value)) {
                cardName = 'DISCOVER';
            }
            if (visa.test(value)) {
                cardName = 'VISA';
            }
            finalCheck.push(`${cardName}: ${value} (${validCheck})`)
        })

        return res.status(200).json({ cards: finalCheck })
    }
}