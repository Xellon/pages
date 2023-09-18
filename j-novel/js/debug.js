//@ts-check
var loggingEnabled = true;

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
    if (!document.getElementById('debug-button')) {
        addDebugButton();
    }
}

function addDebugButton() {
    var debugButton = document.createElement('button');
    debugButton.id = 'debug-button';
    debugButton.innerText = "I";

    debugButton.style.position = "fixed";
    debugButton.style.height = "64px";
    debugButton.style.width = "64px";
    debugButton.style.borderRadius = "50%";
    debugButton.style.right = "32px";
    debugButton.style.bottom = "64px";
    debugButton.style.background = "transparent";
    debugButton.style.border = "1px solid";

    debugButton.onclick = function () {
        var list = getDebugList();
        
        if (list.style.visibility === "visible") {
            list.style.visibility = "hidden";
        } else {
            list.style.visibility = "visible";
        }
    }

    document.body.appendChild(debugButton);

    return debugButton;
}

function addDebugList() {
    var debugList = document.createElement('ul');
    debugList.id = 'debug-list';

    debugList.style.visibility = "hidden";
    debugList.style.position = "fixed";
    debugList.style.background = "white";
    debugList.style.right = "0";
    debugList.style.top = "0";
    debugList.style.border = "1px solid";
    debugList.style.borderRadius = "8px";
    debugList.style.paddingRight = "8px";

    debugList.onclick = function () {
        debugList.style.visibility = "hidden";
    }

    document.body.appendChild(debugList);

    return debugList;
}

function getDebugList() {
    var debugButton = document.getElementById('debug-list');
    if (debugButton) {
        return debugButton;
    }
    return addDebugList();
}