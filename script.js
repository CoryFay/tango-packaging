$(document).ready(function () {
    // START 'create labels for x amount of items'
    // var numItemsInput = $('#numOfItems').val();
    var inputLabels = [
        'Tango Item #:',
        'Customer Item #',
        'Cut bands or Tubing?',
        '(If Tubing) Total # of rolls:',
        'Item Description:',
        'Item Size:',
    ];

    $('.enterData').click(function () {
        event.preventDefault();
        var numItemsInput = $('#numOfItems').val();
        for (var i = 1; i <= numItemsInput; i++) {
            var p = $('<p>');
            p.text('Item ' + i);
            $('.emptyDiv').append(p);
            for (var k = 0; k < inputLabels.length; k++) {
                if (k === 0 ||k === 1 ||k === 3 ||k === 4) {
                    var div = $('<div>');
                    div.addClass('input-field col s6 divCont' + (k + 1));
                    $('.emptyDiv').append(div);
                    var inp = $('<input>');
                    inp.addClass('validate');
                    inp.attr('type', 'text');
                    inp.attr('id', 'inp' + (k + 1));
                    div.append(inp);
                    var label = $('<label>');
                    label.text(inputLabels[k]);
                    label.attr('for', 'inp' + (k + 1));
                    div.append(label);
                } else if (k === 5){
                    var p2 = $('<p>');
                    p2.text(inputLabels[k]);
                    $('.emptyDiv').append(p2);
                } else if (k === 2){
                    var p3 = $('<p>');
                    p3.text(inputLabels[k]);
                    $('.emptyDiv').append(p3);
                    var p4 = $('<p>');
                    p4.attr('id', 'p4');
                    var label4 = $('<label>');
                    //label4.attr('id', 'l4');
                    label4.attr('for', 'cutBand');
                    var inp4 = $('<input>');
                    inp4.attr('id', 'cutBand');
                    inp4.attr('name', 'cutOrTube');
                    inp4.attr('type', 'radio');
                    var span4 = $('<span>');
                    span4.text('Cut Bands');
                    inp4.html(span4);
                    label4.append(inp4);
                    p4.append(label4);
                }
            };
        };
    });

    // PDF API 
    $('#downloadPDF').click(function () {
        domtoimage.toPng(document.getElementById('content2'))
            .then(function (blob) {
                var pdf = new jsPDF('l', 'pt', [$('#content2').width(), $('#content2').height()]);

                pdf.addImage(blob, 'PNG', 0, 0, $('#content2').width(), $('#content2').height());
                pdf.save("test.pdf");

                that.options.api.optionsChanged();
            });

    });

    // START 'if yes, displays hidden fields'
    $('#partialYes').on('click', function () {
        event.preventDefault();
        $('#hiddenPartialBox').removeClass('hide');
    });

    $('#partialNo').on('click', function () {
        event.preventDefault();
        $('#hiddenPartialBox').addClass('hide');
    });

    $('#yesPartialRoll').on('click', function () {
        event.preventDefault();
        $('#hiddenPartialRoll').removeClass('hide');
    });

    $('#noPartialRoll').on('click', function () {
        event.preventDefault();
        $('#hiddenPartialRoll').addClass('hide');
    });
    // END 'if yes, displays hidden fields'

    var dataStorage = [];
    // convert input data to JSON 
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
            totalWeight: $('#totalWeight').val(),
            tangoPackagingPONum: $('#tangoPackagingPONum').val(),
        }
        // var existing = localStorage.getItem('companyList');
        // dataStorage.push(existing);
        dataStorage.push(companyData);
        localStorage.setItem('companyList', JSON.stringify(dataStorage));
        console.log(dataStorage);
        // manipulate text on click
    });

});

