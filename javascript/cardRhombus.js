const diameter1 = document.getElementById("disabled-field-input1");
const diameter2 = document.getElementById("disabled-field-input2");
// enabling disabled input fields
document.getElementById('edit-value').addEventListener('click',function(){
    diameter1.disabled = false;  
    diameter2.disabled = false;
    diameter1.value = '';
    diameter2.value = '';
})
// listening checkbox and update value when clicked
document.getElementById('checkbox').addEventListener('click',function(){
    const diameter1FixedValue = document.getElementById('diameter1-value');
    const diameter2FixedValue = document.getElementById('diameter2-value');
    const diameter1Value = parseFloat(diameter1.value)
    const diameter2Value = parseFloat(diameter2.value)
    if(validator(diameter1Value, diameter2Value)){
        diameter1FixedValue.innerText = diameter1Value; 
        diameter2FixedValue.innerText = diameter2Value; 
    }
})   

// listening calculate button
document.getElementById('btn-rhombus').addEventListener("click",function(){
    const diameter1Value = parseFloat(diameter1.value)
    const diameter2Value = parseFloat(diameter2.value)
    if(validator(diameter1Value, diameter2Value)){
        const area = areaOfTrianglePentagonRhombus(diameter1.value, diameter2.value) 
        displayTable(area,"Rhombus")
    }
    
})