const express = require('express');
const bp = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://127.0.0.1:27017";

const app = express();

MongoClient.connect(uri, { useUnifiedTopology: true })
    .then(client => {
        console.log("Connected to MongoDB database");
        const db = client.db('testdb');
        const coll = db.collection('testcollection');

        app.use(bp.urlencoded({ extended: true }));
        app.use(bp.json())
        app.use(express.static('public'));
        app.set('view engine', 'ejs');

        app.get('/', (req, res) => { 
            db.collection('testcollection').find().toArray()
                .then(results => { res.render('index.ejs', { students: results }); })
                .catch(error => console.error(error));
        });
        
        app.post('/students', (req, res) => {
            coll.insertOne(req.body)
                .then(result => { res.redirect('/'); }) //redirects to the index page
                .catch(error => console.error(error));
        });

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

        app.listen(5678, function() {
            console.log('listening on port 5678');
        });
    })
    .catch(error => console.error(error));