/* Restrição do banner */
function BannerRestricted(startDay, starthour, endDay, endhour) {
    const today = new Date(),
        bannerClass = $('a.restrictProgrammed');
    console.log(`Date: ${today.getDate()} Time: ${today.getHours()}:${today.getMinutes()}`);
    if (today.getDate() === startDay) {
        if (today.getHours() >= starthour) {
            console.log('Exibindo banner => entrada');
        } else {
            bannerClass.remove();
        };
    } else if (today.getDate() === endDay) {
        if (today.getHours() < endhour) {
            console.log('Exibindo banner => saída');
        } else {
            bannerClass.remove();
        };
    } else {
        bannerClass.remove();
    };
}
BannerRestricted(28, 20, 29, 8);

/* Restrição do banner */
function BannerRestricted2(startDay, starthour, endDay, endhour) {
    const today2 = new Date(),
        bannerClass2 = $('a.restrictProgrammed2');
    console.log(`Date: ${today2.getDate()} Time: ${today2.getHours()}:${today2.getMinutes()}`);
    if (today2.getDate() === startDay) {
        if (today2.getHours() >= starthour) {
            console.log('Exibindo banner => entrada');
        } else {
            bannerClass2.remove();
        };
    } else if (today2.getDate() === endDay) {
        if (today2.getHours() < endhour) {
            console.log('Exibindo banner => saída');
        } else {
            bannerClass2.remove();
        };
    } else {
        bannerClass2.remove();
    };
}

BannerRestricted2(29, 20, 30, 8);

console.log('Promonight programmed');