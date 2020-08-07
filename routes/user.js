const app = require('express');
const router = router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.post('/user', (ewq, res) => {
  const data = req.body;
  console.log(data);


});
