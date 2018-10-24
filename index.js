const fs = require('fs');
const {ipcRenderer} = require('electron');

let message = document.querySelector('#message');
let save = document.querySelector('#save');
 

function saveMessage (msg) {
    msg = msg + '\n';
    fs.appendFileSync('data.txt', msg, (err) => {
        console.log(err);
    }); 

    // notify main process to send notification
    ipcRenderer.send('notify');
};

save.addEventListener('click', () => {
    let msg = message.value;
    console.log(msg);
    if (msg !== '') {
        saveMessage(msg);
        message.value = '';
    }
});