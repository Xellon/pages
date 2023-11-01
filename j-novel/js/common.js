//@ts-check
/******************************************** DEBUG ********************************************/
var loggingEnabled = true;

var debugButtonId = 'debug-button';
var debugListId = 'debug-list'

/**
 * 
 * @param {string} message 
 */
function log(message) {
    if (!loggingEnabled) {
        return;
    }
    ensureDebugButtonAdded();

    var debugEntry = document.createElement('li');
    debugEntry.innerText = "Debug: " + message;
    getDebugList().appendChild(debugEntry);
}

function ensureDebugButtonAdded() {
    if (!document.getElementById(debugButtonId)) {
        addDebugButton();
    }
}

function addDebugButton() {
    var debugButton = document.createElement('button');
    debugButton.id = debugButtonId;
    debugButton.innerText = "I";

    debugButton.onclick = toggleDebugListVisibility;

    document.body.appendChild(debugButton);

    return debugButton;
}

function toggleDebugListVisibility() {
    var list = getDebugList();
        
    if (list.style.visibility === "visible") {
        list.style.visibility = "hidden";
    } else {
        list.style.visibility = "visible";
    }
}

function addDebugList() {
    var debugList = document.createElement('ul');
    debugList.id = debugListId;

    debugList.style.visibility = "hidden";

    debugList.onclick = function () {
        debugList.style.visibility = "hidden";
    }

    document.body.appendChild(debugList);

    return debugList;
}

function getDebugList() {
    var debugButton = document.getElementById(debugListId);
    if (debugButton) {
        return debugButton;
    }
    return addDebugList();
}

/******************************************** Math ********************************************/

/**
 * @param {number} min 
 * @param {number} max 
 * @returns {(value: number) => number}
 */
function clipBetween(min, max) {
    return function(value) {
        return Math.min(max, Math.max(min, value));
    }
}
