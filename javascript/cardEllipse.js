// listening ellipse calculate button
document.getElementById('btn-ellipse').addEventListener('click',function(){
    const ellipseMajorAxis = document.getElementById('ellipse-major-axis');
    const ellipseMinorAxis = document.getElementById('ellipse-minor-axis');
    const valueMajorAxis = parseFloat(ellipseMajorAxis.innerText) 
    const valueMinorAxis = parseFloat(ellipseMinorAxis.innerText) 
    // calling area function
    const area = areaOfEllipse(valueMajorAxis, valueMinorAxis);
    displayTable(area, "Ellipse")
})