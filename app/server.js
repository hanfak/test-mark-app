const app = require("express")();
var path = require('path');
var fs = require('fs');

const bodyParser = require('body-parser');
const appid = process.env.APPID;
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    // TODO use back file to populate form
    res.sendFile(path.join(__dirname + '/index.html')); // TODO use handlebars, templates
});

app.get('/lastreport', function(req, res) {
    res.set('Content-Type', 'text/plain');
    res.sendFile(path.join(__dirname + '/backup.txt'));
});

app.post('/generate', (req, res) => {
    var jsonData = JSON.stringify(req.body); // TODO create reports
    // TODO copy text to clipboard https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
    var object = JSON.parse(jsonData);
    console.log(req.body.comments);
    // TODO put in report not json
    fs.writeFile("backup.txt", jsonData, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log('Got body:', jsonData);
    res.set('Content-Type', 'text/plain');
    res.send(jsonData) // TODO use handlebars
});

app.listen(9999, () => console.log(`App is listening on 9999`))
