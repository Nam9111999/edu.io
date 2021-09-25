const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


let navItem = $$('.navbar-item');
let tabIndicator = $('.tab-indicator');
let activeNav = $('.navbar-item.active p');
tabIndicator.style.width = activeNav.offsetWidth + 'px';

navItem.forEach(function(item,index,array){
    item.onclick = function(e){
        activeNav.classList.toggle('active');
        activeNav = item;
        tabIndicator.style.width = this.offsetWidth + 'px';
        tabIndicator.style.left = this.offsetLeft + 'px';

        this.classList.add('active');
        console.log(this.offsetWidth)
    }
})

console.log([navItem]);