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





