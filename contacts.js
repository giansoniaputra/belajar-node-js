//CORE MODUL
//File System
const fs = require('fs')
// READLINE
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const dirPath = './data';
const filePath = './data/contacts.json';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}
//membuat file contact.json jika belum ada
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8');
}
const data = fs.readFileSync('data/contacts.json', 'utf-8');

//BUngkus Pertanyaan Kedalam Promise
const pertenyaan = (quest) => {
    return new Promise((resolve, reject) => {
        rl.question(quest, (q) => {
            resolve(q);
        })
    })
}

const simpanContact = (nama, email, hp) => {
    // Tangkap Parameter yang telah di inputkan
    const contact = { nama, email, hp };
    //Baca File contacts.json
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    //Ubah parameter yang telah di inputkan menjadi json
    const contacts = JSON.parse(file);
    //Masukan parameter kedalam file contacts.json
    contacts.push(contact);

    //Timpa file json sebelumnya dengan json yang baru
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log('Terimakasih');

    rl.close();
}

module.exports = { pertenyaan, simpanContact }