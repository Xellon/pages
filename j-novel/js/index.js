//@ts-check
/** @typedef {import("./auth.js")} */
{
    var token = getTokenFromStorage();

    if (!token) {
        window.location.href = "./login.html"
    } else {
        window.location.href = "./parts.html"
    }
}