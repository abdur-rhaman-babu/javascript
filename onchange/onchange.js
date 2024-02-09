// const nameInput = document.getElementById('name')
// // console.log(nameInput)

// nameInput.addEventListener('change', onchangeHandler);

// function onchangeHandler(e){
//     console.log(e.target.value)
// }

const programs = document.querySelectorAll('.program');
// console.log(checkBox)

Array.from(programs).map((program)=>{
    // console.log(program)
    program.addEventListener('change',(e)=>{
        if(e.target.checked){
            console.log(e.target.value)
        }
    })
})