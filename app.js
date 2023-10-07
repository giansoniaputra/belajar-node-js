const { pertenyaan, simpanContact } = require("./contacts")
const main = async () => {
    const nama = await pertenyaan('Masukan Nama Anda:')
    const email = await pertenyaan('Masukan Email Anda:')
    const hp = await pertenyaan('Masukan No Hp Anda:')

    simpanContact(nama, email, hp);
}

main()
