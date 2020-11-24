let banners = []

// const prop = $('[reorder]') ? true : false

const prop = true

const init = 0

const reordered = Math.floor(Math.random() * 2)

const slickItems = prop ? $('.slick-track').children() : false

for (i = 0; i < slickItems.length; i++) {
    (slickItems[i].childElementCount === 1 && i > init) ?
        (!!reordered) ? banners.push(slickItems[i].id) : banners.unshift(slickItems[i].id)
        : false
}

console.log(banners)

banners.forEach(element => {
    $(`#${element}`).css('display', 'flex')
    $(`#${element}`).css('order', `${banners.indexOf(element)}`)
})

// ------------------------------------------------------------------------ //

const banners = [];

const prop = $('[reorder]');

const reorder = prop ? true : false;

const init = 2;

const elements = reorder ? prop.children() : false;

const reordered = Math.floor(Math.random() * 2);

for (i = 0; i < elements.length; i++) {
    (i >= init) ? (!!reordered) ? banners.push(elements[i]) : banners.unshift(elements[i]) : false;
};

if (reorder) {
    prop.innerHTML = '';

    for (i = init; i >= init; i--) {
        banners.unshift(elements[i]);
    };

    banners.forEach(element => {
        prop.append(element);
    });

    console.log(banners);
}