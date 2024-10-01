
k = document.querySelectorAll(".drum")

for (var i = 0; i < k.length; i++) {
    k[i].addEventListener("click", function () { // Anonymous function for event listeners
        var pressedButtonValue = this.innerHTML;
        checkKeyNPlaySound(pressedButtonValue);
        addAnimation(pressedButtonValue);
    });     
    
    
}

document.addEventListener("keydown",function(Event){        //passing event that triggered the EventListener
    var pressedButton = Event.key;          
    checkKeyNPlaySound(pressedButton);
    addAnimation(pressedButton);

})


function checkKeyNPlaySound(key){
    var soundFx;
    switch(key){
        case "w":
            soundFx = new Audio("sounds/kick-bass.mp3");
            soundFx.play();
            break;   
        case "a":
            soundFx = new Audio("sounds/crash.mp3");
            soundFx.play();
            break;   
        case "s":
            soundFx = new Audio("sounds/snare.mp3");
            soundFx.play();
            break;   
        case "d":
            soundFx = new Audio("sounds/tom-1.mp3");
            soundFx.play();
            break;   
        case "j":
            soundFx = new Audio("sounds/tom-2.mp3");
            soundFx.play();
            break;   
        case "k":
            soundFx = new Audio("sounds/tom-3.mp3");
            soundFx.play();
            break;   
        case "l":
            soundFx = new Audio("sounds/tom-4.mp3");
            soundFx.play();
            break;   
    }
}


function addAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed")
    },100)
}



// k[i].addEventListener("click", handleClick);                    // Normal way to add a event listeners 
// function handleClick() {
    //     alert("Clicked");
    // }
    

// //playing a sound by creating a html audio object , and use its play method
// var soundFx = new Audio("sounds/kick-bass.mp3");
// soundFx.play();


// this.classList.toggle("clickedButton");         // the this keyword gives identity of object triggered event