const { response } = require("express");

const studentList = document.querySelector("#studentList");
var updateBtn;
var deleteBtn;
const messageDiv = document.querySelector('#message');

function selectupdbtn(id) {
    updateBtn = document.querySelector("#" + id);
    var rid = updateBtn.parentNode.parentNode.firstElementChild.innerHTML;
    alert(rid);
};

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

deleteBtn.addEventListener('click', _ => {
    fetch('/students', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            fname: 'Test'
        })
    })
        .then(res => { if (res.ok) return res.json(); })
        .then(response => {
            if (response === "No entry to delete") {
                messageDiv.textContent = 'There are no matching entries to delete'
            } else {
                window.location.reload(true);
            }
        })
        .catch(error => console.log(error));
})