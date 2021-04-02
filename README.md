## Installation
- install puppeteer: `npm i puppeteer`
- run the file: `node index.js`

## Proof of concept
- run `node test-nos.nl`

Should print the temperature in the Netherlands for today in celsius,
as is displayed at the top right on the NOS website.

## Tactic for getting data from the OV website

### Selecting the proper element

Because BI does not use specific classes (`.visual-1`) or id's (`#visual-1`) this is the main challenge.
Use specific CSS selectors, like `visual-container-repeat visual-container-modern:nth-child(3) visual-modern .bodyCells > div > div > div:nth-child(1)`
- use `>` for a direct parent-child relation
- use `:nth-child(3)` to specify a direct child (start counting from 1)

