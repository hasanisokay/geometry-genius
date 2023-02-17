// listening mouse enter and changing bg color by calling a fucnction with it
const cards = document.getElementsByClassName('card');
for(const card of cards){
    card.addEventListener("mouseenter",function(event){
        randomBgColor(card);
    card.addEventListener("mouseleave",function(){
        card.style.backgroundColor ='white'
    })
})}
// producing random color for background change on mouseenter
function randomBgColor(c){
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const  bgColor = "rgb(" + x + "," + y + "," + z + ")";
    c.style.backgroundColor = bgColor;
}

