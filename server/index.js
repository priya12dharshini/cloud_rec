const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mediaRoutes = require('./routes/mediaRoutes');
const htformRoutes = require('./routes/htformRoutes');
const ecomRoutes = require('./routes/ecomRoutes');
const educRoutes = require('./routes/educRoutes');
const finRoutes = require('./routes/finRoutes');
const mlRoutes = require('./routes/mlRoutes');


app.use(cors({
  origin: 'http://localhost:3000', 
}));

app.use(bodyParser.json());

app.use(express.json());

mongoose.connect("mongodb+srv://spd85250:priya@cluster0.x7hwgog.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB Connected');
}).catch((err) => {
  console.error('MongoDB Connection Error', err);
});

app.use('/api/media', mediaRoutes);
app.use('/api/hform', htformRoutes);
app.use('/api/ecom', ecomRoutes);
app.use('/api/educ', educRoutes);
app.use('/api/fin', finRoutes);
app.use('/api/ml', mlRoutes);


app.get('/health',(req,res)=>{
  res.send("health endpoint is working ")
})

app.listen(8000,()=>{
  console.log("App listening at port 8000")
})

