var input = window.localStorage.getItem('companyList');
var obj = JSON.parse(input)
console.log(obj)







var palletCustomerAddressName = $('#pallet-customer-address').children('li')[0];
var palletCustomerAddressStreet = $('#pallet-customer-address').children('li')[1];
var palletCustomerAddressCity = $('#pallet-customer-address').children('li')[2];
var palletCustomerAddressPhone = $('#pallet-customer-address').children('li')[3];
var palletCustomerAddressPO = $('#pallet-customer-address').children('li')[4];

palletCustomerAddressName.innerText = obj[0].billCompName;
palletCustomerAddressStreet.innerText = obj[0].billStreet1;
palletCustomerAddressCity.innerText = obj[0].billCity + ', ' + obj[0].billState + ', ' + obj[0].billZip;
palletCustomerAddressPhone.innerText = obj[0].billPhoneNum;
palletCustomerAddressPO.innerText = 'PO #: ' + obj[0].custPO;

<<<<<<< HEAD





$('#download-packing-list-PDF').click(function () {

    domtoimage.toPng(document.getElementById('packing-list'))
    .then(function (blob) {

        var pdf = new jsPDF('l', 'pt', [$('#packing-list').width(), $('#packing-list').height()]);
        pdf.addImage(blob, 'PNG', 0, 0, $('#packing-list').width(), $('#packing-list').height());
        pdf.save("test.pdf");
        that.options.api.optionsChanged();
    });    
});

$('#download-qa-PDF').click(function () {

    domtoimage.toPng(document.getElementById('quality-assurance'))
    .then(function (blob) {

        var pdf = new jsPDF('l', 'pt', [$('#quality-assurance').width(), $('#quality-assurance').height()]);
        pdf.addImage(blob, 'PNG', 0, 0, $('#quality-assurance').width(), $('#quality-assurance').height());
        pdf.save("test.pdf");
        that.options.api.optionsChanged();
    });
});

$('#download-lc-PDF').click(function () {

    domtoimage.toPng(document.getElementById('label-carton'))
    .then(function (blob) {

        var pdf = new jsPDF('l', 'pt', [$('#label-carton').width(), $('#label-carton').height()]);
        pdf.addImage(blob, 'PNG', 0, 0, $('#label-carton').width(), $('#label-carton').height());
        pdf.save("test.pdf");
        that.options.api.optionsChanged();
    });
});

$('#download-lr-PDF').click(function () {

    domtoimage.toPng(document.getElementById('label-roll'))
    .then(function (blob) {

        var pdf = new jsPDF('l', 'pt', [$('#label-roll').width(), $('#label-roll').height()]);
        pdf.addImage(blob, 'PNG', 0, 0, $('#label-roll').width(), $('#label-roll').height());
        pdf.save("test.pdf");
        that.options.api.optionsChanged();
    });
});

$('#download-pallet-label-PDF').click(function () {

    domtoimage.toPng(document.getElementById('pallet-label'))
    .then(function (blob) {

        var pdf = new jsPDF('l', 'pt', [$('#pallet-label').width(), $('#pallet-label').height()]);
        pdf.addImage(blob, 'PNG', 0, 0, $('#pallet-label').width(), $('#pallet-label').height());
        pdf.save("test.pdf");
        that.options.api.optionsChanged();
    });
});





=======
// ROLL LABEL
var rollCustomerAddressName = $('#lr-address').children('li')[0];
var rollCustomerAddressStreet = $('#lr-address').children('li')[1];
var rollCustomerAddressCity = $('#lr-address').children('li')[2];
var rollCustomerAddressPO = $('#lr-PO').children('td')[1];
var rollItemDescription = $('#lr-description').children('td')[1];
var rollTangoItemNum = $('#lr-tangoItemNum').children('td')[1];
var rollItemSize = $('#lr-itemSize').children('td')[1];
var rollQuantity = $('#lr-quantity').children('td')[1];
var rollDate = $('#lr-date').children('td')[1];

rollCustomerAddressName.innerText = obj[0].billCompName;
rollCustomerAddressStreet.innerText = obj[0].billStreet1;
rollCustomerAddressCity.innerText = obj[0].billCity + ', ' + obj[0].billState + ', ' + obj[0].billZip;
rollCustomerAddressPO.innerText = obj[0].custPO;
rollItemDescription.innerText = obj[0].itemDescription;
rollTangoItemNum.innerText = obj[0].tangoItemNum;
rollItemSize.innerText = obj[0].layFlat + 'mm Layflat X ' + obj[0].rollLength + ' Meters';
rollQuantity.innerText = obj[0].rollLength + " Meters";
rollDate.innerText = obj[0].shipDate;

// CARTON LABEL
var cartonCustomerAddressName = $('#lc-address').children('li')[0];
var cartonCustomerAddressStreet = $('#lc-address').children('li')[1];
var cartonCustomerAddressCity = $('#lc-address').children('li')[2];
var cartonCustomerAddressPO = $('#lc-PO').children('td')[1];
var cartonItemDescription = $('#lc-description').children('td')[1];
var cartonTangoItemNum = $('#lc-tangoItemNum').children('td')[1];
var cartonItemSize = $('#lc-itemSize').children('td')[1];
var cartonQuantity = $('#lc-quantity').children('td')[1];
var cartonDate = $('#lc-date').children('td')[1];

cartonCustomerAddressName.innerText = obj[0].billCompName;
cartonCustomerAddressStreet.innerText = obj[0].billStreet1;
cartonCustomerAddressCity.innerText = obj[0].billCity + ', ' + obj[0].billState + ', ' + obj[0].billZip;
cartonCustomerAddressPO.innerText = obj[0].custPO;
cartonItemDescription.innerText = obj[0].itemDescription;
cartonTangoItemNum.innerText = obj[0].tangoItemNum;
cartonItemSize.innerText = obj[0].layFlat + 'mm Layflat X ' + obj[0].rollLength + ' Meters';
cartonQuantity.innerText = obj[0].rollLength + " Meters";
cartonDate.innerText = obj[0].shipDate;
>>>>>>> main
