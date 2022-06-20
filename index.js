const fs = require('fs')


const crud = {

    posts: [],

    read(){
        crud.posts = JSON.parse(fs.readFileSync('./db.json', { encoding: 'utf-8' }))
        return crud.posts 
    },

    create({ id, content }){
        const dados = { id, content }
        console.log(dados)
        crud.posts.push(dados)
        fs.writeFileSync('./db.json', JSON.stringify(crud.posts), { encoding: 'utf-8' })
    }
}



crud.create({ id: 1, content: 'Olá pessoas!' })
crud.create({ id: 2, content: 'Olá pessoas, denovo!' })

console.log(crud.read())