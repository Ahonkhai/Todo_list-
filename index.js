// alert("Hello 👋")


var inputfield = document.getElementById("input_text")
var btn = document.getElementById("btn")

console.log(inputfield)

document.body.addEventListener("keydown", () => {
    if(event.keyCode == 13){
    add()
    console.log("enter")
}})


function add() {
    // Create a container
    if(inputfield.value !== ""){
        var container = document.createElement("div")

        container.id = "list_container"
    
        // Created a paragraph that contains the item from the list 
        var paragraph = document.createElement("p")
        paragraph.innerText = inputfield.value
    
        paragraph.id = "Para"
    
        // Created a remove button 🗑️
        var button = document.createElement("button")
        button.innerText = "Remove"
    
        button.id = "remove_btn"
    
        container.appendChild(paragraph)
        container.appendChild(button)
        // document.body.appendChild(paragraph)
        // document.body.appendChild(button)
        document.body.appendChild(container)
    
        inputfield.value = ""
        console.log("add")
    
        button.addEventListener("click", function(){
            container.removeChild(paragraph)
            container.removeChild(button)
            container.style.margin = "0px"
        })
    }    

    // make a function that when i click enter console.log("enter")

    



}



