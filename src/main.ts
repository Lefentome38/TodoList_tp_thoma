
const barre_todo_sup = document.createElement("div") //une dive qui contient les éléments de la barre_sup
    barre_todo_sup.classList.add("barre_sup")
    document.body.appendChild(barre_todo_sup)

const input_sup = document.createElement("input") //barre de texte 
    input_sup.classList.add("texte_sup")
    input_sup.setAttribute("type","text")
    barre_todo_sup.appendChild(input_sup)

const button_sup = document.createElement("button") //le bouton save
    button_sup.innerText = "save"
    button_sup.classList.add("button_sup")
    button_sup.setAttribute("type","button")
    button_sup.addEventListener("click",() =>{
        todo_rajout();
   });
    barre_todo_sup.appendChild(button_sup)

const body_list = document.createElement("div") //une dive qui contient les todos
    body_list.classList.add("list")
    document.body.appendChild(body_list)


function todo_rajout() {
    const div_todo = document.createElement("div") //les dives qui contient les infos
    div_todo.classList.add("todo")

    const chek_todo = document.createElement("input") //la checkbox de la .todo
    chek_todo.classList.add("checkbox_todo")
    chek_todo.setAttribute("type","checkbox")
    div_todo.appendChild(chek_todo)

    const text_todo = document.createElement("p") //la text de la .todo
    text_todo.classList.add("text_todo")
    text_todo.style.marginRight = "5%"
    text_todo.style.marginLeft = "5%"
    text_todo.innerText = input_sup.value
    div_todo.appendChild(text_todo)

    input_sup.value = ""

    const button_todo = document.createElement("button") //la bouton de la .todo
    button_todo.innerText = "delete"
    button_todo.classList.add("button_todo")
    button_todo.setAttribute("type","button")
    div_todo.appendChild(button_todo)

    body_list.appendChild(div_todo)
}

button_sup.addEventListener("click",() =>{
    
});

