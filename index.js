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
        var paragraph = document.createElement("input")
        paragraph.value = inputfield.value
        paragraph.type = "text"
        paragraph.readOnly = true

        paragraph.id = "Para"
    
        // Created a remove button 🗑️
        var button = document.createElement("button")
        button.innerText = "Remove"
    
        button.id = "remove_btn"
        
        // Edit button
        var edit_button = document.createElement("button")
        edit_button.innerText = "Edit"
    
        edit_button.id = "edit_btn"

        // save button
        var save_btn =document.createElement("button")
        save_btn.innerHTML = "Save"

        save_btn.id = "save_btn"

        container.appendChild(paragraph)
        container.appendChild(edit_button)    
        container.appendChild(button)
        // document.body.appendChild(paragraph)
        // document.body.appendChild(button)
        document.body.appendChild(container)
    
        inputfield.value = ""
        console.log("add")
    
        button.addEventListener("click", function(){
            container.removeChild(paragraph)
            container.removeChild(button)
            container.removeChild(edit_button)
            container.style.margin = "0px"
        })

        edit_button.addEventListener("click", function(){
            paragraph.readOnly = false
            container.replaceChild(save_btn, edit_button)
        })

        save_btn.addEventListener("click", function(){
            paragraph.readOnly = true
            container.replaceChild(edit_button, save_btn)
        })
    }    

}


var LightEl = document.querySelector("#Light")

// Function to get the value of a CSS variable
function getCSSVariableValue(root) {
    return getComputedStyle(document.documentElement).getPropertyValue(root).trim();
  }
  
  // Usage
  const primaryColor = getCSSVariableValue('--primary-color');
  const secondaryColor = getCSSVariableValue('--secondary-color');
  const extra = getCSSVariableValue('--extra-color')
  
  console.log('Primary Color:', primaryColor); 
  console.log('Secondary Color:', secondaryColor); 
  console.log('extra:', extra);
  
var dark = false;
var rotated = false



function Light() {
    document.body.classList.toggle("dark-theme");
    dark = !dark;

    if (dark) {
      LightEl.src = "images/Light.png";
    } else {
      LightEl.src = "images/Dark.png"; 
    }

    if (rotated) {
      LightEl.style.transform = "rotate(40deg)";
      rotated = !rotated;
    }
    else {
      LightEl.style.transform = "rotate(0deg)";
      rotated = !rotated;
  }
  }



