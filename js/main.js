function showBtcRate(element) {
    setInterval(function(){
        $.ajax({
            dataType: "json",
            url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
            success: function(result) {
                $(element).html(result.bpi.USD.rate);
            }
        });
    }, 1000);
}

$(document).ready(function() {
    setInterval(showBtcRate('#rate'), 1000);
});

