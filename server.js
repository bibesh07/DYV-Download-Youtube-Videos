const express = require('express');
const app = express();
const port = process.env.PORT || 3300;

app.listen(port, () => console.log(`listening to port ${ port }`));

app.get('/', (req,res) => {
    res.send('Server is up and running');
})