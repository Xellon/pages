//@ts-check
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
        header.style.position = "fixed";
        header.style.height = "100px";
        header.style.background = "gray";
        header.style.width = "100%";
        header.style.top = "0px";
        header.style.left = "0px";

        var partsLink = document.createElement('a');
        partsLink.href = "./parts.html";
        partsLink.innerText = "Parts";
        header.appendChild(partsLink);

        var logoutButton = document.createElement('button');
        logoutButton.onclick = function() {
            localStorage.removeItem(tokenCacheKey);
            window.location.href = "./login.html";
        }
        logoutButton.innerText = "Logout";
        header.appendChild(logoutButton);

        return header;
    }

    function createFooter() {
        var footer = document.createElement("div");
        footer.id = "footer";
        footer.style.position = "fixed";
        footer.style.height = "200px";
        footer.style.background = "gray";
        footer.style.width = "100%";
        footer.style.bottom = "0px";
        footer.style.left = "0px";
        return footer;
    }
}