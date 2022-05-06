const express = require('express')
const app = express()
const port = process.env.PORT|| 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/times', (req, res) => res.send(showTimes()))

showTimes = () => {
    let result = '';
    const times = process.env.TIMES || 5;
    for (i = 0; i < times; i++) {
      result += i + ' ';
    }
    return result;
  }
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})