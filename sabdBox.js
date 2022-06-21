const { database } = require("firebase-admin");
const crud = require("./crud");

// async function buscarDados(){
//     const dados = await crud.pegar("pessoas");
//     console.log(dados);
// }

// async function buscarId(){
//     const dados = await crud.pegarId("pessoas", "qwkgvK0J2HZm3RksMaJs");
//     console.log(dados);
// }

async function deletar(){
    const dados = await crud.remove("pessoas", "qwkgvK0J2HZm3RksMaJs");
}

deletar();