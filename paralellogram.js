function calculateParalellogramarea(){
const base = getInputValue("paralellogram-base")
const height = getInputValue("paralellogram-height")
const area = base*height
// const paralellogramspantext = document.getElementById("paralellogram-area")
// paralellogramspantext.innerText=area
setInnertextbyID("paralellogram-area",area)

}
function getInputValue(inputfieldid){
    const inputfield = document.getElementById(inputfieldid)
    const    paralellogramtext = inputfield.value
    const inputvalue = parseFloat(paralellogramtext)
    return inputvalue
}

function setInnertextbyID(elementId,area){
    const element = document.getElementById(elementId)
    element.innerText=area
}