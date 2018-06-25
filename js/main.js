$(document).ready(function() {
    $.ajax({
        dataType: "json",
        url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
        success: function(result) {
            $('#rate').html(result.bpi.USD.rate);
        }
    });
});