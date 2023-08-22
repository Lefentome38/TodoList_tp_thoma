const barre_todo_tete = document.createElement("div") //une dive qui contient les éléments de la barre_sup
    barre_todo_tete.classList.add("barre_de_tete")
    document.body.appendChild(barre_todo_tete)

const input_tete = document.createElement("input") //barre de texte 
    input_tete.classList.add("texte_de_tete")
    // input_tete.setAttribute("minlenght","1") §
    input_tete.setAttribute("type","text")
    barre_todo_tete.appendChild(input_tete)

const button_tete = document.createElement("button") //le bouton save
    button_tete.innerText = "save"
    button_tete.classList.add("button_de_tete")
    button_tete.setAttribute("type","button")

    button_tete.addEventListener("click",() =>{
        if (input_tete.value.length > 0)  {
            todo_rajout();
            console.log("oh");
        }
        else{
            console.log("écrire un text");
            input_tete.remove
        }
    });  
    
    barre_todo_tete.appendChild(button_tete)

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

    chek_todo.addEventListener("click", () => {
        text_todo.classList.toggle("cachee")
    })

    const text_todo = document.createElement("p") //la text de la .todo
    text_todo.classList.add("text_todo")
    text_todo.innerText = input_tete.value
    div_todo.appendChild(text_todo)

    input_tete.value = ""

    const button_delete_todo = document.createElement("button") //la bouton de la .todo
    button_delete_todo.innerText = "delete"
    button_delete_todo.classList.add("button_todo")
    button_delete_todo.setAttribute("type","button")
    div_todo.appendChild(button_delete_todo)

    button_delete_todo.addEventListener("click", () => {
        div_todo.remove()
    })

    body_list.appendChild(div_todo)
}

button_tete.addEventListener("click",() =>{
    
});

