//@ts-check
/** @typedef {import("./common.js")} */
/** @typedef {import("./api.js")} */
/** @typedef {import("./auth.js")} */

var token = getTokenFromStorage();

if (!token) {
    window.location.href = "./login.html"
}

var fontSizeKey = "user_settings_reader_font_size";
var fontSize = 32;
var cachedFontSizeString = localStorage.getItem(fontSizeKey);
if (cachedFontSizeString) {
    fontSize = +cachedFontSizeString;
}


var readSpaceElement =/** @type {HTMLDivElement} */ (document.getElementById('read-space'));
if (!readSpaceElement) {
    throw "missing read space element";
}
var readTextElement =/** @type {HTMLDivElement} */ (document.getElementById('read-text'));
if (!readTextElement) {
    throw "missing read text element";
}

var progressElement = document.getElementById('progress-bar');
if (progressElement) {
    progressElement.onclick = function(ev) {
        var boundingBox = progressElement.getBoundingClientRect();
        var height = getTextHeight() - window.innerHeight - 150;
        var scroll = (ev.offsetX / boundingBox.width) * height;
        readSpaceElement.scrollTop = clipBetween(0, (height))(scroll);
    };
}

log("init height " + window.innerHeight);
log("init height " + window.outerHeight);

// readSpaceElement.style.height = window.innerHeight + "px";
readSpaceElement.style.fontSize = fontSize + "px";

log("getting part");
var part = getPart();
if (part) {
    log("part: " + part);
    sendRequest("GET", host + "/embed/" + part + "/data.xhtml", getHeaders(token), function(response) {
        var bodyStart = response.indexOf("<body>");
        var bodyEnd = response.indexOf("</body>");
        if (bodyStart >= 0 && bodyEnd >= 0) {
            var bodyString = response.substring(bodyStart + 6, bodyEnd);
            var div = document.createElement('div');
            div.innerHTML = bodyString;

            readTextElement.appendChild(div);
            readSpaceElement.style.height = window.innerHeight + "px";
            log("ra rect " + JSON.stringify(readSpaceElement.getBoundingClientRect()));
            log("w rect " + JSON.stringify({w: window.innerWidth, h: window.innerHeight}));
        }
    });
} else {
    log("no part");
}

/**
 * @returns {string | undefined}
 */
function getPart() {
    var query = window.location.href.split("?")[1];
    if (query) {
        return query.substring(5);
    }
    return undefined;
}

/**
 * @param {HTMLElement} element 
 */
function toggleVisibility(element) {
    if (!element.style.visibility || element.style.visibility === "hidden") {
        element.style.visibility = "visible";
    } else {
        element.style.visibility = "hidden";
    }
}

function onReadSpaceClick() {
    var header = document.getElementById("header");
    if (header) {
        toggleVisibility(header);
    }
    var footer = document.getElementById("footer");
    if (footer) {
        toggleVisibility(footer);
        var size = document.getElementById("font-size");
        if (size) {
            size.innerText = fontSize + "px";
        }
    }
}

/**
 * @param {number} amount 
 */
function changeFontSizeBy(amount) {
    var size = document.getElementById("font-size");
    fontSize = clipBetween(8, 40)(fontSize + amount);
    readSpaceElement.style.fontSize = fontSize + "px";
    if (size) {
        size.innerText = fontSize + "px";
    }
    localStorage.setItem(fontSizeKey, fontSize.toString());
}

function onReadSpaceScroll() {
    var foreground = document.getElementById("progress-fg");
    if (foreground) {
        foreground.style.width = getCurrentProgress() + "%";
    }
}

function getCurrentProgress() {
    var step = window.innerHeight;
    return (readSpaceElement.scrollTop / (getTextHeight() - step)) * 100;        
}

function getTextHeight() {
    return readTextElement.getBoundingClientRect().height;
}

function nextPage() {
    var step = window.innerHeight - 150;

    readSpaceElement.scrollTop = clipBetween(0, (getTextHeight() - step))(readSpaceElement.scrollTop + step);
}

function prevPage() {
    var step = window.innerHeight - 150;

    readSpaceElement.scrollTop = clipBetween(0, (getTextHeight() - step))(readSpaceElement.scrollTop - step)
}

function onLogout(){
    localStorage.removeItem(tokenCacheKey);
    window.location.href = "./login.html";
}