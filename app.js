const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }))
app.listen(2000, () => { console.log(`Bot Service started on port 2000`) });
app.get('/', async (req, res) => {
    return res.sendStatus(200);
})
module.exports = { app };