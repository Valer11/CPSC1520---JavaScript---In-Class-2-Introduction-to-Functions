function updateInnerHTML(selector, newValue) {
    document.querySelector(selector).innerHTML = newValue;
}

updateInnerHTML('h2.intro', 'Something New');