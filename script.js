const botao = document.getElementById("botao")
let i = 5

const adicionaItem = (event) => {
    const container = document.getElementById("container")
    
    const novoItem = document.createElement("article")
    novoItem.classList.add("item")
    novoItem.setAttribute("onclick", "removeItem(event)")
    novoItem.innerHTML = i
    i++
    container.appendChild(novoItem)
    
}

const removeItem = () => {
    event.target.remove()
}