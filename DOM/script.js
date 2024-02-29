const li = document.createElement('li');
li.innerText = 'blog-6'

const ul = document.getElementById('blog-6');
ul.appendChild(li)

const blog3 = document.getElementById('blog-3');
ul.removeChild(blog3)

const single_div = document.querySelector('.single-div')

single_div.innerHTML = `
<h3>Afganistan</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nostrum omnis. Laborum, maxime tempora atque veritatis corporis doloremque, ducimus exercitationem ipsa assumenda quia aliquam mollitia quam sequi molestiae dolor nihil!</p>
<button>Submit</button>
`
const main_div = document.getElementById('main-div')
main_div.appendChild(single_div);

const paras = document.getElementsByTagName('p')
// console.log(paras)
for (let para of paras ){
    para.style.background = 'red'
    para.style.borderRadius = '5px'
    para.style.border = '5px solid green'
}

