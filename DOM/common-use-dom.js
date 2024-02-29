const para = document.getElementById('para');
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const updateInput = document.getElementById('update-input')
button1.addEventListener('click', ()=>{
    para.innerText = 'It is useful or button 1'
})

button2.addEventListener('click', ()=>{
    para.innerText = 'It is not useful or button 2'
})

const update = document.getElementById('update');
update.addEventListener('click', ()=>{
    para.innerText = updateInput.value;
    updateInput.value = '';
})
