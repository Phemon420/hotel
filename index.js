const firstname=(document.getElementById('fname'));
const lastname= (document.getElementById('lname'));
const nod=(document.getElementById('number'));
const nop=(document.getElementById('people'));



document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myform');
    const Form= document.getElementById('myForm');
    
    Form.addEventListener('submit',function(event){
        event.preventDefault();
        
    });
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var numberod=parseFloat(nod.value);
var numberop=parseFloat(nop.value);
localStorage.setItem('numberod', numberod);
localStorage.setItem('numberop', numberop);
        window.location.href = 'index2.html';
    }); 
});
document.addEventListener('DOMContentLoaded', function() {
    const hotelSelect = document.getElementById('hotel');
    const roomTypeRadios = document.querySelectorAll('input[name="tauba"]');
    const acCheckbox = document.getElementById('ac');
    const lockCheckbox = document.getElementById('lock');
    var totalAmountSpan = document.getElementById('totalAmount');

    function calculateTotalAmount() {
        let totalAmount = parseInt(getSelectedValue(roomTypeRadios), 10);

        const totalAmountInput = document.getElementById('ac');
        const totalamountinput=document.getElementById('lock');
        var roomamount=parseInt(getSelectedValue(roomTypeRadios), 10);
        localStorage.setItem('roomamount', roomamount);
        var acamount = 0;
        
        if (acCheckbox.checked) {
            totalAmount += parseInt(acCheckbox.value, 10);
            acamount+=parseFloat(totalAmountInput.value);
        }
        if (lockCheckbox.checked) {
            totalAmount += parseInt(lockCheckbox.value, 10); 
            acamount+=parseFloat(totalamountinput.value);  
        }
        localStorage.setItem('acamount', acamount);
        totalAmountSpan.textContent = totalAmount;
    }

    function getSelectedValue(radioButtons) {
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                return radioButton.value;
            }
        }
        return 0;
    }

    hotelSelect.addEventListener('change', calculateTotalAmount);
    for (const radioButton of roomTypeRadios) {
        radioButton.addEventListener('change', calculateTotalAmount);
    }
    for (const radioButton of roomTypeRadios) {
        radioButton.addEventListener('change', calculateTotalAmount);
    }
    acCheckbox.addEventListener('change', calculateTotalAmount);
    lockCheckbox.addEventListener('change', calculateTotalAmount);

    const lorm=document.getElementById('pay');

});
document.addEventListener('DOMContentLoaded', function() {
    const redirectToPageButton = document.getElementById('redirectToPage');

    redirectToPageButton.addEventListener('click', function() {
       
        window.location.href = 'index5.html';
        
    });
});
