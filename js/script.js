// Resetar as ancoras
window.onload = function() {
    history.replaceState("", document.title, window.location.pathname);
};