function calculaterhombusarea(){
    const d1 = getInputValueByID("rhombus-d1")
    const d2 = getInputValueByID("rhombus-d2")
    const area =0.5*d1*d2
    setInnertextbyID("rhombus-area",area)
}