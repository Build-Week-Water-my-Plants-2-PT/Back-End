require("dotenv").config();
const PORT = process.env.PORT || 5000;
const server = require("./api/server")


server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});