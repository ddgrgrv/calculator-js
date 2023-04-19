const numbers = document.querySelectorAll('.white-btn'),
      preview = document.querySelector('.preview');  

function createCalc(arr){

}

numbers.forEach((el)=>{
    el.addEventListener('click',()=>{
        preview.append(el.value);
    });
});