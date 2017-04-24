var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// express stuff

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname));



    var globalTaskObj = {};
    globalTaskObj.upcomingTasks = [];
    globalTaskObj.overdueTasks = [];

    globalTaskObj.upcomingTasks = [{
            name: 'task-1',
            dueDate: '20-04-2017'
        },
        {
            name: 'task-2',
            dueDate: '22-04-2017'
        },
        {
            name: 'task-3',
            dueDate: '24-04-2017'
        }
    ];

    globalTaskObj.overdueTasks = [{
            name: 'task-4',
            dueDate: '10-04-2017'
        },
        {
            name: 'task-5',
            dueDate: '14-04-2017'
        },
        {
            name: 'task-6',
            dueDate: '18-04-2017'
        }
    ];


    res.send(globalTaskObj);
});
app.get("/", function (req, res) {

res.sendFile(__dirname + "/index.html");
});

var port = process.env.PORT || 1000;

app.listen(port, function () {
    console.log('Listening on ' + port);
});