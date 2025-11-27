// auth.js
import { auth } from "./firebaseconfig.js";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const loginForm = document.getElementById('login-form');
const loginScreen = document.getElementById('login-screen');
const appScreen = document.getElementById('app-screen');
const logoutBtn = document.getElementById('logout-btn');

// Fungsi Login
if(loginForm){
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log("Login Berhasil");
            })
            .catch((error) => {
                alert("Login Gagal: " + error.message);
            });
    });
}

// Fungsi Logout
if(logoutBtn){
    logoutBtn.addEventListener('click', () => {
        signOut(auth).then(() => {
            console.log("Logged out");
        });
    });
}

// Cek Status Login (Observer)
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Admin Login
        loginScreen.classList.add('hidden');
        appScreen.classList.remove('hidden');
    } else {
        // Belum Login
        loginScreen.classList.remove('hidden');
        appScreen.classList.add('hidden');
    }
});