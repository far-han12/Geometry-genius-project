function calculatepentagonarea(){
const perimeter = getInputValueByID("pentagon-perimeter")
const apothem = getInputValueByID("pentagon-apothem")
const area = perimeter*apothem*0.5
setInnertextbyID("pentagon-area",area)

}
function setInnertextbyID(elementID,area){
    const elememt = document.getElementById(elementID)
    elememt.innerText=area

}

function getInputValueByID(inputid){
    const inputfield =document.getElementById(inputid)
    const inputtext=inputfield.value
    const inputValue =parseFloat(inputtext)
    return inputValue
}