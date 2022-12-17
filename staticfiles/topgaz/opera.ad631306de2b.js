//alert('Interface Operations ...')
function showDiv(operation) {
    document.querySelectorAll('.operation').forEach(operation => {
        operation.style.display = 'none';
    })
    document.querySelector(`#${operation}`).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#summary').style.display = 'block';
    //document.querySelector('#vente').style.display = 'block';
    //document.querySelector('#buyus').style.display = 'block';

    document.querySelectorAll('.bop').forEach(bop => {
        bop.onclick = function() {
            showDiv(this.dataset.operation);
        }
    })

    //let lprix = parseInt(document.querySelector('#prix').innerHTML);

    //document.querySelector('#qtegal').focus();
    document.querySelector('#qtegal').onkeyup = () => {
        //alert('works')
        let qte = document.querySelector('#qtegal').value 
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

})