//CORE MODUL
//File System
const fs = require('fs')
const dirPath = './data';
const filePath = './data/contacts.json';
const chalk = require('chalk');
const validator = require('validator');
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}
//membuat file contact.json jika belum ada
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8');
}
const data = fs.readFileSync('data/contacts.json', 'utf-8');

const loadContact = () => {
    //Baca File contacts.json
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    //Ubah parameter yang telah di inputkan menjadi json
    const contacts = JSON.parse(file);
    return contacts;
}

const simpanContact = (nama, email, hp) => {
    // Tangkap Parameter yang telah di inputkan
    const contact = { nama, email, hp };
    const contacts = loadContact();
    //Cek apakah ada data yang duplikat
    const duplikatNama = contacts.find(contact => contact.nama === nama);
    const duplikatNomor = contacts.find(contact => contact.hp === hp);
    if (duplikatNama || duplikatNomor) {
        console.log(chalk.red.inverse.bold("Kontak Sudah terdaftar!"));
        return false;
    }

    //Cek Email
    if (email) {
        if (!validator.isEmail(email)) {
            console.log(chalk.red.inverse.bold("Email tidak Valid!"));
            return false;
        }
    }
    //Cek Nomor Hp
    if (!validator.isMobilePhone(hp, 'id-ID')) {
        console.log(chalk.red.inverse.bold("No Hp tidak Valid!"));
        return false;
    }

    //Masukan parameter kedalam file contacts.json
    contacts.push(contact);

    //Timpa file json sebelumnya dengan json yang baru
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log('Terimakasih');
}

const detailContact = (nama) => {
    const contacts = loadContact();

    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());

    if (!contact) {
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
        return false;
    }

    console.log(chalk.green.inverse.bold(`${contact.nama}`));
    if (contact.email) {
        console.log(chalk.green.inverse.bold(`${contact.email}`));
    }
    console.log(chalk.green.inverse.bold(`${contact.hp}`));
}

const deleteContact = (nama) => {
    const contacts = loadContact();
    const newContact = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase());

    if (contacts.length === newContact.length) {
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
        return false;
    }
    fs.writeFileSync('data/contacts.json', JSON.stringify(newContact));
    console.log(`data ${nama} berhasil dihapus`);
}

const listContact = () => {
    const contacts = loadContact();
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.hp}`);
    })
}

module.exports = { simpanContact, listContact, detailContact, deleteContact }