let knjige = require('../listaKnjiga/listaKnjiga')

function sveKnjige() {
    return knjige;
}

function addKnjiga(id, naziv, autor) {
    knjige.push({
        id: id,
        naziv: naziv,
        autor: autor
    });
}

function getKnjiga(id) {
    let knjiga = knjige.find(k => k.id === id);
    return knjiga;
}

function postaviAutora(naziv, autor) {
    for(const knjiga of knjige) {
        if(knjiga.naziv == naziv) {
            knjiga.autor = autor;
        }
    }
}

function deleteKnjiga(id){
    knjige = knjige.filter(k => k.id !== id);
}

function getKnjigaByAuthor(author) {
    return knjige.filter(k => k.autor === author);
}

module.exports = {
    sveKnjige: sveKnjige,
    addKnjiga: addKnjiga,
    getKnjiga: getKnjiga,
    postaviAutora: postaviAutora,
    deleteKnjiga: deleteKnjiga,
    getKnjigaByAuthor: getKnjigaByAuthor
}