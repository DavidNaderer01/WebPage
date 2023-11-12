const input = document.getElementById('input');
input.addEventListener('keypress', function (key) {
    if(key.key == "Enter") {
        window.open(`http://google.com/search?q=${input.value}`)
    }
});