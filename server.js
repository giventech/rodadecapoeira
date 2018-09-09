const express = require('express');
const path = require('path');


const app  = express();
// serves only the static files from the dist directory
app.use(express.static(__dirname +'/dist'));
app.get('/*', (req, resp) => {
    resp.sendFile(path.join(__dirname +'/dist/rodadecapoeira/index.html'));
});


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () =>{
    console.log("Server is started");
});




