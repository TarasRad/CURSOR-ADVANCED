// let priceList = {
//     tea: 15.678,
//     coffe: 123.965,
//     juice: 90.2345,
// };



let tea = 15.678;
let coffe = 123.965;
let juice = 90.2345;

let goodsCost = tea + coffe + juice;
let goodsCost2 = Math.floor(tea) + Math.floor(coffe) + Math.floor(juice)

let cash = 500;
let change = cash - goodsCost;

let discount = (Math.random()*10).toFixed();

let discountSumm = (goodsCost-(goodsCost*discount)/100).toFixed(2);

let purchasePrice = goodsCost / 2;

document.writeln("Максимальна ціна: ", Math.max(tea,coffe,juice));
document.writeln("Мінімальна ціна: ", Math.min(tea,coffe,juice));
document.writeln("Загальна вартість товарів: ", goodsCost);
document.writeln("Загальна вартість товарів, без копійок, округлене у менший бік: ", goodsCost2);
document.writeln("Готівка клієнта: ", cash)
document.writeln("Загальна вартість товарів, округлене до більшого: ", Math.ceil((goodsCost2/100))*100);
document.writeln("Сума вартості товарів непарна: ", Boolean((goodsCost2%2)));
document.writeln("Ваша решта: ", change);
document.writeln("Сума, округлена до 2 знаку після коми: ", (goodsCost/3).toFixed(2));
document.writeln("Ваша знижка: ", discount,"%");
document.writeln("Сума зі знижкю: ", discountSumm);
document.writeln("Чистий прибуток: ", (discountSumm-purchasePrice).toFixed(2));
