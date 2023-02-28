let tea = 15.678;
let coffe = 123.965;
let juice = 90.2345;

let maxCost = Math.max(tea,coffe,juice);

let minCost = Math.min(tea,coffe,juice);

let goodsCost = tea + coffe + juice;
let goodsCost2 = Math.floor(tea) + Math.floor(coffe) + Math.floor(juice)

let cash = 500;
let change = cash - goodsCost;

let roundedCostBig = (Math.ceil(goodsCost2/100))*100;

let oddCost = Boolean(goodsCost2%2);

let fixedSumm = (goodsCost/3).toFixed(2);

let discount = (Math.random()*10).toFixed();

let discountSumm = (goodsCost-(goodsCost*discount)/100).toFixed(2);

let purchasePrice = goodsCost / 2;

let profit = (discountSumm-purchasePrice).toFixed(2);


let text = `Максимальна ціна: ${maxCost},
            Мінімальна ціна: ${minCost},
            Загальна вартість товарів: ${goodsCost},
            Загальна вартість товарів, без копійок, округлене у менший бік: ${goodsCost2},
            Загальна вартість товарів, округлене до більшого: ${roundedCostBig},
            Сума вартості товарів непарна: ${oddCost},
            Готівка клієнта: ${cash},
            Ваша решта: ${change},
            Середня ціна, округлена до 2 знаку після коми: ${fixedSumm},
            Ваша знижка: ${discount}%,
            Сума зі знижкю: ${discountSumm},
            Чистий прибуток: ${profit}.
            `;


console.log("Максимальна ціна: ", maxCost);
console.log("Мінімальна ціна: ", minCost);
console.log("Загальна вартість товарів: ", goodsCost);
console.log("Загальна вартість товарів, без копійок, округлене у менший бік: ", goodsCost2);
console.log("Загальна вартість товарів, округлене до більшого: ", roundedCostBig);
console.log("Сума вартості товарів непарна: ", oddCost);
console.log("Готівка клієнта: ", cash)
console.log("Ваша решта: ", change);
console.log("Середня ціна, округлена до 2 знаку після коми: ", fixedSumm);
console.log("Ваша знижка: ", discount,"%");
console.log("Сума зі знижкю: ", discountSumm);
console.log("Чистий прибуток: ", profit);

document.writeln(text)