import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "./firebase";

export const getSessionApi = async () => {
    /*  Проблема здесь в том, что в response попадает user после того, как отработает return
        то есть возвращается из функции null, как заставить работать await я так и не понял
     */
    let response = null;
    await onAuthStateChanged(getAuth(firebaseApp), (user) => {
        if (user) {
            response = user;
        } else {
            console.log("getSessionApi user is null");
        }
    });
    return response;
};
