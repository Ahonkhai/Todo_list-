// alert("Hello 👋")
  
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
  var session = "";
  var minutes = Time.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes
  }

  if (hours > 12) {
    session = "PM";
    hours = hours - 12;
  }
  else {
    session = "AM";
  }


  var time_text = hours + ":" + minutes + " " + session;

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
        span.innerText = get_time()

        span.id = "time"

        // created a checkbox
        var checkbox = document.createElement("input")
        checkbox.type = "checkbox"

        checkbox.id = "checkbox"

        
        checkbox.addEventListener("change", handleCheckboxChange);
        // created span2 that contains the date
        var span2 = document.createElement("span")
        span2.innerText = get_date()
        
        span2.id = "time"
        
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
        
        var timer;
        
        // Append the paragraph to the container
        container.appendChild(checkbox)
        container.appendChild(span)
        container.appendChild(paragraph)
        container.appendChild(edit_button)    
        container.appendChild(button)
        container.appendChild(span2)
        // document.body.appendChild(paragraph)
        // document.body.appendChild(button)
        document.body.appendChild(container)
        
        inputfield.value = ""
        console.log("add")
        
        button.addEventListener("click", function(){
          container.removeChild(checkbox)
          container.removeChild(paragraph)
          container.removeChild(span)
          container.removeChild(span2)
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
        
        function handleCheckboxChange() {
          if (checkbox.checked === true) {
            timer = setTimeout(function() {
              container.removeChild(checkbox)
              // Remove other elements and adjust styles as needed
              container.removeChild(paragraph)
              container.removeChild(span)
              container.removeChild(span2)
              container.removeChild(button)
              container.removeChild(edit_button)
              container.style.margin = "0px"
              alert("You have completed a task")
            }, 3000)
          }
          else {
            clearTimeout(timer)
        }
      }    
      
    }  
}



// // give me a code for making an item on my list draggable and droppable

// var dragItem = document.querySelector("#list_container");

// var container = document.querySelector("#container");

// var active = false;
// var currentX;
// var currentY;
// var initialX;
// var initialY;
// var xOffset = 0;
// var yOffset = 0;

// container.addEventListener("touchstart", dragStart, false);
// container.addEventListener("touchend", dragEnd, false);
// container.addEventListener("touchmove", drag, false);

// container.addEventListener("mousedown", dragStart, false);
// container.addEventListener("mouseup", dragEnd, false);
// container.addEventListener("mousemove", drag, false);

// function dragStart(e) {
//   if (e.type === "touchstart") {
//     initialX = e.touches[0].clientX - xOffset;
//     initialY = e.touches[0].clientY - yOffset;
//   } else {
//     initialX = e.clientX - xOffset;
//     initialY = e.clientY - yOffset;
//   }

//   if (e.target === dragItem) {
//     active = true;
//   }
// }

// function dragEnd(e) {
//   initialX = currentX;
//   initialY = currentY;

//   active = false;
// }

// function drag(e) {
//   if (active) {

//     e.preventDefault();

//     if (e.type === "touchmove") {
//       currentX = e.touches[0].clientX - initialX;
//       currentY = e.touches[0].clientY - initialY;
//     } else {
//       currentX = e.clientX - initialX;
//       currentY = e.clientY - initialY;
//     }

//     xOffset = currentX;
//     yOffset = currentY;

//     setTranslate(currentX, currentY, dragItem);
//   }
// }

// function setTranslate(xPos, yPos, el) {
//   el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";

//   console.log("setTranslate")

// }







