// alert('Interface Operations ...')
function showDiv(operation) {
    document.querySelectorAll('.operation').forEach(operation => {
        operation.style.display = 'none';
    })
    document.querySelector(`#${operation}`).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.bop').forEach(bop => {
        bop.onclick = function() {
            showDiv(this.dataset.operation);
        }
    })
})