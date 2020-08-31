const app = require("express")();
const bodyParser = require('body-parser');
// TODO fix naming
const LIKARTS = ['strongly-agree', 'agree', 'neutral', 'disagree', 'strongly-disagree'];
var path = require('path');
var fs = require('fs');
var hbs = require('express-handlebars');
var Handlebars = require('handlebars');
var marking_criteria = [
  {"key": "criteria1", "value": "first statement"},
  {"key": "criteria2", "value": "second statement"}
];

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

Handlebars.registerHelper("inc", function(value, options) {
    return parseInt(value) + 1;
});

Handlebars.registerHelper("replace", function(value, options) {
    return value.replace("-", " ");;
});

app.get('/', function(req, res) {
    // TODO use backup of json file to populate form
  res.render('form', {
      post: {
          statement: marking_criteria,
          likarts: LIKARTS
      }
  });
});

app.get('/lastreport', function(req, res) {
    //tODO use handlebars
    // TODO return last saved report in english
    res.set('Content-Type', 'text/plain');
    res.sendFile(path.join(__dirname + '/backupJson.txt'));
});

app.post('/generate', (req, res) => {
    var jsonData = JSON.stringify(req.body); // TODO create reports
    var object = JSON.parse(jsonData);
    console.log(req.body.comments);
    // TODO put in report not json
    fs.writeFile("backupJson.txt", jsonData, function(err) {
        if (err) {
            console.log(err);
        }
    });
    // TODO store json of report in file
    console.log('Got body:', jsonData);
    res.render('report', {
        post: {
          // TODO put in report not json
            report: jsonData
        }
    });
});

app.listen(9999, () => console.log(`App is listening on 9999`))
