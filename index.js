const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://uhs:dkwl80@web-basic.5bgbc.mongodb.net/<dbname>?retryWrites=true&w=majority', 
  { useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false 
}).then(() => console.log("mongoDB 연결"))
  .catch(err => console.log("err"));

app.get('/', (req, res) => res.send("안녕"));
app.listen(port, () => console.log(`${port}에서 서버 시작`));
