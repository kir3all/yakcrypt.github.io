function switchLang(checked){
    if (checked){
        document.querySelectorAll('.EN').forEach(function(el) {
            el.style.display = 'none';
        });
        document.querySelectorAll('.RU').forEach(function(el) {
            el.style.display = 'block';
        });
    } else {
        document.querySelectorAll('.EN').forEach(function(el) {
            el.style.display = 'block';
        });
        document.querySelectorAll('.RU').forEach(function(el) {
            el.style.display = 'none';
        });
    }
}