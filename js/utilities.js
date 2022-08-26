const checkOutTotal = {
    iphonePerPrice: 1219,
    casePerPrice: 59,
    iphoneTotal: 1219,
    caseTotal: 59,
    total: 0
}
function updateQuantity(elId, isIncreasing) {
    const quantitiyEl = document.getElementById(elId);
    let quantitiy = +quantitiyEl.value;

    switch(isIncreasing) {
        case '+' :
            quantitiy++;
            break;
        case '-' :
            quantitiy !== 1 ? quantitiy-- : '';
            break;
    }

    quantitiyEl.value = quantitiy;

    return quantitiy;
}

function updatePrice(elId, quantitiy, perPrice) {
    const totalPriceEl = document.getElementById(elId);
    const totalprice = quantitiy * perPrice;
    totalPriceEl.innerText = totalprice;

    return totalprice;
}

function updateIphoneQAndT(isIncreasing) {
    const quantity = updateQuantity('iphone-quantity', isIncreasing);
    checkOutTotal.iphoneTotal = updatePrice('iphone-price-total', quantity, checkOutTotal.iphonePerPrice);
    updateTotal();
}

function updateCaseQAndT(isIncreasing) {
    const quantity = updateQuantity('case-quantity', isIncreasing);
    checkOutTotal.caseTotal = updatePrice('case-price-total', quantity, checkOutTotal.casePerPrice);
    updateTotal();

}

function updateTotal() {
    const subTotal = checkOutTotal.iphoneTotal + checkOutTotal.caseTotal;
    const tax = +(subTotal * 0.1).toFixed(2); // 10%
    const total = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}
updateTotal();