// THIS PAGE HAS NOT BEEN UTILIZED YET. BUT WE ARE PLANNING TO USE THIS TO GENERATE 'X' AMOUNT OF LABELS.

// Cloning practice. 
const button = $('.press');
const div = document.querySelector('#lc-container');

button.on('click', function () {
    for (var i = 1; i <= 10; i++) {
        const clone = div.cloneNode(true);
        clone.id = 'lc-container';
        div.after(clone);
    }


})