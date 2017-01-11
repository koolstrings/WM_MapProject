
function checkMapLoaded(region){
    if(!!$('#mainContainer').next().length){
        isMapLoaded = true;
        regionSelector(region);
        setColor(region);
    }
    else{
        setTimeout(checkMapLoaded(),1000);
    }
}

function setColor(region){
    var allData = (region == 'default')?allStates:allCounties;
    $.each(allData, function(i){
        var elem = document.getElementById(allData[i].mapID)
        if (allData[i].markUp < 120000 && allData[i].markDwn < 120000){
            elem.style.fill = "red";
        }
        else if (allData[i].markUp > 600000 && allData[i].markDwn > 600000){
            elem.style.fill = "green";
        }
        else if (allData[i].markUp < 600000 && allData[i].markDwn > 120000){
            elem.style.fill = "orange";
        }
        else{
            elem.style.fill = "red";
        }
    })
}

function regionSelector(region){ 
    var allData = (region == 'default')?allStates:allCounties;
    var svgData = document.getElementsByTagName('path'),
        rgnName = document.getElementById('placeName'),
        mupTD, mupCustTD, mdnTD, mdnCustTD;
        
    $.each(svgData, function(i){
        var id = '#'+(svgData[i].id).replace( /(:|\.|\[|\]|\'|,|=)/g, "\\$1" )
        $(id).mouseover(function(){
            if(!mupTD || !mupCustTD || !mdnTD || !mdnCustTD){
                mupTD = document.getElementById('mupTD'),
                mupCustTD = document.getElementById('mupCustTD'),
                mdnTD = document.getElementById('mdnTD'),
                mdnCustTD = document.getElementById('mdnCustTD');
            }
            svgData[i].style.opacity = .5;
            
            for(var n=0,l=stateNames.length; n<l; n++){
             if(stateNames[n].id == svgData[i].id)
              rgnName.innerHTML = stateNames[n].name;
            }         
            
            
            mupTD.innerHTML = '$'+allData[i].markUp;
            mupCustTD.innerHTML = allData[i].cstMup;
            
            mdnTD.innerHTML = '$'+allData[i].markDwn;
            mdnCustTD.innerHTML = allData[i].cstMdn;
            
        })
        $(id).mouseout(function(){
            svgData[i].style.opacity = 1  
        })
        $(id).mousedown(function(event){
            var x = event.clientX,
                y = event.clientY
            coord = {x:x,y:y}
            loadImage('state', coord)
        })
    })
}


var hideClass1 = document.getElementsByClassName('activeBlock')[0],
    dataGridBlock = document.getElementById('dataGridBlock'),
    graphCanvas = document.getElementById('graphCanvas'),
    depDataBlock = document.getElementById('depDataBlock'),
    pieCanvas = document.getElementById('pieCanvas'),
    legend = document.getElementById('legend');
    
function getDepData(){
    hideClass1.style.display='none';
    dataGridBlock.style.display='none';
    graphCanvas.style.display = "none";
    depDataBlock.style.display = 'block';
    pieCanvas.style.display = "block";
    legend.style.display = "none";
    setButton('wmDeptPriceData')
}

function getTrend(){
    hideClass1.style.display='none';
    dataGridBlock.style.display='none';
    graphCanvas.style.display = "block";
    depDataBlock.style.display = 'none';
    pieCanvas.style.display = "none";
    legend.style.display = "none";    
    setButton('wmTrend');
}
