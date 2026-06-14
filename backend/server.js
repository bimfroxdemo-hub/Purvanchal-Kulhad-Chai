require("dotenv").config();

const express = require(
  "express"
);

const mongoose = require(
  "mongoose"
);

const cors = require("cors");

const adminRoutes = require(
  "./routes/adminRoutes"
);

const franchiseRoutes = require(
  "./routes/franchiseRoutes"
);

const app = express();

app.use(cors());

app.use(express.json());

mongoose
  .connect(
    process.env.MONGO_URI
  )
  .then(() => {
    console.log(
      "MongoDB Connected"
    );
  })
  .catch((err) => {
    console.log(err);
  });

app.use(
  "/api/admin",
  adminRoutes
);

app.use(
  "/api/franchise",
  franchiseRoutes
);

app.get("/", (req, res) => {
  res.send(
    "ChaiWala Backend Running"
  );
});

app.listen(
  process.env.PORT,
  () => {
    console.log(
      `Server running on port ${process.env.PORT}`
    );
  }
);