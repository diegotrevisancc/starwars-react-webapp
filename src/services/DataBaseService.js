import { app } from "../services/FirebaseConnect";
import { getDocs, getFirestore } from "firebase/firestore";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  deleteDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";
const db = getFirestore(app); //Inicia a conexão

export function salvaDuvidas(dados) {
  return new Promise(async (resolve, reject) => {
    try {
      const docRef = await addDoc(collection(db, "duvidas"), dados);
      resolve(docRef.id);
    } catch (e) {
      reject(e);
    }
  });
}

export function getDuvidas() {
  return new Promise(async (resolve, reject) => {
    try {
      const q = query(collection(db, "duvidas"));

      const querySnapshot = await getDocs(q);

      let resultados = [];
      querySnapshot.forEach((doc) => {
        let objeto = {
          id: doc.id,
          ...doc.data(),
        };
        resultados.push(objeto);
      });

      resolve(resultados);
    } catch (e) {
      reject(e);
    }
  });
}

export function deleteDuvidas(id) {
  return new Promise(async (resolve, reject) => {
    try {
      await deleteDoc(doc(db, "duvidas", id));
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}
