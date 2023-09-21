//@ts-check
/** @typedef {import("./common.js")} */
/** @typedef {import("./api.js")} */
/** @typedef {import("./auth.js")} */

{
    var token = getTokenFromStorage();

    if (!token) {
        window.location.href = "./login.html"
    }

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

                var readAreaElement = document.getElementById("read-space");
                if (readAreaElement) {
                    readAreaElement.appendChild(div);
                } else {
                    document.body.appendChild(div);
                }
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

    function onReadSpaceClick() {
        var header = document.getElementById("header");
        var footer = document.getElementById("footer");
        if (header) {
            document.body.removeChild(header);
        }
        if (footer) {
            document.body.removeChild(footer);
        }
        if (footer || header) {
            return;
        }

        header = createHeader();
        document.body.appendChild(header);

        footer = createFooter();
        document.body.appendChild(footer);
    }

    function createHeader() {
        var header = document.createElement("div");
        header.id = "header";

        var headerChildren = document.createElement('div');

        var partsLink = document.createElement('a');
        partsLink.href = "./parts.html";
        partsLink.innerText = "Parts";
        headerChildren.appendChild(partsLink);

        var logoutButton = document.createElement('button');
        logoutButton.id = "logout-button";
        logoutButton.onclick = function() {
            localStorage.removeItem(tokenCacheKey);
            window.location.href = "./login.html";
        }
        logoutButton.innerText = "Logout";
        headerChildren.appendChild(logoutButton);

        header.appendChild(headerChildren);

        return header;
    }

    function createFooter() {
        var footer = document.createElement("div");
        footer.id = "footer";
        return footer;
    }
}