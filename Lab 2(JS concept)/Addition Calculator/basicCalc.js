const button = document.querySelector('button');
button.addEventListener('click', ()=>{
    //read the data 
    const input1 = document.getElementById('first');
    const number1 = Number(input1.value);
    const input2 = document.getElementById('second');
    const number2 = Number(input2.value);

    //here in the input field, we have taken type as number so user can't enter anything other than the number. But, if we had not done that then the following case could be considered: 
    //isNaN means we are checking for not a number.
    if (isNaN(number1) || isNaN(number2))
        return;
    //result
    const result = number1 + number2;
    const re = document.getElementById('result');
    re.textContent = "Result: " + result;
})