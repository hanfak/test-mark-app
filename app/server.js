const app = require("express")();
var path = require('path');
var fs = require('fs');
var hbs = require('express-handlebars');

const bodyParser = require('body-parser');
const appid = process.env.APPID;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'hbs');

app.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.get('/', function(req, res) {
    // TODO use backup of json file to populate form
    res.render('form', {
        // TODO: pass in map for likerts
        post: {
            report: 'Janith Kasun blah balahab af afasdf adf'
        }
    });
});

app.get('/lastreport', function(req, res) {
    res.set('Content-Type', 'text/plain');
    res.sendFile(path.join(__dirname + '/backup.txt'));
});

app.post('/generate', (req, res) => {
    var jsonData = JSON.stringify(req.body); // TODO create reports
    var object = JSON.parse(jsonData);
    console.log(req.body.comments);
    // TODO put in report not json
    fs.writeFile("backup.txt", jsonData, function(err) {
        if (err) {
            console.log(err);
        }
    });
    // TODO store json of report in file
    console.log('Got body:', jsonData);
    res.render('report', {
        post: {
          // TODO put in report not json
            report: 'Janith Kasun blah balahab af afasdf adf'
        }
    });
});

app.listen(9999, () => console.log(`App is listening on 9999`))
