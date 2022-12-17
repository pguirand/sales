$(document).ready(function() {
    // $("#id").css("display", "none");
    // $("#id").css("display", "block");
    $('#ok1').hide();
    $('#ok2').hide();
    var tx = $('#lbg').val();
    $('#l1').html() = $('#lbg').val();
    $('#mtg').val() = $('#lbg').val();
    $('#mtu').val() = $('#lbu').html();
    alert(tx);
  
    $('#chcash').click(function() {
        $('.newcash').slideDown('fast');
        $('#opennow').removeClass('btn-primary');
        $('#opennow').prop('disabled', true);
        $('#okc').prop('disabled', true);
        $('#cash3').slideUp('fast');
        return false;

    });

    $('#okc').click(function() {
        $('.newcash').slideUp('medium');
        $('#cash3').slideDown('fast');
        $('#okc').removeClass('btn-primary');
        $('#okc').prop('disabled', true);
        $('#mtg').val('');
        $('#mtu').val('');
        $('#opennow').addClass('btn-primary');
        $('#opennow').prop('disabled', false);
        return false;

        
    });

    $("#mtg").keyup(function() {
        var q = parseInt($('#ok2').html());
        if ( $(this).val().length === 0 ) 
            var g = 0;
        else 
            var g = 1;
        $('#ok1').html(g)
        var t = parseInt($('#ok1').html())
        var t1 = q * t ;
        if (t1 === 1) {
            $('#okc').addClass('btn-primary');
            $('#okc').prop('disabled', false);
        } else {
            $('#okc').removeClass('btn-primary');
            $('#okc').prop('disabled', true);
        }
        //alert('ok');
        
    });
    $("#mtu").keyup(function() {
        var p = parseInt($('#ok1').html());
        if ( $(this).val().length === 0 ) 
            var h = 0;
        else 
            var h = 1;
        $('#ok2').html(h);
        var s = parseInt($('#ok2').html());
        var s1 = p * s;
        if (s1 === 1) {
            $('#okc').addClass('btn-primary');
            $('#okc').prop('disabled', false);
        } else {
            $('#okc').removeClass('btn-primary');
            $('#okc').prop('disabled', true);
        }
        
        //alert(s1);
    });

    //$('#success-alert').fadeOut(2000);  
    alert('Hello JQuery'); 
    $('.newcash').hide();
    alert('hey');

    //$('#cash3').hide();
    $(".alert").fadeTo(2000, 0.5).slideUp(500, function() {
    $(".alert").slideUp(500);

  
});
});




  // $('#success-alert').html("Hello 3World!");
    // $('.alert').fadeOut(2000);