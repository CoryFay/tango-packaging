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
    // INPUT CREATION BASED ON VALUE OF NUMBER OF ITEMS
    $('.enterData').click(function () {
        event.preventDefault();
        var numItemsInput = $('#numOfItems').val();
        for (var i = 1; i <= numItemsInput; i++) {
            var p = $('<p>');
            p.text('Item ' + i);
            $('.items').append(p);
            var newDiv = $('<div>');
            newDiv.attr('id', 'item' + i);
            $('.items').append(newDiv);

            for (var k = 0; k < inputLabels.length; k++) {
                var div = $('<div>');
                div.addClass('input-field col s6 divCont' + (k + 1));
                $('#item' + i).append(div);
                var inp = $('<input>');
                inp.addClass('validate');
                inp.attr('type', 'text');
                inp.attr('id', 'inp' + (k + 1));
                div.append(inp);
                var label = $('<label>');
                label.text(inputLabels[k]);
                label.attr('for', 'inp' + (k + 1));
                div.append(label);
            };
        };
    });
    // CONVERT INPUTS TO JSON AND PUSH TO  var dataStorage/SAVE TO LOCAL STORAGE
    var dataStorage = [];
    $('.submitBtn').click(function () {
        event.preventDefault();
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
            tangoItemNum: $('#inp1').val(),
            custItemNum: $('#inp2').val(),
            bandsTubing: $('#inp3').val(),
            totalRolls: $('#inp4').val(),
            itemDescription: $('#inp5').val(),
            itemSize: $('#inp6').val(),
            layFlat: $("#inp7").val(),
            cutLength: $('#inp8').val(),
            rollLength: $('#inp9').val(),
            impLength: $('#inp10').val(),
            partialRoll: $('#inp11').val(),
            partialRollLength: $('#inp12').val(),
            quantOrdered: $('#inp13').val(),
            totalQuantShipped: $('#inp14').val(),
            quantPerCarton: $('#inp15').val(),
            numTotalCarton: $('#inp16').val(),
            partialBox: $('#inp17').val(),
            quantPartialBox: $('#inp18').val(),
            vendorSupplierName: $('#inp19').val(),
            totalWeight: $('#totalWeight').val(),
            tangoPackagingPONum: $('#tangoPackagingPONum').val(),
        };
        dataStorage.push(companyData);
        localStorage.setItem('companyList', JSON.stringify(dataStorage));
        console.log(dataStorage);
    });

});

