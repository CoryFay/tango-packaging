var input = window.localStorage.getItem('companyList');
var obj = JSON.parse(input)
console.log(obj)

// THIS IS WHERE WE MANIPULATE PREVIEW.HTML WITH THE VALUES FROM OUR INPUTS ON INDEX.HTML

function packingList(){
var packingListShipDate = $('#packing-list-invoice').children('li')[2];
var packingListShipMethod = $('#packing-list-invoice').children('li')[3];
var packingListFOB = $('#packing-list-invoice').children('li')[4];
var packingListBillToName = $('#packing-list-billto').children('li')[0];
var packingListBillToAddress = $('#packing-list-billto').children('li')[1];
var packingListBillToCity = $('#packing-list-billto').children('li')[2];
var packingListBillToPhone = $('#packing-list-billto').children('li')[3];
var packingListShipToName = $('#packing-list-shipto').children('li')[0];
var packingListShipToAddress = $('#packing-list-shipto').children('li')[1];
var packingListShipToCity = $('#packing-list-shipto').children('li')[2];
var packingListShipToPhone = $('#packing-list-shipto').children('li')[3];
var packingListItemNum = $('#pl-itemNum')[0];
var packingListDescription = $('#pl-description').children('li')[0];
var packingListItemSize = $('#pl-description').children('li')[1];
var packingListOrdered = $('#packing-list-item1').children('td')[2];
var packingListShipped = $('#packing-list-item1').children('td')[3];
var packingListBoxCount = $('#packing-list-item1').children('td')[6];
var packingListWeight = $('.weight').children('h4')[0];
var packingListFooterPO = $('#pl-footer').children('li')[0];

packingListShipDate.innerText = obj[0].shipDate;
packingListShipMethod.innerText = obj[0].shipMethod;
packingListFOB.innerText = obj[0].fob;
packingListBillToName.innerText = obj[0].billCompName;
packingListBillToAddress.innerText = obj[0].billStreet1;
packingListBillToCity.innerText = obj[0].billCity + ', ' + obj[0].billState + ', ' + obj[0].billZip;
packingListBillToPhone.innerText = obj[0].billPhoneNum;
packingListShipToName.innerText = obj[0].shipCompName;
packingListShipToAddress.innerText = obj[0].shipStreet1;
packingListShipToCity.innerText = obj[0].shipCity + ', ' + obj[0].shipState + ', ' + obj[0].shipZip;
packingListShipToPhone.innerText = obj[0].shipPhoneNum;
packingListItemNum.innerText = obj[0].tangoItemNum;
packingListDescription.innerText = obj[0].itemDescription;
packingListItemSize.innerText = 'Size: ' + obj[0].layFlat + 'mm Layflat X ' + obj[0].rollLength + ' Meters';
packingListOrdered.innerText = obj[0].quantOrdered;
packingListShipped.innerText = obj[0].totalQuantShipped;
packingListBoxCount.innerText = obj[0].numTotalCarton;
packingListWeight.innerText = 'Weight: ' + obj[0].totalWeight + ' lbs';
packingListFooterPO.innerText = 'Reference PO# ' + obj[0].custPO;

};
function inspectionReport(){
var qualAssuranceShipDate = $('#qa-date').children('span')[0];
var qualAssuranceVendor = $('#qa-tangoInfo').children('li')[4];
var qualAssuranceManuDate = $('#qa-tangoInfo').children('li')[5];
var qualAssuranceName = $('#qa-customerInfo').children('li')[0];
var qualAssuranceAddress = $('#qa-customerInfo').children('li')[1];
var qualAssuranceCity = $('#qa-customerInfo').children('li')[2];
var qualAssurancePO = $('#qa-customerInfo').children('li')[3];
var qualAssuranceDateOrdered = $('#qa-customerInfo').children('li')[4];
var qualAssuranceDescription = $('#qa-description').children('li')[0];
var qualAssuranceDescriptionSize = $('#qa-description').children('li')[1];

qualAssuranceShipDate.innerText = obj[0].shipDate;
qualAssuranceVendor.innerText = 'Vendor: ' + obj[0].vendorSupplierName;
qualAssuranceManuDate.innerText = 'Manufactured Date: ' + obj[0].manuDate;
qualAssuranceName.innerText = obj[0].billCompName;
qualAssuranceAddress.innerText = obj[0].billStreet1;
qualAssuranceCity.innerText = obj[0].billCity + ', ' + obj[0].billState + ', ' + obj[0].billZip;
qualAssurancePO.innerText = 'Customer PO #: ' + obj[0].custPO;
qualAssuranceDateOrdered.innerText = 'Date Ordered: ' + obj[0].custPODate;
qualAssuranceDescription.innerText = obj[0].itemDescription;
qualAssuranceDescriptionSize.innerText = 'Size: ' + obj[0].layFlat + 'mm Layflat X ' + obj[0].rollLength + ' Meters';
};
function palletLabel(){
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

clonePalletLabel();
};
function clonePalletLabel(){
    let div = document.querySelector('#pallet-label-container');
    for (var i = 1; i < 2; i++) {
        const clone = div.cloneNode(true);
        clone.id = 'pallet-label-container';
        div.after(clone);
    }
};
function rollLabel(){
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

cloneRollLabel();
};
function cloneRollLabel(){
    var rollQuantity = $('#lr-quantity').children('td')[1];
    let div = document.querySelector('#lr-container');
    for (var i = 1; i < 10; i++) {
        const clone = div.cloneNode(true);
        clone.id = 'lr-container';
        $('#lr-item-roll').text(i + 1);
        div.after(clone);
        if (i === (10 - 1) && true === true){
            rollQuantity.innerText = obj[0].partialRollLength + "TESTING Meters";
            $('#lr-item-quantity').addClass('red');
        }
        
    }
}
function cartonLabel(){
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

cloneCartonLabel();
};
function cloneCartonLabel(){
    var cartonQuantity = $('#lc-quantity').children('td')[1];
    let div = document.querySelector('#lc-container');
    for (var i = 1; i < 10; i++) {
        const clone = div.cloneNode(true);
        clone.id = 'lc-container';
        $('#lc-item-box').text(i + 1);
        div.after(clone);
        if (i === (10 - 1) && true === true){
            cartonQuantity.innerText = obj[0].partialRollLength + "TESTING Meters";
            $('#lc-item-quantity').addClass('red');
        }
        
    }
};


packingList();
inspectionReport();
palletLabel();
rollLabel();
cartonLabel();









// CONVERT TO PDF API
function deleteLater(){
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
    }