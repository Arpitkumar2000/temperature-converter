let cel = document.getElementById('cel');
let frh = document.getElementById('frh');

cel.addEventListener('input', (e) => {
    let num = e.target.value
    let formula = (num * 9/5) + 32;
    if(!Number.isInteger(formula)){
        formula = formula.toFixed(3);
    }
    frh.value = formula
})

frh.addEventListener('input', (e) => {
    let num = e.target.value
    let formula = (num - 32) * 5/9;
    cel.value = formula
})