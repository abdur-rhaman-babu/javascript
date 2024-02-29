
// p.innerText = 'Bangladesh is small country'
const submitBtn = document.getElementById('submit-btn');
const para = document.getElementById('para');
const comment = document.getElementById('comment');

submitBtn.addEventListener('click', ()=>{
const p = document.createElement('p')
para.appendChild(p)
 p.innerText = comment.value;
   comment.value = ''
})
