let index = 0

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
            SaveBDD()
            console.log("sauvegarder");
        }
        else{
            console.log("écrire un text");
            input_tete.remove()
        }
    });  
    
    barre_todo_tete.appendChild(button_tete)

const button_clear = document.createElement("button") //le bouton save
    button_clear.innerText = "clear"
    button_clear.classList.add("button_clear")
    button_clear.setAttribute("type","button")
    
    button_clear.addEventListener("click",() =>{
        localStorage.clear()
    });  
    
    barre_todo_tete.appendChild(button_clear)

const bouton_hello = document.createElement("button") //le bouton save
    bouton_hello.innerText = "hello"
    bouton_hello.classList.add("bouton_hello")
    bouton_hello.setAttribute("type","button")
    
    bouton_hello.addEventListener("click", async() =>{
        const res = await fetch("http://localhost:3030/helloo")
        const message = await res.text()
        console.log(message);   
    });  
    
    barre_todo_tete.appendChild(bouton_hello)

const bouton_nbr_alea = document.createElement("button") //le bouton save
    bouton_nbr_alea.innerText = "tirage "
    bouton_nbr_alea.classList.add("bouton_nbr_alea")
    bouton_nbr_alea.setAttribute("type","button")
    
    bouton_nbr_alea.addEventListener("click", async() =>{
        const p = document.createElement("p")
        p.classList.add("p_test")

        const res = await fetch("http://localhost:3030/nombre_alea")
        const message = await res.text()
        p.innerText = message
        console.log(message); 
        document.body.appendChild(p)  
    });  
    
    barre_todo_tete.appendChild(bouton_nbr_alea)

const body_list = document.createElement("div") //une dive qui contient les todos
    body_list.classList.add("list")
    document.body.appendChild(body_list)



function todo_rajout() {
    const div_todo = document.createElement("div") //les dives qui contient les infos
    index++
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

    async function DeleteBDD() {
        const res = await fetch("http://localhost:3030/delete/"+text_todo)
        const message = await res.text()
        console.log(message); 
    }

    // localStorage.setItem(index+'_message', JSON.stringify([input_tete.value]))

    const button_delete_todo = document.createElement("button") //la bouton de la .todo
    button_delete_todo.innerText = "delete"
    button_delete_todo.classList.add("button_todo")
    button_delete_todo.setAttribute("type","button")
    div_todo.appendChild(button_delete_todo)

    button_delete_todo.addEventListener("click", () => {
        div_todo.remove()
        DeleteBDD()
    })

    body_list.appendChild(div_todo)



}


async function SaveBDD() {
    const res = await fetch("http://localhost:3030/CreateTache/"+input_tete.value)
    const message = await res.text()
    console.log(message); 
    input_tete.value = ""


    // const tirage = document.createElement("p")
    // tirage.classList.add("tirage")
    
    // const r = await fetch("http://localhost:3030/nombre_alea_tache")
    // const m = await r.text()
    // tirage.innerText = m
    // console.log(m); 
    // document.body.appendChild(tirage)  
}


