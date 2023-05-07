import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfxZboBNcg35wf5ewaKPB1-R69yt1j1io",
  authDomain: "em-robots-386021.firebaseapp.com",
  projectId: "em-robots-386021",
  storageBucket: "em-robots-386021.appspot.com",
  messagingSenderId: "625247195062",
  appId: "1:625247195062:web:c6d3b845a6dc6e21fdbb17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
