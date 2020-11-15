


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

    $('#yesPartialRoll').on('click', function () {
        event.preventDefault();
        $('#hiddenPartialRoll').removeClass('hide');
    });

    $('#noPartialRoll').on('click', function () {
        event.preventDefault();
        $('#hiddenPartialRoll').addClass('hide');
    });

    $('.submitBtn').click(function () {
        event.preventDefault();
        var companyData = {
            billCompName: $('#billCompName').val(),
            billContactName: $('#billContactName').val(),
            billPhoneNum: $('#billPhoneNum').val()
        }
        dataStorage.push(companyData);
        localStorage.setItem('companyList', JSON.stringify(dataStorage));
        console.log(dataStorage);
        
    });

});

