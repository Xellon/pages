//@ts-check
const tokenCacheKey = "token_response";

/** @typedef {import("./api.js")} */

function getTokenFromStorage() {
    const tokenResponseString = localStorage.getItem(tokenCacheKey);
    if (tokenResponseString) {
        /** @type {CheckOTPResponse} */
        const tokenResponse = JSON.parse(tokenResponseString);

        const createdDate = new Date(tokenResponse.created);
        const ttlMs = Number.parseInt(tokenResponse.ttl.substring(0, tokenResponse.ttl.length -1)) * 1000;
        const expiredDate = new Date(createdDate.getTime() + ttlMs);

        if (new Date() >= expiredDate) {
            return undefined;
        }
        return tokenResponse.id;
    }
}
