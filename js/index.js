//updateInnerHTML() function

function updateInnerHTML(selector, newValue) {
    document.querySelector(selector).innerHTML = newValue;
}

//Testing
//updateInnerHTML('h2.intro', 'Something New');

// 1. 

function strong(value) {
    return '<strong>' + value + '</strong>';
   }


//Testing
//strong('hello');


// 2.

var importantParagraph = document.querySelector('p.important').innerHTML;

// 3.

importantParagraph = strong(importantParagraph);

// 4. 
updateInnerHTML('p.important', importantParagraph);