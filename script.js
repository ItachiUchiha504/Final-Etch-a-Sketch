const div = document.getElementById("divMaster")
const blackbtn = document.getElementById("blackbtn");
const whitebtn = document.getElementById("whitebtn");
const redbtn = document.getElementById("redbtn");
const eduardo = document.getElementById("eduardo")
const removebtn = document.getElementById("removeborder")
const addbtn = document.getElementById("addborder")
const bluebtn = document.getElementById("bluebtn")
const greenbtn = document.getElementById("greenbtn")
const yellowbtn = document.getElementById("yellowbtn")


bluebtn.addEventListener("click",()=>{
    const boxs = div.querySelectorAll(".text")
    boxs.forEach(box => box.addEventListener("mouseover",()=>{
        box.style.backgroundColor = "blue"
    }))
})

greenbtn.addEventListener("click",()=>{
    const boxs = div.querySelectorAll(".text")
    boxs.forEach(box => box.addEventListener("mouseover",()=>{
        box.style.backgroundColor = "green"
    }))
})

yellowbtn.addEventListener("click",()=>{
    const boxs = div.querySelectorAll(".text")
    boxs.forEach(box => box.addEventListener("mouseover",()=>{
        box.style.backgroundColor = "yellow"
    }))
})


removebtn.addEventListener("mouseover",()=>{
    const boxs = div.querySelectorAll(".text")
    boxs.forEach(box => removeborder.addEventListener("click",()=>{
        box.style.removeProperty("border")
    }))

})

addbtn.addEventListener("mouseover",()=>{
    const boxs = div.querySelectorAll(".text")
    boxs.forEach(box => addborder.addEventListener("click",()=>{
        box.style.border = "0.5px black solid"
    }))

})



//let input = prompt("How many divs?")

let input = 2500;

function divOutput(){
    for(i=0;i<input;i++){
    const divCreator = document.createElement("div")
    //divCreator.innerText = "Hola"
    divCreator.classList.add("text")
    div.append(divCreator)
    }
};

divOutput();

//coloring


/*
window.onload = () => {
    const boxs = div.querySelectorAll(".text")
    boxs.forEach(box => box.addEventListener("mouseover",()=> {
        box.style.backgroundColor = "black"

    }))
}

*/

/*
window.onload = () => {
    const boxs = div.querySelectorAll(".text")
    boxs.forEach(box => box.addEventListener("mouseover",()=>{
        box.classList.remove(".text")
        box.classList.add("red");

    } ))
}

function green(){
    const boxs = div.querySelectorAll(".text")

}
*/

blackbtn.addEventListener("click",()=>{
    const boxs = div.querySelectorAll(".text")
    boxs.forEach(box => box.addEventListener("mouseover",()=> {
        box.style.backgroundColor = "black";}
))})

whitebtn.addEventListener("click",()=>{
    const boxs = div.querySelectorAll(".text")
    boxs.forEach(box => box.addEventListener("mouseover",()=>{
        box.style.backgroundColor = "white"
    }
    ) )
}
)

redbtn.addEventListener("click",()=>{
    const boxs = div.querySelectorAll(".text")
    boxs.forEach(box => box.addEventListener("mouseover",()=>{
        box.style.backgroundColor = "red"
    }
    ) )
}
)

