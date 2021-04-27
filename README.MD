Project Summary -

### Our Project - 
Checking Credit Cards - We are developing the Rest API which validates the different kinds of credit cards.
A common sanity check will be done on the credit card numbers to validate its accuracy.
Validation will be conducted based on the Luhn's Algorithm and it verifies the four kinds of Credit card types- AMEX, Discover, MasterCard and Visa.
If the given credit card number comes under any of the above credit card types, we are showing the output as required(you can see the other attached pdf)

### We have created one POST API which handles this functionality
http://127.0.0.1:3000/card
POST /card HTTP/1.1
Host: 127.0.0.1:3000
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 506607da-2fa2-1f34-5dd4-6303070be8b1

### Required Input --
{
	"cardNumber": [4111111111111111, 4111111111111, 4012888888881881, 378282246310005, 6011111111111117, 5105105105105100, 5105105105105106, 9111111111111111]
}

### Output --

{
    "cards": [
        "VISA: 4111111111111111 (valid)",
        "VISA: 4111111111111 (invalid)",
        "VISA: 4012888888881881 (valid)",
        "AMEX: 378282246310005 (valid)",
        "DISCOVER: 6011111111111117 (valid)",
        "MASTERCARD: 5105105105105100 (valid)",
        "MASTERCARD: 5105105105105106 (invalid)",
        "Unknown: 9111111111111112 (invalid)"
    ]
}

## Available Scripts

In the project directory, you can run the following node commands

### `npm install`

Install the dependencies in the local node_modules folder. In global mode (ie, with -g or --global appended to the command), it installs the current package context (ie, the current working directory) as a global package.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm test -- --coverage`

Launches the test runner in the interactive watch mode along with the code coverage\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!



