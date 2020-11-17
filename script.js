
$(document).ready(function () {

    var dataStorage = [];
    
    
    $('#partialYes').on('click', function () {
        event.preventDefault();
        $('#hiddenPartialBox').removeClass('hide');
    });

    $('#partialNo').on('click', function () {
        event.preventDefault();
        $('#hiddenPartialBox').addClass('hide');
    });
    // convert input data to JSON 
    $('.submitBtn').click(function () {
        event.preventDefault();
        var companyData = {
            company: $('#billCompName').val(),
            billCompName: $('#billCompName').val(),
            billContactName: $('#billContactName').val(),
            billPhoneNum: $('#billPhoneNum').val()
        }
        // var existing = localStorage.getItem('companyList');
        // dataStorage.push(existing);
        dataStorage.push(companyData);
        localStorage.setItem('companyList', JSON.stringify(dataStorage));
        console.log(dataStorage);
        // manipulate text on click
        
        
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
    var p = $('#palBillCompName');
    p.text(dataStorage.company);
    
    console.log(p);
    console.log(p.text());
});

