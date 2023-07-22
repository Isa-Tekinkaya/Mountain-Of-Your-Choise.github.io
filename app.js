const mountain1Btn = document.querySelector(".mountain1")
const mountain2Btn = document.querySelector(".mountain2")
const scheduleMountain = document.querySelector(".scheduleMountain1")

mountain1Btn.addEventListener("click", () => {
    if(mountain2Btn.classList == "mountain1"){
        mountain1Btn.classList.remove("mountain2")
        mountain1Btn.classList.add("mountain1")
        mountain2Btn.classList.remove("mountain1")
        mountain2Btn.classList.add("mountain2")
        scheduleMountain.classList.remove("scheduleMountain2")
        scheduleMountain.classList.add("scheduleMountain1")
    } 
   
    
})

mountain2Btn.addEventListener("click", () =>{
    if( mountain1Btn.classList == "mountain1"){
        mountain2Btn.classList.remove("mountain2")
        mountain2Btn.classList.add("mountain1")
        mountain1Btn.classList.remove("mountain1")
        mountain1Btn.classList.add("mountain2")
        scheduleMountain.classList.remove("scheduleMountain1")
        scheduleMountain.classList.add("scheduleMountain2")
    }
    
    
})
