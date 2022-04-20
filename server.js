const express = require('express');
const { sequelize } = require('./models');

const app = express();

app.use(express.json());

app.use('/user', require('./routes/userRoutes'));

app.listen(5000, async () => {
  console.log('Api is up and running');

  await sequelize.sync();

  console.log('Database connected');
});
