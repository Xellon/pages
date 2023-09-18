var loggingEnabled = true;
/**
 * 
 * @param {string} message 
 */
function log(message) {
    if (!loggingEnabled) {
        return;
    }
    var debugSpan = document.createElement('div');
    debugSpan.innerText = "Debug:" + message;
    document.body.appendChild(debugSpan);
}
