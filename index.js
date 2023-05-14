const addUserNavBtn =  document.getElementById("add-user-nav")
const viewUserNavBtn = document.getElementById("view-user-nav")
const container = document.getElementById("container")

let addFormHTML = `
            <form id="add-user-form">
                <h1>Add User</h1>
                <label for="name">Name</label>
                <input type="text" id="name" name="name">
                <label for="id">ID number</label>
                <input type="text" id="id" name="id">
                <label for="country">Country</label>
                <select name="country" id="country">
                    <option value="Kenya">Kenya</option>
                    <option value="Egypt">Egypt</option>
                    <option value="Angola">Angola</option>
                    <option value="Tanzania">Tanzania</option>
                </select>
                <label for="languages">Languages spoken</label>
                <input type="text" id="languages" name="languages">
                <input type="submit" value="ADD USER">
            </form>

`
viewUserNavBtn.addEventListener("click", ()=>{
    
    viewUsers()
})
addUserNavBtn.addEventListener("click", ()=>{
    container.innerHTML=addFormHTML

    const addUserForm = document.getElementById("add-user-form")

    addUserForm.addEventListener("submit", (event)=>{
        event.preventDefault()
        addUser()
        // window.location.href="/index.html"
        location.reload()
    })
} )

function viewUsers () {
    container.innerHTML=""
    const users = JSON.parse(localStorage.getItem('users'))
    if (!users||users.length == 0 ) {
        container.innerHTML="No users available"
    }
    for (let i = 0; i < users.length; i++) {
        
        userHTML = `
        <div class="user-card">
            <div class="user-name">Name: <span>${users[i].name}</span></div>
            <div class="id">ID number: <span>${users[i].id}</span></div>
            <div class="country">Country: <span>${users[i].country}</span></div>
            <div class="languages">Languages spoken: <span>${users[i].languages}</span></div>
            <div class="user-card-btns">
                <button>UPDATE</button>
                <button>DELETE</button>
            </div>
        </div>
        `
        container.innerHTML+=userHTML
    }
}


function addUser () {
    const name = document.getElementById("name").value
    const id = document.getElementById("id").value
    const country = document.getElementById("country").value
    const languages = document.getElementById("languages").value

    let users = JSON.parse(localStorage.getItem('users'))
    if (!users) {
        users = []
    }

    const user= {
        name,id,country,languages
    }
    // console.log(user);

    users.push (user)
    localStorage.setItem("users", JSON.stringify(users))
}

console.log(localStorage.getItem('users'));
