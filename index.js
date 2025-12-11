const button = document.querySelectorAll('.button'); // here we are selecting all the buttons with class 'button'
const body = document.querySelector("body") // selecting body to change background color


button.forEach(function (btn){    //here we are applying for each loop on all buttons , and functions as a callback function btn
    console.log(btn);
    btn.addEventListener('click',function(e){ // here we are adding eventlistener to each button for click event with callback function e
        console.log(e);
        console.log(e.target);
        if(e.target.id === "blue"){ // checking if the id of clicked button is blue
            body.style.backgroundColor = e.target.id; // changing background color of body to blue
        }
        if(e.target.id === "red"){ // checking if the id of clicked button is red
            body.style.backgroundColor = e.target.id; // changing background color of body to blue
        }
        if(e.target.id === "yellow"){ // checking if the id of clicked button is yellow
            body.style.backgroundColor = e.target.id; // changing background color of body to blue
        }
        if(e.target.id === "grey"){ // checking if the id of clicked button is grey
            body.style.backgroundColor = e.target.id; // changing background color of body to blue
        }
        if(e.target.id === "purple"){ // checking if the id of clicked button is purple
            body.style.backgroundColor = e.target.id; // changing background color of body to blue
        }
        
    })
});