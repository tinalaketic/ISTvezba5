const knjigeFunkcionalnost = require('./knjigeFunkcionalnosti/knjigeFunkcionalnosti');

console.log(knjigeFunkcionalnost.sveKnjige());
knjigeFunkcionalnost.addKnjiga(6, 'Knjiga6', 'Autor6');
console.log(knjigeFunkcionalnost.getKnjiga(6));
knjigeFunkcionalnost.postaviAutora('Knjiga7', 'Autor7')
knjigeFunkcionalnost.deleteKnjiga(6);  
console.log(knjigeFunkcionalnost.sveKnjige());
console.log(knjigeFunkcionalnost.getKnjigaByAuthor('Gijom Muso'));
