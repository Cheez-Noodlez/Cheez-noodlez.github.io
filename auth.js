import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com";

const auth = getAuth();

// 1. Setup the Anti-Bot check
window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
  'size': 'invisible'
});

// 2. Attach to window so HTML can see it
window.sendOTP = function() {
    const number = document.getElementById('phoneNumber').value;
    const appVerifier = window.recaptchaVerifier;

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
};

window.verifyOTP = function() {
    const code = document.getElementById('otpCode').value;
    window.confirmationResult.confirm(code).then((result) => {
        window.location.href = "hub.html"; 
    }).catch((error) => {
        alert("Invalid Code!");
      // Force these functions to be global so HTML buttons can see them
window.sendOTP = sendOTP;
window.verifyOTP = verifyOTP;

    });
};
