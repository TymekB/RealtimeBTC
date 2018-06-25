$(document).ready(function() {
    setInterval(function(){
        $.ajax({
            dataType: "json",
            url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
            success: function(result) {
                $('#rate').html(result.bpi.USD.rate);
            }
        });
    }, 1000);
});

