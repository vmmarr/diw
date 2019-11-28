function tecla(e) {
    if (e.shiftKey) {
        alert(`shift + ${e.key}`);
    } else if (e.ctrlkey) {
        alert(`ctrl + ${e.key}`);
    } else if (e.altKey) {
        alert(`alt + ${e.key}`);
    } else {
        alert(e.key);
    }
}

window.onload = function() {
    window.addEventListener('keydown', tecla);
}