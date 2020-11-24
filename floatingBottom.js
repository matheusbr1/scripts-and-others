function MakecrossData({
    img,
    link,
    tag
}) {
    return {
        buttonImage: `${img}`,
        buttonClose: `https://static.carrefour.com.br/imagens/site/2020/cross/close.png`,
        buttonLink: `https://www.carrefour.com.br/${link}?${tag}${makeDataForTag()}|1&cfrict=botton-destaque`,
    };
}

function makeDataForTag() {
    const today = new Date();

    function getDay() {
        let day = today.getDate();
        if (day < 10) {
            day = `0${day}`;
        }
        return day;
    }

    function getMounth() {
        let mounth = today.getMonth() + 1;
        if (mounth < 10) {
            mounth = `0${mounth}`;
        }
        return mounth;
    }

    function getYear() {
        let year = today.getFullYear();
        year = year.toString();
        year = year.slice(2, 4);
        return year;
    }
    return `${getDay()}${getMounth()}${getYear()}`;
}

function makeComponent({
    restrictionActive
}) {
    let headerHeight = $(".header-filete:nth-child(1)").height() + $(".header-filete:nth-child(2)").height() + $("header").height();
    $("footer").before(`<a class="${restrictionActive ? "bottom-restricted" : ""}" id="c-floatingButton" style="display: none;" target="_blank" href="${crossData.buttonLink}"><div class="floatingButton" style="display: block;"><img src="${crossData.buttonImage}"><img id="buttonClose" src="${crossData.buttonClose}"></div></a>`);
    let floatingButton = $("#c-floatingButton");
    $("#buttonClose").on("click", (event) => {
        event.preventDefault();
        floatingButton.remove();
    });
    $(window).scroll(() => {
        if (headerHeight < $(this).scrollTop()) {
            floatingButton.show(500);
        } else {
            floatingButton.hide(500);
        }
    });
}

function restriction({
    startDay,
    starthour,
    endDay,
    endhour
}) {
    const today = new Date(),
        bottomClass = $("a.bottom-restricted");
    if (today.getDate() >= startDay && today.getDate() <= endDay) {
        today.getDate() === startDay ? today.getHours() >= starthour ? false : bottomClass.remove() : false;
        today.getDate() === endDay ? today.getHours() < endhour ? false : bottomClass.remove() : false;
    } else {
        bottomClass.remove();
    }
}
const crossData = MakecrossData({
    img: "https://static.carrefour.com.br/imagens/site/2020/cross/banner-float-bottom-pneus-laufen-0911.png",
    link: "cf-promo-pneus-laufenn-0920",
    tag: "sort=price-asc&crfimt=home|carrefour|bn|bns|botton-destaque_nova-linha-laufenn-a-partir-189_bns_carrefour-e_",
});
makeComponent({
    restrictionActive: true
});
restriction({
    startDay: 11,
    starthour: 0,
    endDay: 22,
    endhour: 0
});
console.log("Bottom Pneus");