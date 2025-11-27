// firebaseConfig.js

// Menggunakan import via URL (CDN) agar bisa jalan langsung di browser tanpa install npm
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

// Konfigurasi dari Project Kamu
const firebaseConfig = {
  apiKey: "AIzaSyCtKD2Oh0pHQJjVZKcgMqCW2h0HsVwfa8w",
  authDomain: "riqbaal.github.io",
  projectId: "apotik-b8d3e",
  storageBucket: "apotik-b8d3e.firebasestorage.app",
  messagingSenderId: "681862480848",
  appId: "1:681862480848:web:7e2bab18b02d0d42bdafd5",
  measurementId: "G-2E3DKQWMCS"
};

// 1. Initialize Firebase
const app = initializeApp(firebaseConfig);

// 2. Sambungkan ke Firestore Database
const db = getFirestore(app);

// 3. Sambungkan ke Authentication
const auth = getAuth(app);

// 4. Export agar bisa dipakai di file index.html dan auth.js
export { db, auth };