function calculateEllipseArea(){
    const majorRadius =getInputValueByID("major-radius")
    const minorRadius =getInputValueByID("minor-radius")
    const area = 3.1416*majorRadius*minorRadius
   
 setInnertextbyID("ellipse-area",area)
}