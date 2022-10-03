var valueAErr1 = document.getElementById('valueAErr1')
var valueBErr1 = document.getElementById('valueBErr')
var valueCErr1 = document.getElementById('valueCErr1')
var valueDErr1= document.getElementById('valueDErr1')

function validateName(){
    var name = document.getElementById('valueA1').value;

    if(name.length == 0){
        valueAErr1.innerHTML = 'Name is Required';
        return false;
    } 

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        valueAErr1.innerHTML = 'Full name is required';
        return false;
    }

    valueAErr1.innerHTML = '<i class="bi bi-check-circle-fill icon"></i>';
    return true;
}

function validatenumber(){
    var number = document.getElementById('valueB1').value;

    if(number.length == 0){
        valueBErr1.innerHTML = 'Number is Required';
        return false;
    }

    if(number.length !==10){
        valueBErr1.innerHTML = 'Numbers should be more than 10';
        return false;
    } 

    if(!number.match(/^[0-9]{10}$/)){
        valueBErr1.innerHTML = 'Only digits please';
        return false;
    }

    valueBErr1.innerHTML = '<i class="bi bi-check-circle-fill icon"></i>';
    return true;    
}


// function validateNumber(){
//     var number = document.getElementById('valueB1').value;

//     if(number.length ==0){
//         valueBErr1.innerHTML = 'number required';
//         return false;
//     }


//     if(number.length !==10){
//         valueBErr1.innerHTML = 'numbers should be more than 0';
//         return false;
//     }


//     if(!number.match(/^[0-10]{10}$/)){
//         valueBErr1.innerHTML = 'numbers  is required';
//         return false;
//     }

//     valueBErr1.innerHTML = '<i class="bi bi-check-circle-fill icon"></i>';
//     return true;
// }
