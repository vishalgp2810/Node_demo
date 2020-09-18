const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 8000;
const router = express.Router();

app.use("/", router);
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const array = [
    {
      name: 'vishal',
      name: 'vishal',
      name: 'vishal',
      name: 'vishal',
    }
  ]
  res.render('view', { array });
})

const User = mongoose.model("person", {
  firs_name: {
    type: String,
    required: false
  },
  last_name: {
    type: String,
    required: false
  },
  email_id: {
    type: String,
    required: false
  },
  phone_number: {
    type: String,
    required: false
  }
});

app.post("/person", async (req, res) => {
  console.log(req.body);
  try {
    const person = new User(req.body);
    const result = await person.save();
    res.send(result);
  } catch (error) {
    return res.status(400).send({ error: 'Error while adding data', error });
  }
});

const url = 'mongodb+srv://vishal1234:vishal1234@cluster0.l0qbg.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("mongoose database connection established successfully");
});

app.listen(port, function () {
  console.log("Server is running on Port: " + port);
});
