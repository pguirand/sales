//alert('Interface Operations ...')

// function printDiv() 
// {

//   var divToPrint=document.getElementById('pos');

//   var newWin=window.open('','Print-Window');

//   newWin.document.open();

//   newWin.document.write('<html><body onload="window.print()">'+pos.innerHTML+'</body></html>');

//   newWin.document.close();

//   setTimeout(function(){newWin.close();},10);

// }

function printDiv() {
    var divContents = document.getElementById("pos").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<body >'); // <h1>Div contents are <br>
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}

function showDiv(operation) {
    document.querySelectorAll('.operation').forEach(operation => {
        operation.style.display = 'none';
    })
    document.querySelector(`#${operation}`).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    //alert('Test ongoing...');
   
    let lprix = parseInt(document.querySelector('#prix').innerHTML);
    document.querySelector('#qtegal').focus();
    document.querySelector('#qtegal').onkeyup = () => {
        //alert('works')
        let qte = document.querySelector('#qtegal').value;
        

        let prix = parseInt(document.querySelector('#prix').innerHTML)
        let avant = parseFloat(document.querySelector('#avantm').innerHTML)
        let after = (parseFloat(qte) + parseFloat(avant)).toFixed(1)

        total = (qte * prix).toFixed(2);
        document.querySelector('#p2gal').value = prix;
        document.querySelector('#afterm').innerHTML = after
        document.querySelector('#meter2').value = after

        document.querySelector('#buytot').innerHTML = total
        document.querySelector('#p2tot').value = total
   
    }

     // var alertdiv = document.querySelector('.alert');
    // setTimeout(function() {
    //     document.querySelectorAll('.alert').forEach(div => {
    //         div.remove();
    //     })
    //     //alertdiv.remove();

    // },3000)
    
    
    // $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
    //     $("#success-alert").slideUp(500);
    // });
      
    // document.querySelector('#summary').style.display = 'block';
    // document.querySelector('#vente').style.display = 'block';
    // document.querySelector('#transaction').style.display = 'block';

    // document.querySelectorAll('.bop').forEach(bop => {
    //     bop.onclick = function() {
    //         showDiv(this.dataset.operation);
    //     }
    // })


})