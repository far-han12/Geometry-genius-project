function calculateRectanglearea(){
    const rli = document.getElementById("rectangle-length")
   const rectanglelengthtext = rli.value
    const length = parseFloat(rectanglelengthtext)
const rwi=document.getElementById("rectangle-width")
const rectanglewidthtext = rwi.value
const width = parseFloat(rectanglewidthtext)
const area = length*width
console.log(area);
const rectangleareaspan = document.getElementById("rectangle-area")
rectangleareaspan.innerText=area
}