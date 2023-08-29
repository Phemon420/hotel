document.addEventListener('DOMContentLoaded', function() {
    const roomAmount = parseFloat(localStorage.getItem('roomamount')) || 0;
        var room = document.getElementById('ROOM');
        const amenitiesAmount=parseFloat(localStorage.getItem('acamount')) || 0;
        var amenities= document.getElementById('AMENITIES');
        var numberod=parseFloat(localStorage.getItem('numberod')) || 0;
        var numberop=parseFloat(localStorage.getItem('numberop')) || 0;
    room.textContent = roomAmount;
    amenities.textContent=amenitiesAmount;
   var subtotal=document.getElementById('TOTAL');
   var Amount=0;
   if(numberop>2){
    Amount+=((1000*numberod)*(numberop-2));
   }
   Amount+=((roomAmount+amenitiesAmount)*(numberod));
   subtotal.textContent=Amount;
   var tax=document.getElementById('TAX');
   var amt=document.getElementById('AMOUNT');
   var k=Amount*0.05;
   tax.textContent=k;
   Amount=Amount+k;
   amt.textContent=Amount;
   var advance=document.getElementById('ADVANCE');
   var n=Amount*0.5;
   advance.textContent=n;
   const currentDateElement = document.getElementById('currentDate');
    
   const options = { year: 'numeric', month: 'long', day: 'numeric' };
   const currentDate = new Date().toLocaleDateString(undefined, options);
   
   currentDateElement.textContent = `Date: ${currentDate}`;
});
