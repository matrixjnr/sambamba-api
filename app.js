var app = require('./config/express');

var port = process.env.PORT || 3001;
    
app.listen(port, function(){
    console.log('Server ON in Port: ' + port);
})