//@ts-check
var otpResponse = undefined;
{
    log("Getting from storage");
    var token = getTokenFromStorage();

    if (token) {
        window.location.href = "./index.html"
    }

    generateOTP(function (response) {
        otpResponse = response;
        var element = document.getElementById("otp");
        if (element) {
            element.innerText = response.otp;
        }
    });
}

function onAuthorizeClick() {
    if(otpResponse) {
        checkOTP(otpResponse.otp, otpResponse.proof, function(response) {
            localStorage.setItem(tokenCacheKey, JSON.stringify(response));
            window.location.href = "./index.html"
        });
    }
}
