const express = require("express");
const server = express();
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const path = require("path");
const PORT = process.env.PORT || 2551;

require("dotenv/config");
mongoose.set("useCreateIndex", true);
//DB Connection
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("DB IS CONNECTED");
  }
);


server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, "build")));

//Routes
server.use("/api/v1/users", require("./routes/users.routes"));
server.use("/api/v1/stores", require("./routes/stores.routes"));
server.use("/api/v1/items", require("./routes/items.routes"));
server.use("/api/v1/orders", require("./routes/orders.routes"));
server.use("/admin", require("./routes/admin.routes"));
// server.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

server.listen(PORT, () => {
  console.log("server is running");
});
