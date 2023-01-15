const colorOne = document.getElementById('color-picker')
const getColorBtn = document.getElementById('btn')
let colorArray = []
getColorBtn.addEventListener("click", getColor)


function getColor(){
    
    let colorHtml = ""
    let hexHtml = ""
    
    colorArray.unshift(colorOne.value)
    let colorArrayCut = colorArray.slice(0,5)
   
    /* for loop iterate over an array of colors */
    for (let i = 0; i< colorArrayCut.length; i++ ){
        colorHtml+=  `
        <div class="column" style="background-color:${colorArrayCut[i]}"></div>
        ` ,
        hexHtml += `
        <div class="hex"> ${colorArrayCut[i]}</div>
        ` 
    }
    
   document.getElementById('color').innerHTML = colorHtml   
   document.getElementById('hex').innerHTML = hexHtml  
}


