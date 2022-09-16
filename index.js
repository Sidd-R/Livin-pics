const nextEl=document.querySelector(".next")
const prevEL=document.querySelector(".prev")
const imgsEl=document.querySelectorAll("img")
const imageContainerE1=document.querySelector(".image-container")
const imageContainerE2=document.querySelector(".image-container-2")
const imageContainerE3=document.querySelector(".image-container-3")
console.log(imgsEl.length)

let timeout
let currentImg = 1

nextEl.addEventListener("click", () => {
    currentImg += 1
    clearTimeout(timeout)
    updateImage()
}) 

prevEL.addEventListener("click" ,() => {
    currentImg -= 1
    clearTimeout(timeout)
    updateImage()
})

updateImage()

function updateImage()
{
    if(currentImg>imgsEl.length) currentImg=1
    else if(currentImg<1) currentImg=imgsEl.length
    imageContainerE1.style.transform=`translateX(-${(currentImg-1)*375}px)`;
    imageContainerE2.style.transform=`translateX(-${(currentImg-1)*375}px)`;
    imageContainerE3.style.transform=`translateX(-${(currentImg-1)*375}px)`;
    timeout=setTimeout(()=> {
        currentImg+=1;
        updateImage()
    }, 3000)
}