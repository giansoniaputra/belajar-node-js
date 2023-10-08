//Mengambil argumen dari commend line
const yargs = require('yargs');
const {simpanContact} = require('./contacts');

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
            describe: "Email",
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

})

yargs.parse();

// if(command == "add"){
    
// }else if(command == "remove"){

// }else if(command == "list"){

// }