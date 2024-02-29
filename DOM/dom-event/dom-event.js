const redbutton = () =>{
    document.body.style.background = 'red'
}

const blueBtn = document.getElementById('make-blue-btn');

// blueBtn.onclick = () => {
//     document.body.style.background = 'blue'
// }

blueBtn.addEventListener('click', ()=>{
    document.body.style.background = 'blue'
})

