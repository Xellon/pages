//@ts-check
/** @typedef {import("./api.js")} */
{
    const token = getTokenFromStorage();

    if (!token) {
        window.location.href = "/j-novel/login.html";
    } else {
        (async () => {
            const partListElement = document.getElementById("part-list");
            if (!partListElement) {
                return;
            }

            // const me = await fetchMe(token);
            const myLibrary = await fetchMyLibrary(token);
            const parts = (await Promise.all(myLibrary.books.map(b => fetchVolumeParts(b.volume.legacyId, token))))
                .flatMap(p => p.parts);
            
            for (const part of parts) {
                const li = document.createElement('li');
                li.innerText = part.title + " - " + part.progress;
                li.onclick = function(){
                    window.location.href = "/j-novel/read.html";
                }
                partListElement.appendChild(li);
            }
        })();
    }

}