/* // src/app.js
const express = require('express')
const app = express()
const ShippingController = require('../src/controllers/shipping-controller')

app.get('/*shipping', (request, response) => {
  let ctrl = new ShippingController()

  ctrl
    .getItemShipping({id: request.query.itemId, type: request.query.type})
    .then(amount => {
      response.send({ itemId: request.query.itemId, priceUSD: amount })
    })

})

app.listen(3000, () => console.log('ShippingService is listening on port 3000')) */

// contents of src/app.js
const express = require('express')
const app = express()
const ShippingController = require('../src/controller/shipping-controller')

app.get('/*shipping', (request, response) => {
  let ctrl = new ShippingController()

  ctrl
    .getItemShipping({id: request.query.itemId, type: request.query.type})
    .then(amount => {
      response.send({ itemId: request.query.itemId, amount: amount })
    })
    .catch(error => {
      response.status(500).send({ error: error.message })
    })
})
let PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`ShippingService is listening on port ${PORT}`))