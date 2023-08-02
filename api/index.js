require("dotenv").config();
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { PORT } = process.env;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`que haces troesma, esto esta escuchando al PORT ${PORT}`); // eslint-disable-line no-console
  });
});
