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