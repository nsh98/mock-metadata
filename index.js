const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const metadata = {
  id: "63e0bbaaff8a1c009011515f",
  createdAt: "2023-02-06T08:34:50.314Z",
  updatedAt: "2023-02-23T10:55:13.676Z",
  identifier: "1",
  itemTypeId: "155110",
  image: "ipfs://bafybeibfeorxgr2opjnvfoi6uqkj7fb6ibmoqybb74aekd52v3uf6rzq3i",
  image_data: "https://media.goldfever.io/box.gif",
  external_url: "https://goldfever.io/genesys-masks",
  description:
    "Genesys Mask NFT Loot Box containing six elements with 10 different rarities from 16.5% to 1%",
  name: "Genesys Mask NFT Loot Box",
  attributes: [],
  background_color: "",
  animation_url: "",
  youtube_url: "",
  ipfs: false,
};

app.get("/metadata-mock/token/:tokenID", (req, res) => {
  const { tokenID } = req.params;
  res.json(metadata);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
