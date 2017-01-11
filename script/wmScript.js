var isMapLoaded = false;

function setButton(itm){
    var buttons = ['wmMainPriceMap', 'wmDeptPriceData', 'wmTrend']
    for (var a = 0; a<buttons.length; a++){
        if (buttons[a] == itm){
            document.getElementById(buttons[a]).style.color = 'lightgrey';  
            document.getElementById(buttons[a]).style['text-decoration'] = 'underline';
            
        }else{
            document.getElementById(buttons[a]).style.color = 'white';      
            document.getElementById(buttons[a]).style['text-decoration'] = 'none';
        }
    }
}

function loadImage(region, coord){
    var showClass1 = document.getElementsByClassName('activeBlock')[0];
    var dataGridBlock = document.getElementById('dataGridBlock');
    var sideBlock = document.getElementById('sideBlock')
    
    var graphCanvas = document.getElementById('graphCanvas')
    graphCanvas.style.display = "none"
    
    var pieCanvas = document.getElementById('pieCanvas')
    pieCanvas.style.display = "none"        
    
    var dataGridBlock = document.getElementById('dataGridBlock');
    dataGridBlock.style.display='block';
        
    var depDataBlock = document.getElementById('depDataBlock');
    depDataBlock.style.display = 'block';
    
    legend = document.getElementById('legend');
    legend.style.display = 'block';
        
    $(sideBlock).append(dataGridBlock)
    showClass1.style.display='block';
    
    setButton('wmMainPriceMap')
    
    if(!!isMapLoaded){
        var currentSVG = document.getElementsByTagName('svg')
        $(currentSVG).remove();
        
        loadNewSVG(region, coord);
    }else{
        loadNewSVG(region, coord)
    }        
};

function loadNewSVG(region, coord){
    xhr = new XMLHttpRequest();
    xhr.open("GET",region=='default'?"images/Blank_US_Map_With_Labels.svg":"images/USA_all_Edited.svg",false);
    xhr.overrideMimeType("image/svg+xml");
    xhr.send("");
    var mainContainer = document.getElementById("mainContainer");
    mainContainer.appendChild(xhr.responseXML.documentElement);
    checkMapLoaded(region);
    if(region !='default' && (!!coord.x || !!coord.y)){
        var svg = document.getElementsByTagName('svg')[0],
            newX = coord.x+246
            svg.setAttribute("viewBox", coord.x-246+" "+coord.y+" "+newX+" "+coord.y);
    }
    
}

$(document).ready(function(){ 
    loadImage('default',0);
});