// Require packages and set the port 
const express = require('express');
const port = 3000;
const bodyParser = require('body-parser');
const app = express();
// Use Node.js body parsing middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));


app.get('/', async (request, response) => {
    
    const url = request.url.split("?")[1].split("=")[1]
    console.log("request: ", url)

    try {
        const apiResponse = await fetch(
         'https://smsc.ru/sys/send.php?login=Chopho&psw=V-Power423&phones=79172473509&mes=hello')
         console.log("Send Result: ", apiResponse)

        // const apiResponseJson = await apiResponse.json()
        // console.log("Send OK: ", apiResponseJson)
        
    } catch (err) {
        console.log("Send Error: ", err)
    }

    response.send({
        message: 'Node.js and Express REST API'}
    );
});
// Start the server 
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});