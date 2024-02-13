function calculateArea(){
    const tbi =document.getElementById("triangle-base") 
   const trianglebasetext= tbi.value
   const base = parseFloat(trianglebasetext)
    const thi = document.getElementById("triangle-height")
    const triangleheighttext = thi.value
    const height = parseFloat(triangleheighttext)
    const area = 0.5*base*height
    const triangleAreaSpan = document.getElementById("triangle-area")
    triangleAreaSpan.innerText=area
}
