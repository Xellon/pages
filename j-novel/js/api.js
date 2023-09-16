//@ts-check
const host = "https://labs.j-novel.club";

/**
 * @typedef GenerateOTPResponse
 * @property {string} otp - goes to webpage
 * @property {string} proof - used in getting token along with otp after otp is approved in webpage
 */
/** @returns {Promise<GenerateOTPResponse>}*/
function generateOTP() {
    return fetch(makeUrl("/auth/otp4app/generate")).then(r => r.json());
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
 * @returns {Promise<CheckOTPResponse>}
 */
function checkOTP(otp, proof) {
    return fetch(makeUrl(`/auth/otp4app/check/${otp}/${proof}`)).then(r => r.json());
}

// /**
//  * @typedef Me
//  * @property {string} legacyId - id
//  */
// /**
//  * @param {string} token
//  * @returns {Promise<Me>}
//  */
// function fetchMe(token) {
//     return fetch(makeUrl("/me"), getRequestParams(token)).then(r => r.json());
// }

/**
 * @typedef Volume
 * @property {string} legacyId
 * @property {string} slug
 */
/**
 * @typedef Book
 * @property {string} legacyId
 * @property {Volume} volume
 */
/** 
 * @param {string} token
 * @returns {Promise<{ books: Book[] }>}
 */
function fetchMyLibrary(token) {
    return fetch(makeUrl("/me/library"), getRequestParams(token)).then(r => r.json());
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
 * @returns {Promise<{parts: Part[]}>}
 */
function fetchVolumeParts(volume, token) {
    return fetch(makeUrl(`/volumes/${volume}/parts`), getRequestParams(token)).then(r => r.json());
}

/**
 * @param {string} token
 * @returns {RequestInit}
 */
function getRequestParams(token) {
    return { headers: { "Authorization": `Bearer ${token}` } };
}

/**
 * @param {string} path 
 * @returns {string}
 */
function makeUrl(path) {
    return `${host}/app/v1${path}?format=json`;
}
