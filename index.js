// alert("Hello 👋")


var inputfield = document.getElementById("input_text")
var btn = document.getElementById("btn")

console.log(inputfield)

document.body.addEventListener("keydown", () => {
    if(event.keyCode == 13){
    add()
    console.log("enter")
}})

function get_time() {
  var Time = new Date();
  var hours = Time.getHours();
  var minutes = Time.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  var time_text = hours + ":" + minutes;

  var time = time_text 

  return time
}

var time = get_time();
console.log(time)

function get_date() {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();

  var date_text = day + "/" + month + "/" + year;

  return date_text
}

var date = get_date();
console.log(date)


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
    
        // Created a span that contains the time
        var span = document.createElement("span")
        span.innerText = get_time() + " " + get_date()

        span.id = "time"

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
        container.appendChild(span)
        // document.body.appendChild(paragraph)
        // document.body.appendChild(button)
        document.body.appendChild(container)
    
        inputfield.value = ""
        console.log("add")
    
        button.addEventListener("click", function(){
            container.removeChild(paragraph)
            container.removeChild(span)
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
  const extra = getCSSVariableValue('--extra-color');
  const background = getCSSVariableValue('--background-btn');
  const background_hover = getCSSVariableValue('--background-btn-hover');

  console.log('Primary Color:', primaryColor); 
  console.log('Secondary Color:', secondaryColor); 
  console.log('extra:', extra);
  console.log('background:', background);
  console.log('background_hover:', background_hover);

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



