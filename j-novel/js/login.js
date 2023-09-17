//@ts-check

/** @type {GenerateOTPResponse | undefined} */
let _otpResponse = undefined;
{
    const token = getTokenFromStorage();

    if (token) {
        window.location.href = "./index.html"
    }


    generateOTP().then(response => {
        _otpResponse = response;
        const element = document.getElementById("otp");
        if (element) {
            element.innerText = response.otp;
        }
    });
}

function onAuthorizeClick() {
    if(_otpResponse) {
        checkOTP(_otpResponse.otp, _otpResponse.proof).then(response => {
            localStorage.setItem(tokenCacheKey, JSON.stringify(response));
            window.location.href = "./index.html"
        });
    }
}