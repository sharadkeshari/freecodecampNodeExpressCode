const express = require('express');
const path = require('path');

const app = express();

//setup staic and middleware
app.use(express.static('../public'));

// app.get("/", (req, res) => {
//     res.status(200).sendFile(path.resolve(__dirname, '../navbar-app/index.html'));
// });
//adding to static assets
//Server Side Rendering


app.all('*', (req, res) => {
    res.status(404).send('resource not found.');
});

app.listen(5000, () => {
    console.log("listening on the port number 5000");
})