



$(document).ready(function() {
    // $("#id").css("display", "none");
    // $("#id").css("display", "block");
    //alert('ready');
    // $("#tprint").printPage({
    //     url: "http://127.0.0.1:8000/topgaz/",
    //     attr: "href",
    //     message:"Please wait."            
        
    //     });

    // $("#tprint").trigger("click");
     
    $('#ok1').hide();
    $('#ok2').hide();
    var dec1 = parseFloat($('#lbg').html());
    var dec2 = parseFloat($('#lbu').html());
    $('#mtg').val(dec1);
    $('#mtu').val(dec2);


    
    $("#vente").click(function() {
        var w = window.open(height=170,width=60)
        //var w = window.open(height=600,width=100);
        var html = $("#pos").html();
        w.document.write('<html><head><title>1</title><style>');
        w.document.write('#pos {background-color: green;}');
        w.document.write('</style></head><body>');
        w.document.write('<div id=#pos>Hello</div>')
        w.document.write(html);
        
        w.document.write('</body></html>');
        setTimeout(function() {w.close()}, 1000);

        //$(w.document.body).html(html);
        //$('head').append('<link rel="stylesheet" href="topgaz/static/topgaz/style1.css" type="text/css" />');
        //$('#top').append('style="color: red;"');
        
        
          
    });
    
   
    

    $('#chcash').click(function() {
        //alert('ok');
        $('.newcash').slideDown('fast');
        $('#opennow').removeClass('btn-primary');
        $('#opennow').prop('disabled', true);
        $('#okc').prop('disabled', true);
        $('#cash3').slideUp('fast');
        $('#mtg').val('');
        $('#mtu').val('');
        return false;

    });

    $('#okc').click(function() {
        $('#cash2').slideUp('medium');
        $('#cash3').slideDown('fast');
        $('#okc').removeClass('btn-primary');
        $('#okc').prop('disabled', true);
        $('#newg').html($('#mtg').val());
        $('#newu').html($('#mtu').val());
        $('#opennow').addClass('btn-primary');
        $('#opennow').prop('disabled', false);
        $('.before').css('text-decoration','line-through');
        $('.before').css('color','red');
        $('.after').css('font-size','22px');
        $('.after').css('font-weight','bolder');
        $('.after').css('color','green');

        
        //return false;

        
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
        return false;
        
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
        return false;
        
        //alert(s1);
    });

    // $('#opennow').click(function() {
    //     $('#myform').submit();
    // })

    //$('#success-alert').fadeOut(2000);  
    //alert('Hello JQuery'); 
    $('.newcash').hide();
    //$('#cash3').hide();
    $(".alert").fadeTo(2000, 0.5).slideUp(500, function() {
    $(".alert").slideUp(500);

  
});
});




    // $("#vente").click(function () {
    //     var contents = $("#pos").html();
    //     var frame1 = $('<iframe />');
    //     frame1[0].name = "frame1";
    //     frame1.css({ "position": "absolute", "top": "-1000000px" });
    //     $("body").append(frame1);
    //     var frameDoc = frame1[0].contentWindow ? frame1[0].contentWindow : frame1[0].contentDocument.document ? frame1[0].contentDocument.document : frame1[0].contentDocument;
    //     frameDoc.document.open();
    //     //Create a new HTML document.
    //     frameDoc.document.write('<html><head><title>DIV Contents</title>');
    //     frameDoc.document.write('</head><body>');
    //     //Append the external CSS file.
    //     frameDoc.document.write('<link href="style1.css" rel="stylesheet" type="text/css" />');
    //     //Append the DIV contents.
    //     frameDoc.document.write(contents);
    //     frameDoc.document.write('</body></html>');
    //     frameDoc.document.close();
    //     setTimeout(function () {
    //         window.frames["frame1"].focus();
    //         window.frames["frame1"].print();
    //         frame1.remove();
    //     }, 500);
    // });



  // $('#success-alert').html("Hello 3World!");
    // $('.alert').fadeOut(2000);


    