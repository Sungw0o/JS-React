const count = 20;
let itemIndex =0;

const observer = new IntersectionObserver(entries => {
    console.log('entries', entries);

    entries.forEach(entry => {
        for(let i = itemIndex; i < itemIndex + count; i++){
            let item = document.createElement('p');

            item.textContent = i;
            item.className += item;
            list.appendChild(item);
        }
        itemIndex = itemIndex + count;
    })
}, {root: null})

observer.observe(document.querySelector('.end'))