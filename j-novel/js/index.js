//@ts-check
{
    const token = getTokenFromStorage();

    if (!token) {
        window.location.href = "/j-novel/login.html"
    } else {
        window.location.href = "/j-novel/parts.html"
    }
}