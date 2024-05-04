const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
var cors = require("cors");

const PORT = 3000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send", async (req, res) => {
  const {id, receiverId, amount} = req.body;

  const friendsList = await axios.get(`${process.env.ACCOUNT_URL}/Friends`, {
    params: {
      userId: id,
    },
  });

  if (!friendsList.some(i => i.id === receiverId)) {
    res.send({}).status(400);
  }

  await axios.post(`${process.env.ACCOUNT_URL}/RemoveCrypto`, {
    userId: id,
    amount: amount,
  });
  await axios.post(`${process.env.ACCOUNT_URL}/AddCrypto`, {
    userId: receiverId,
    amount: amount,
  });

  res.send({}).status(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
