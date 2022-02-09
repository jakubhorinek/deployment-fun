const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(`Hello Deployer, [[having ${process.env.FUN}!`)
})

app.listen(port, () => {
  console.log(`Deployment-fun app listening at port ${port}`)
})
