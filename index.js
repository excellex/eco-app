const app = require('express')()
const mongoose = require('mongoose')
require('dotenv').config()
require('./middleware')(app)


const listen = async () => {
  try {
    await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(process.env.PORT, () => {
      console.log(`Server is started on port: ${process.env.PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

listen()
