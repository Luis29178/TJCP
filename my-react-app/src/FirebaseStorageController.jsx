import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC4hztlkCki_2pnq93Rgf7cgncHC1V61N0",
    authDomain: "capstone-eeab2.firebaseapp.com",
    projectId: "capstone-eeab2",
    storageBucket: "capstone-eeab2.appspot.com",
    messagingSenderId: "779758566575",
    appId: "1:779758566575:web:fa8755a005fed7dd23a85a",
    measurementId: "G-55B1P13PP9"

}
const app = initializeApp(firebaseConfig)

export const storage = getStorage(app);
