const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

// Connect to DB and start server
const port = process.env.PORT || 3000;
mongoose
  .connect(DB)
  .then(() => {
    app.listen(port, () => {
      console.log(`App running on port ${port}...`);
      console.log('DB connection successful');
    });
  })
  .catch((err) => console.log(err));
