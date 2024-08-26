function services_Item(event) {
    document.querySelectorAll('.div-close').forEach(function(item) {
        item.classList.add('item_none');
    });
    var targetText = event.currentTarget.innerText.trim();
    var targetClass = targetText.replace(/\s+/g, '_') + '_about';
    var targetElement = document.querySelector('.' + targetClass); 
    if (targetElement) {
        targetElement.classList.remove('item_none');
    } else {
        console.error('Hedef öğe bulunamadı: ' + targetClass);
    }
}



