import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "https://cheez-noodlez-8cd32.firebaseapp.com";

const auth = getAuth();

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
