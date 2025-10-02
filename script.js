const boxOne = document.getElementById('box-1');
boxOne.addEventListener('click', ()=>{
    boxOne.style.backgroundColor = 'red';
    boxOne.style.color = 'white';
})
const boxTwo = document.getElementById('box-2');
boxTwo.addEventListener('click', ()=>{
    boxTwo.style.backgroundColor = 'blue';
    boxTwo.style.color = 'white';
})
const boxThree = document.getElementById('box-3');
boxThree.addEventListener('click', ()=>{
    boxThree.style.backgroundColor = 'green';
    boxThree.style.color = 'white';
})
const boxFour = document.getElementById('box-4');
boxFour.addEventListener('click', ()=>{
    boxFour.style.backgroundColor = 'yellow';
})


function greetUser(){
    const userName = document.getElementById('name').value;
    const parah = document.getElementById('greeting');
    parah.innerHTML = `Hello, ${userName}`;
}
