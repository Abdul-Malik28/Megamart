let search = document.querySelector('#search');
let vsbl = document.querySelector('#vsbl');

let category = document.querySelector('#category');

document.querySelector('#glass').addEventListener('click', () => {
    search.classList.toggle('active');
    vsbl.classList.toggle('active');

    if (category.classList.contains('active')) {
        category.classList.remove('active');
    }
});

document.querySelector('#menubar').addEventListener('click', () => {
    category.classList.toggle('active');

    if (search.classList.contains('active')) {
        search.classList.remove('active');
    }

    if (vsbl.classList.contains('active')) {
        vsbl.classList.remove('active');
    }

});
