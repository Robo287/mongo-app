const res = require('express/lib/response');

const MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://127.0.0.1:27017";

function getMongoFindAll(res) {
    MongoClient.connect(uri, { useUnifiedTopology: true })
        .then(client => {
            console.log("Connected to MongoDB database");
            const db = client.db('roster');
            const coll = db.collection('students');

            console.log("MONGODB FIND: GET - All");
            coll.find().toArray()
                .then((results) => { res.render('index.ejs', { students: results }); })
                .catch(error => console.error(error));
        }).catch(error => console.error(error));
};

function getMongoFindID(res) {
    MongoClient.connect(uri, { useUnifiedTopology: true })
    .then(client => {
        console.log("Connected to MongoDB database");
        const db = client.db('roster');
        const coll = db.collection('students');

    }).catch(error => console.error(error));
};

function getMongoFindName(res) {
    MongoClient.connect(uri, { useUnifiedTopology: true })
    .then(client => {
        console.log("Connected to MongoDB database");
        const db = client.db('roster');
        const coll = db.collection('students');

    }).catch(error => console.error(error));
};

function postMongoInsert(req, res) {
    var record_id = new Date().getTime();
    var obj = {};

    obj._id = record_id;
    obj.fname = req.body.fname;
    obj.lname = req.body.lname;
    obj.gpa = parseFloat(req.body.gpa);
    if (req.body.enrolled == "true") { //change for switch
        obj.enrolled = true;
      } else {
        obj.enrolled = false;
      }

    MongoClient.connect(uri, { useUnifiedTopology: true })
        .then(client => {
            console.log("Connected to MongoDB database");
            const db = client.db('roster');
            const coll = db.collection('students');

            coll.insertOne(obj)
            .then(result => { res.redirect('/students'); })
            .catch(error => console.error(error));
        }).catch(error => console.error(error));
};

function putMongoUpdate(res) {
    MongoClient.connect(uri, { useUnifiedTopology: true })
    .then(client => {
        console.log("Connected to MongoDB database");
        const db = client.db('roster');
        const coll = db.collection('students');

    }).catch(error => console.error(error));
};

function delMongoDelete(res) {
    MongoClient.connect(uri, { useUnifiedTopology: true })
    .then(client => {
        console.log("Connected to MongoDB database");
        const db = client.db('roster');
        const coll = db.collection('students');

    }).catch(error => console.error(error));
};

function test(req, res) {
    console.log(req.body.fname);
}

module.exports = { 
    test: test,
    postMongoInsert: postMongoInsert,
    getMongoFindAll: getMongoFindAll 
};