
function ocultar1(){
    document.getElementById('obj1').style.visibility='hidden';
    
    }

    function ocultar2(){
        document.getElementById('obj2').style.visibility='hidden';
        
    }

    function ocultar3(){
        document.getElementById('obj3').style.visibility='hidden';
            
    }


function reset() {
 let resetBtn = document.getElementById('reset-btn');
 resetBtn.addEventListener('click', function () {
    document.getElementById('obj1').style.visibility='visible';
    document.getElementById('obj2').style.visibility='visible';
    document.getElementById('obj3').style.visibility='visible';
 })
}