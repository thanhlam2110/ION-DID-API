
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const ION = require('@decentralized-identity/ion-tools')

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({
    extended: true,
    limit: "50mb"
  })
);

//  ========== ROUTES =================
app
// Generate API
.post("/api/generate", async (req, res) => {
  try {
    const { publicKeyId, serviceId, serviceEndpoint } = req.body

    if(!publicKeyId || !serviceId || !serviceEndpoint) throw new Error("Input is invalid")
    const authnKeys = await ION.generateKeyPair();
    const did = new ION.DID({
      content: {
        publicKeys: [
          {
            id: publicKeyId,
            type: 'EcdsaSecp256k1VerificationKey2019',
            publicKeyJwk: authnKeys.publicJwk,
            purposes: [ 'authentication' ]
          }
        ],
        services: [
          {
            id: serviceId,
            type: 'LinkedDomains',
            serviceEndpoint: serviceEndpoint
          }
        ]
      }
    });
  
    const longFormURI = await did.getURI();
    const shortFormURI = await did.getURI('short');
  
    res.json({
      longFormURI,
      shortFormURI
    })
  } 
  catch (err) {
    res.json({ error: err.message}).status(400)
  }
})
// Resolve API
.post("/api/resolve", async (req, res) => {
  try {
    const { longFormURI } = req.body
    if(!longFormURI) throw new Error("Please input longFormURI")

    const response = await ION.resolve(longFormURI);
    res.json(response)
  } 
  catch (err) {
    res.json({ error: err.message}).status(400)
  }
})

// Start server
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log("Server listening on " + PORT);
});
