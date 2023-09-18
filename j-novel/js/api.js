//@ts-check
const host = window.location.origin;

/** @typedef {import("./debug.js")} */

/**
 * @typedef GenerateOTPResponse
 * @property {string} otp - goes to webpage
 * @property {string} proof - used in getting token along with otp after otp is approved in webpage
 */
/**
 * @param {(response: GenerateOTPResponse) => void} callback
 */
function generateOTP(callback) {
    log("generating otp");
    sendRequest("GET", makeUrl("/auth/otp4app/generate"), [], function(res){
        callback(JSON.parse(res));
    });
}

/**
 * @typedef CheckOTPResponse
 * @property {string} id - token
 * @property {string} ttl - in format {number}s
 * @property {string} created - utc date string
 */
/** 
 * @param {string} otp
 * @param {string} proof
 * @param {(response: CheckOTPResponse) => void} callback
 */
function checkOTP(otp, proof, callback) {
    log("checking otp");
    sendRequest("GET", makeUrl("/auth/otp4app/check/" + otp + "/" + proof), [], function(res){
        callback(JSON.parse(res));
    });
}

/**
 * @typedef Volume
 * @property {string} legacyId
 * @property {string} slug
 * @property {number} totalParts
 */
/**
 * @typedef Book
 * @property {string} legacyId
 * @property {Volume} volume
 */
/** 
 * @param {string} token
 * @param {(response: { books: Book[] }) => void} callback
 */
function fetchMyLibrary(token, callback) {
    log("fetching my library");
    sendRequest("GET", makeUrl("/me/library"), getHeaders(token), function(res){
        callback(JSON.parse(res));
    });
}

/**
 * @typedef Part
 * @property {string} legacyId
 * @property {number} progress - float from 0 to 1
 * @property {string} title
 */
/**
 * @param {string} volume 
 * @param {string} token
 * @param {(response: {parts: Part[]}) => void} callback
 */
function fetchVolumeParts(volume, token, callback) {
    log("fetching volume parts");
    sendRequest("GET", makeUrl("/volumes/" + volume + "/parts"), getHeaders(token), function(res){
        callback(JSON.parse(res));
    });
}

/**
 * @param {string} path 
 * @returns {string}
 */
function makeUrl(path) {
    return host + "/app/v1" + path + "?format=json";
}

/**
 * @param {string} token
 * @returns {[string, string][]}
 */
function getHeaders(token) {
    return [[ "Authorization", "Bearer " + token ]];
}

/**
 * @param {"GET"} method
 * @param {string} url
 * @param {[string, string][]} headers
 * @param {(response: string) => void} callback
 */
function sendRequest(method, url, headers, callback) {
    log("sending request");
    
    const req = new XMLHttpRequest();
    req.addEventListener("load", function () {
        callback(this.responseText);
    });
    req.addEventListener("error", function () {
        log("Error: fetch error");
    });
    req.open(method, url);
    for(var i = 0; i < headers.length; i++) {
        req.setRequestHeader(headers[i][0], headers[i][1]);
    }
    req.send();
}
