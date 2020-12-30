const fs = require("fs");

const items=[]
const Carousel = fs.readdirSync("./view/public/img/Kids");
Carousel.forEach((data) => {
    items.push({
        src: `/img/Kids/${data}`,
        product: `Product Code ${String.fromCharCode(
            Math.round(Math.random() * (90 - 65) + 65)
        ).toUpperCase()} - ${Math.round(Math.random() * 1000)}`,
        price: Math.round(Math.random() * 1000) + 100,
        discount:
            Math.round(Math.random() * 5) > 2 &&
            Math.round(Math.random() * 20) + 20,
    });
});


const kids = (req, res) => {
    res.json(items);
};
// console.log(items)
module.exports = kids;