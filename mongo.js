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

function postMongoInsert(req, res, params) {
    MongoClient.connect(uri, { useUnifiedTopology: true })
        .then(client => {
            console.log("Connected to MongoDB database");
            const db = client.db('roster');
            const coll = db.collection('students');

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

module.exports = { 
    getMongoFindAll: getMongoFindAll 
};