//@ts-check
/** @typedef {import("./common.js")} */
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

        fetchParts2(token, function(parts) {
            if (!parts.length) {
                partListElement.innerText = 'No parts';
                return;
            }
            parts.sort(function(a, b) { return new Date(b.launch).valueOf() - new Date(a.launch).valueOf(); });

            partListElement.innerText = '';
            for (var i = 0; i < parts.length; i++) {
                var partElement = createPart(parts[i]);
                partListElement.appendChild(partElement);
            }
        });
    }

    /**
     * 
     * @param {string} token 
     * @param {(parts: Part[]) => void} callback 
     */
    function fetchParts(token, callback) {
        fetchMyLibrary(token, function(myLibrary) {
            var books = myLibrary.books.filter(function (_, id) { return id <= 1; });

            /** @type {Array<{parts: Part[]}>} */
            var loadedParts = [];
            for(var i = 0; i < books.length; i++) {
                fetchVolumeParts(books[i].volume.legacyId, token, function(loadedPart) {
                    loadedParts.push(loadedPart);

                    log(loadedParts.length.toString());
                    if (loadedParts.length < books.length) {
                        return;
                    }

                    /** @type {Part[]} */
                    var parts = []
                    for(var j = 0; j < loadedParts.length; j++) {
                        for(var k = 0; k < loadedParts[j].parts.length; k++) {
                            parts.push(loadedParts[j].parts[k]);
                        }
                    }
                    callback(parts);
                });
            }
        });
    }

    /**
     * 
     * @param {string} token 
     * @param {(parts: Part[]) => void} callback 
     */
    function fetchParts2(token, callback) {
        fetchMe(token, function(me){
            fetchFeed(me.legacyId, function(feed){
                var feedItems = feed.items
                    .filter(function(_, i) { return i < 10; });

                /** @type {Part[]} */
                var loadedParts = [];
                for (var idx = 0; idx < feedItems.length; idx++) {
                    var id = feedItems[idx].id.substring(26);
                    fetchPart(id, token, function(loadedPart){
                        loadedParts.push(loadedPart);

                        if (loadedParts.length < feedItems.length) {
                            return;
                        }

                        callback(loadedParts);
                    });
                }
            });
        });
    }

    /**
     * @param {Part} part
     * @returns {HTMLElement}
     */
    function createPart(part) {
        var li = document.createElement('li');

        var img = document.createElement('img');
        img.src = part.cover.thumbnailUrl;
        li.appendChild(img)

        var a = document.createElement('a');
        var partUrl = "./read.html?part=" + part.legacyId;
        a.href = partUrl;
        a.innerText = part.title;
        li.appendChild(a);

        li.onclick = function() {
            window.location.href = partUrl;
        }

        var progress = document.createElement('div');
        progress.className = "part-progress";

        var progressText = document.createElement('div');
        progressText.innerText = (part.progress * 100).toFixed(0) + " %";
        progress.appendChild(progressText);

        li.appendChild(progress);

        return li;
    }
}
