import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCyNBd93RvKdJ-YFni-AyRH_epV1rHSfqk",
    authDomain: "reactinno.firebaseapp.com",
    databaseURL:
        "https://reactinno-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "reactinno",
    storageBucket: "reactinno.appspot.com",
    messagingSenderId: "636850600962",
    appId: "1:636850600962:web:4b34b01fcbc38f469b3b1b",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getDatabase(firebaseApp);
