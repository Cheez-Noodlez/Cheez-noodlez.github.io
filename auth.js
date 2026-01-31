import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBR71zhuWbvEsE_oRuhaTSaVjrqNdx3rJU",
  authDomain: "cheez-noodlez-8cd32.firebaseapp.com",
  projectId: "cheez-noodlez-8cd32",
  storageBucket: "cheez-noodlez-8cd32.firebasestorage.app",
  messagingSenderId: "263079255530",
  appId: "1:263079255530:web:644c47501a46312d206693"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// 1. Setup the Anti-Bot check
window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
  'size': 'invisible'
});

// 2. Attach to window so HTML can see it
// Instead of window.sendOTP, just attach it to the ID
document.getElementById('sendBtn').addEventListener('click', () => {
    sendOTP();
});


    signInWithPhoneNumber(auth, number, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            document.getElementById('step-1').style.display = 'none';
            document.getElementById('step-2').style.display = 'block';
            console.log("SMS Sent!");
        }).catch((error) => {
            console.error("SMS Error:", error);
            alert("Check Console for Error!");
        });

window.verifyOTP = function() {
    const code = document.getElementById('otpCode').value;
    window.confirmationResult.confirm(code).then((result) => {
        window.location.href = "hub.html"; 
    }).catch((error) => {
        alert("Invalid Code!");

    });
};
