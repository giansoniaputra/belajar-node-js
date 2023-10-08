//Mengambil argumen dari commend line
const yargs = require('yargs');
const {simpanContact, listContact, detailContact, deleteContact} = require('./contacts');

yargs.command({
    command: "add",
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: "string"
        },
        email: {
            describe: "Email",
            demandOption: false,
            type: "string"
        },
        hp: {
            describe: "Nomor HP",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) =>{
        // const contact = {
        //     nama: argv.nama,
        //     email: argv.email,
        //     hp: argv.hp,
        // }
        simpanContact(argv.nama, argv.email, argv.hp);
    }

}).demandCommand();
//Menampilkan data semua kontak

yargs.command({
    command: "list",
    discribe: "Menampilkan data contact",
    handler() {
        listContact();
    }
})

//menampilkan detai sebuah kontak
yargs.command({
    command: "detail",
    discribe: "Menampilkan detail contact berdasarkan nama",
    bulider: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: "string"
        },
    },
    handler(argv) {
        detailContact(argv.nama);
    }
})
//menghapus
yargs.command({
    command: "delete",
    discribe: "Menghapus contact berdasarkan nama",
    bulider: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: "string"
        },
    },
    handler(argv) {
        deleteContact(argv.nama);
    }
})


yargs.parse();

// if(command == "add"){
    
// }else if(command == "remove"){

// }else if(command == "list"){

// }