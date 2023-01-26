import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartRealtimeDatabase() {
    const firebaseConfig = {
        apiKey: "AIzaSyC4hztlkCki_2pnq93Rgf7cgncHC1V61N0",
        authDomain: "capstone-eeab2.firebaseapp.com",
        projectId: "capstone-eeab2",
        databaseURL: `https://capstone-eeab2-default-rtdb.firebaseio.com`
    };

    const app = initializeApp(firebaseConfig);
    return getDatabase(app);

}

export default StartRealtimeDatabase;