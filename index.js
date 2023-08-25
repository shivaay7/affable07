
const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")
const cors = require("cors")

app.use(cors({
  origin: 'https://affablefrontend.onrender.com'
}));


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://affablefrontend.onrender.com');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
mongoDB();
app.get('/', (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials","true");
  res.send('Hello World!')
})

app.use(express.json());
//iske bina neeche wali line nahi chalegi
app.use('/api',require("./routes/CreateUser"))

app.use('/api',require("./routes/DisplayData"))
app.use('/api',require("./routes/OrderData"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
