// const { response } = require("express");

const { response } = require("express");

const studentList = document.querySelector("#studentList");
const searchForm = document.querySelector("#search-form");
const updateForm = document.querySelector("#update-form");
var recUpdateBtn;
var recDeleteBtn;
const messageDiv = document.querySelector('#message');

function selectupdbtn(id) {
    recUpdateBtn = document.querySelector("#" + id);
    var rid = recUpdateBtn.parentNode.parentNode.cells[0].innerHTML;
    document.querySelector('#edit-id').innerText = rid;
    var name = recUpdateBtn.parentNode.parentNode.cells[1].innerHTML;
    var nameArr = name.split(" ", 2);
    var fname = nameArr[0];
    document.querySelector("#input-fname").value = fname;
    var lname = nameArr[1];
    document.querySelector("#input-lname").value = lname;
    var gpa = recUpdateBtn.parentNode.parentNode.cells[2].innerHTML;
    document.querySelector("#input-gpa").value = gpa;
    var enrolled = recUpdateBtn.parentNode.parentNode.cells[3].innerHTML;
    document.querySelector("#input-enrolled").value = enrolled;
    console.log("ID: " + rid + " | First Name: " + fname + " | Last Name: " + lname + " | GPA: " + gpa + " | Enrolled: " + enrolled);
};

function selectdelbtn(id) {
    recDeleteBtn = document.querySelector("#" + id);
    var rid = recDeleteBtn.parentNode.parentNode.cells[0].innerHTML;
    fetch('/students', {
        headers: { 'Content-Type': 'application/json' },
        method: 'delete',
        body: JSON.stringify({ _id: rid })
    })
        .then(res => { if (res.ok) return res.json(); })
        .then(response => {
            if (response === "404 - Unable to locate record") {
                messageDiv.textContent = 'There are no matching entries to delete'
            } else {
                window.location.reload(true);
            }
        })
        .catch(error => console.log(error));
}

function search() {
    var query = document.querySelector("#input-query").value;
    fetch('/students/' + query, {
        method: 'get'
    })
    .catch(error => console.log(error));
}

function update() {
    var rid = document.querySelector('#edit-id').innerText;
    var fname = document.querySelector('#input-fname').value;
    var lname = document.querySelector('#input-lname').value;
    var gpa = document.querySelector('#input-gpa').value;
    var enrolled = document.querySelector('#input-enrolled').value;
    fetch('/students', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: rid, fname: fname, lname: lname, gpa: gpa, enrolled, enrolled })
    })
        .then(res => { if (res.ok) return res.json(); })
        .then(response => { window.location.reload(true); })
        .catch(error => console.log(error));
}

// updateBtn.addEventListener('click', _ => {
//     fetch('/students', {
//         method: 'put',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             fname: 'Update',
//             lname: 'PutTest',
//             gpa: '2.0',
//             enrolled:  'true'
//         })
//     })
//         .then(res => { if (res.ok) return res.json(); })
//         .then(response => { window.location.reload(true); })
//         .catch(error => console.log(error));
// });

// deleteBtn.addEventListener('click', _ => {
//     fetch('/students', {
//         method: 'delete',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             fname: 'Test'
//         })
//     })
//         .then(res => { if (res.ok) return res.json(); })
//         .then(response => {
//             if (response === "No entry to delete") {
//                 messageDiv.textContent = 'There are no matching entries to delete'
//             } else {
//                 window.location.reload(true);
//             }
//         })
//         .catch(error => console.log(error));
// })