$(document).ready(function () {
    // ARRAY OF LABELS TO PULL FROM FOR INPUT CREATION
    var inputLabels = [
        'Tango Item #:',
        'Customer Item #',
        'Cut bands or Tubing?',
        '(If Tubing) Total # of rolls:',
        'Item Description:',
        'Item Size:',
        'Layflat (always in mm)',
        'If Cut Bands, then: Cut Length (mm)',
        'If Tubing, then: Roll Length (mm)',
        'If Tubing, then optional: Impression Length (mm)',
        'If Tubing, then: Is there a partial roll?',
        'If Yes, then: Partial Roll Length',
        'Quantity Ordered:',
        'Total Quantity Shipped:',
        'Quantity per Carton:',
        'Number of Total Cartons:',
        'Is there a partial box?',
        'Quantity in Partial Box:',
        'Vendor/Supplier Name:'
    ];
    var idLetters = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's'
    ]
    // INPUT CREATION BASED ON VALUE OF INPUT 'numOfItems'
    $('.enterData').click(function () {
        event.preventDefault();
        var numItemsInput = $('#numOfItems').val();
        for (var i = 1; i <= numItemsInput; i++) {
            var newDiv = $('<div>');
            newDiv.attr('id', 'item' + i);
            $('.items').append(newDiv);
            var p = $('<p>');
            p.text('Item ' + i);
            $('#item' + i).append(p);


            for (var k = 0; k < inputLabels.length; k++) {
                var div = $('<div>');
                div.addClass('input-field col s6 divCont' + (k + 1));
                $('#item' + i).append(div);
                var inp = $('<input>');
                inp.addClass('validate');
                inp.attr('type', 'text');
                inp.attr('id', 'inp' + idLetters[k] + i);
                div.append(inp);
                var label = $('<label>');
                label.text(inputLabels[k]);
                label.attr('for', 'inp' + idLetters[k] + i);
                div.append(label);
            };
        };
    });
    // CONVERT INPUTS TO JSON AND PUSH TO  var dataStorage/SAVE TO LOCAL STORAGE
    var dataStorage = [];
    $('.submitBtn').click(function () {
        event.preventDefault();
        var numItemsInput = $('#numOfItems').val();
        for (var j = 1; j <= numItemsInput; j++) {
            var companyData = {
                company: $('#billCompName').val(),
                billCompName: $('#billCompName').val(),
                billContactName: $('#billContactName').val(),
                billPhoneNum: $('#billPhoneNum').val(),
                billStreet1: $('#billStreet1').val(),
                billStreet2: $('#billStreet2').val(),
                billCity: $('#billCity').val(),
                billState: $('#billState').val(),
                billZip: $('#billZip').val(),
                shipCompName: $('#shipCompName').val(),
                shipContactName: $('#shipContactName').val(),
                shipPhoneNum: $('#shipPhoneNum').val(),
                shipStreet1: $('#shipStreet1').val(),
                shipStreet2: $('#shipStreet2').val(),
                shipCity: $('#shipCity').val(),
                shipState: $('#shipState').val(),
                shipZip: $('#shipZip').val(),
                shipDate: $('#shipDate').val(),
                manuDate: $('#manuDate').val(),
                custPO: $('#custPO').val(),
                custPODate: $('#custPODate').val(),
                shipMethod: $('#shipMethod').val(),
                fob: $('#fob').val(),
                numOfItems: $('#numOfItems').val(),
                tangoItemNum: $('#inpa' + j).val(),
                custItemNum: $('#inpb' + j).val(),
                bandsTubing: $('#inpc' + j).val(),
                totalRolls: $('#inpd' + j).val(),
                itemDescription: $('#inpe' + j).val(),
                itemSize: $('#inpf' + j).val(),
                layFlat: $('#inpg' + j).val(),
                cutLength: $('#inph' + j).val(),
                rollLength: $('#inpi' + j).val(),
                impLength: $('#inpj' + j).val(),
                partialRoll: $('#inpk' + j).val(),
                partialRollLength: $('#inpl' + j).val(),
                quantOrdered: $('#inpm' + j).val(),
                totalQuantShipped: $('#inpn' + j).val(),
                quantPerCarton: $('#inpo' + j).val(),
                numTotalCarton: $('#inpp' + j).val(),
                partialBox: $('#inpq' + j).val(),
                quantPartialBox: $('#inpr' + j).val(),
                vendorSupplierName: $('#inps' + j).val(),
                totalWeight: $('#totalWeight').val(),
                tangoPackagingPONum: $('#tangoPackagingPONum').val(),
            }
            dataStorage.push(companyData);
        };
       
        localStorage.setItem('companyList', JSON.stringify(dataStorage));
        console.log(dataStorage);
    });

});

