'use strict'
const num = 5;
const winner = Math.floor(Math.random() * num);

for (let i = 0; i < num ; i++) {


    const div = document.createElement('div');

    div.classList.add('box');
    div.textContent = 'click!';

    div.addEventListener('click', () => {
        if (i === winner) {
            div.textContent = 'win!';
            div.classList.add('win');
            alert("Clear!!")
           location.reload()
        }
        else {
            div.textContent = 'lose...';
            div.classList.add('lose');
            alert("nooooob:)")
            location.reload()
        }
    
    });
document.body.appendChild(div);

}
alert("クリックしてアタリを見つけよう！")
