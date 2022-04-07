const express = require('express');
const bp = require('body-parser');
const mongojs = require("./mongo");
const MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://127.0.0.1:27017";

const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json())
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/students', (req, res) => { 
    mongojs.getMongoFindAll(res);
});

app.post('/students', (req, res) => {
    mongojs.postMongoInsert(req, res);
});

MongoClient.connect(uri, { useUnifiedTopology: true })
    .then(client => {

        app.put('/students', (req, res) => {
            coll.findOneAndUpdate(
                { fname: 'Anthony' },
                { $set: { fname: req.body.fname, lname: req.body.lname, gpa: req.body.gpa, enrolled: req.body.enrolled }},
                { upsert: true })
                .then(result => { res.json('Success'); })
                .catch(error => console.error(error));
            console.log(req.body);
        });

        app.delete('/students', (req, res) => {
            coll.deleteOne(
                { fname: req.body.fname }
            )
                .then(result => { 
                    if (result.deletedCount === 0) {
                        return res.json("No entry to delete");
                    }
                    res.json("Deleted a Test entry"); })
                .catch(error => console.log(error));
        })
    })
    .catch(error => console.error(error));

    app.listen(5678, function() {
        console.log('listening on port 5678');
    });