let menuItems = document.getElementsByTagName('li');

/**
 * Сам половину не понял, писал че гугл выдает...
 * Как еще можно "покрасивше" парсить коллекцию элементов?
 * Как можно искать подэлементы внутри коллекций?
 * 
 * У меня отчего то ссылки перестали работать ...  =((
 */
for (const ul of menuItems) {
    let innerUl = ul.getElementsByTagName('ul')[0];
    ul.onclick = function() {
        innerUl.isOpen = innerUl.isOpen ? false : true;
        let display = innerUl.isOpen ? 'flex' : 'none';
        innerUl.style.display = display;
        innerUl.style.flexDirection = innerUl.isOpen ? 'column' : null;
        return false;
    }
}
