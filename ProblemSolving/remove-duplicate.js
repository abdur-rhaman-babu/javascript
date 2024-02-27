const studentName = ['mubin', 'nahid', 'hasan', 'hadi', 'mubin', 'munna', 'shiyam', 'hadi', 'nahid']

const removeDuplicateElement = (name) =>{
    const uniqueName = ['nahid']

    for(let e of name){
        if(uniqueName.indexOf(e) === -1){
            uniqueName.push(e)
        }
    }
    return uniqueName;
}

const validPerson = removeDuplicateElement(studentName)
console.log(validPerson)