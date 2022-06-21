const { initializeApp } = require('firebase/app');
const {
    getFirestore,
    collection, 
    doc, 
    setDoc, 
    addDoc, 
    query, 
    where, 
    getDoc, 
    deleteDoc,
    getDocs } = require('firebase/firestore/lite');

const firebaseConfig = {
    apiKey: "AIzaSyDKq30JegE3-ooWKn3_WOLLq9Z-Z7Px5oM",
    authDomain: "database-first-beb01.firebaseapp.com",
    projectId: "database-first-beb01",
    storageBucket: "database-first-beb01.appspot.com",
    messagingSenderId: "694449798256",
    appId: "1:694449798256:web:80fa86f06323efbd4508b5",
    measurementId: "G-99KCEQRDJ3"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

async function salvar(nomeTabela, id, dado) {
    if (id) {
        const referenceEntity = await setDoc(doc(db, nomeTabela, id), dado);
        const savedData = {
            ...dado,
            id: id
        }
        return savedData;
    } else {
        const referenceEntity = await addDoc(collection(db, nomeTabela), dado);
        const savedData = {
            ...dado,
            id: referenceEntity.id
        }
        return savedData;
    }
}

async function pegar(nomeTabela) {
    const tableRef = collection(db, nomeTabela);
    const q = query(tableRef);

    const querySnapshot = await getDocs(q);

    const lista = [];

    querySnapshot.forEach((doc) => {
        const data = {
            ...doc.data(),
            id: doc.id
        }
        lista.push(data);
    });
    return lista;
}

async function pegarId(nomeTabela, id){
    const docRef = doc(db, nomeTabela, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return new Error("not found");
    }
}

async function remove(nomeTabela, id){
    const dado = await deleteDoc(doc(db, nomeTabela, id));
    return{
        message: `${id} deleted`
    }
}

module.exports = {
    salvar,
    pegar,
    pegarId,
    remove
}