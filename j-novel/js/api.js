//@ts-check
var host = "https://labs.j-novel.club";
var proxy = "https://corsproxy.io/";
var useProxy = true;

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
 * @typedef FeedItem
 * @property {string} url
 * @property {string} title
 * @property {string} id
 * @property {string} image
 */

/**
 * @typedef Feed
 * @property {FeedItem[]} items
 */
/**
 * @param {string} userId legacyId in /me endpoint 
 * @param {(response: Feed) => void} callback
 */
function fetchFeed(userId, callback) {
    log("fetching my feed");

    var url = host + "/feed/user/" + userId + ".json";
    if (useProxy) {
        url = proxy + "?" + encodeURIComponent(url);
    }

    sendRequest("GET", url, [], function(res){
        callback(JSON.parse(res));
    });
}

/**
 * @typedef Me
 * @property {string} legacyId
 */
/** 
 * @param {string} token
 * @param {(response: Me) => void} callback
 */
function fetchMe(token, callback) {
    log("fetching my library");
    sendRequest("GET", makeUrl("/me"), getHeaders(token), function(res){
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
 * @param {string} partId 
 * @param {string} token
 * @param {(response: Part) => void} callback
 */
function fetchPart(partId, token, callback) {
    log("fetching part");
    sendRequest("GET", makeUrl("/parts/" + partId), getHeaders(token), function(res){
        callback(JSON.parse(res));
    });
}

/**
 * @typedef Part
 * @property {{ thumbnailUrl: string }} cover
 * @property {string} legacyId
 * @property {number} number - total part number
 * @property {number} progress - float from 0 to 1
 * @property {string} title
 * @property {string} launch - launch date in utc
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
    if (!useProxy) {
        return host + "/app/v1" + path + "?format=json";
    } else {
        return proxy + "?" + encodeURIComponent(host + "/app/v1" + path + "?format=json");
    }
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
