// Iphone
document.getElementById('iphone-btn-plus').addEventListener('click', function(e) {
    updateIphoneQAndT('+');
    updateTotal();
});

document.getElementById('iphone-btn-minus').addEventListener('click', function(e) {
    updateIphoneQAndT('-');
    updateTotal();
});

document.getElementById('iphone-quantity').addEventListener('change', function() {
    updateIphoneQAndT('auto');
})

// Iphone Case
document.getElementById('case-btn-plus').addEventListener('click', function(e) {
    updateCaseQAndT('+');
});

document.getElementById('case-btn-minus').addEventListener('click', function(e) {
    updateCaseQAndT('-');
});

document.getElementById('case-quantity').addEventListener('change', function() {
    updateCaseQAndT('auto');
})

