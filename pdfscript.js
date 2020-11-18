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