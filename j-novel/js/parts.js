//@ts-check
/** @typedef {import("./api.js")} */
/** @typedef {import("./auth.js")} */
{
    log("start");
    var token = getTokenFromStorage();

    if (!token) {
        window.location.href = "./login.html";
    } else {
        fillParts(token);
    }

    /**
     * @param {string} token 
     * @returns 
     */
    function fillParts(token) {
        var partListElement = document.getElementById("part-list");
        if (!partListElement) {
            return;
        }
        log(token);
        fetchMyLibrary(token, function(myLibrary) {
            var books = myLibrary.books.filter(function (_, id) { return id <= 2; });
            /** @type {Array<{parts: Part[]}>} */
            var loadedParts = [];
            for(var i = 0; i < books.length; i++) {
                fetchVolumeParts(books[i].volume.legacyId, token, function(loadedPart) {
                    loadedParts.push(loadedPart);

                    log(loadedParts.length.toString());
                    if (loadedParts.length >= books.length) {
                        try {
                            /** @type {Part[]} */
                            var parts = []
                            for(var j = 0; j < loadedParts.length; j++) {
                                for(var k = 0; k < loadedParts[j].parts.length; k++) {
                                    parts.push(loadedParts[j].parts[k]);
                                }
                            }
                            if (parts.length) {
                                partListElement.innerText = '';
                            } else {
                                partListElement.innerText = 'No parts';
                                return;
                            }
                            for (var i = 0; i < parts.length; i++) {
                                createPart(partListElement, parts[i]);
                            }
                        }catch(e) {
                            log(e.toString());
                        }
                    }
                });
            }
        });
    }

    /**
     * @param {HTMLElement} partListElement 
     * @param {Part} part 
     */
    function createPart(partListElement, part) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = "./read.html?part=" + part.legacyId;
        a.innerText = part.title + " - " + part.progress.toString();
        li.appendChild(a);
        partListElement.appendChild(li);
    }
}
