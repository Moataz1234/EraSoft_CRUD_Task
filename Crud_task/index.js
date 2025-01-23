let mobileList = ["i phone x", "i phone 11", "i phone 12"];
let priceList = [100, 200, 300];
let qtyList = [1, 2, 3];

function addMobile() {
    let takeMobile = prompt("enter mobile name");
    let takePrice = +prompt("enter price");
    let takeQty = +prompt("enter quantity");

    if (takeMobile == '' || takePrice == '' || takeQty == '') {
        alert("you should add value")
    }
    else {
        mobileList.push(takeMobile);
        priceList.push(takePrice);
        qtyList.push(takeQty);
        alert("the phone added succussfully");
        showList();
    }
}
function showList() {
    console.clear();
    mobileList.forEach(function (el, index) {
        console.log(index + 1 + "-" + el + "price :" + priceList[index] + "QTY:" + qtyList[index]);
    })
}

function deleteItems() {
    let deletedItem = +prompt("enter the number of phone") - 1;
    mobileList.splice(deletedItem, 1)
    showList();
}
function updateItems() {
    let updatedItem = +prompt("enter the number of phone") - 1;
    let newPrice = +prompt("enter the price of phone");
    priceList[updatedItem] = newPrice;  
    showList();
}