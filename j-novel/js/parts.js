//@ts-check
/** @typedef {import("./api.js")} */
/** @typedef {import("./auth.js")} */
{
    const token = getTokenFromStorage();

    if (!token) {
        window.location.href = "./login.html";
    } else {
        (async () => {
            const partListElement = document.getElementById("part-list");
            if (!partListElement) {
                return;
            }

            // const me = await fetchMe(token);
            const myLibrary = await fetchMyLibrary(token);
            const books = myLibrary.books.filter((_, id) => id <= 2);
            const parts = (await Promise.all(books.map(b => fetchVolumeParts(b.volume.legacyId, token))))
                .flatMap(p => p.parts);
            
            if (parts.length) {
                partListElement.innerText = '';
            } else {
                partListElement.innerText = 'No parts';
                return;
            }
            for (const part of parts) {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = `./read.html?part=${part.legacyId}`;
                a.innerText = part.title + " - " + part.progress;
                li.appendChild(a);
                partListElement.appendChild(li);
            }
        })();
    }
}