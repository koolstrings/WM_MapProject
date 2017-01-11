

var deptCanvas = document.getElementById('deptCanvas'),
    deptCtx = document.getElementById('deptCanvas').getContext('2d');
//deptGrph();
window.requestAnimationFrame(deptGrph)
var i = 0, count = 0;

function deptGrph(){    
    var markUpPt = (departmentData[i].markUp)/(-5000),
        markDwnPt = (departmentData[i].markDwn)/(-5000),
        cstMupPt = (departmentData[i].cstMup)/(-5000),
        cstMdnPt = (departmentData[i].cstMdn)/(-5000),
        nameID = departmentData[i].nameID;
    
    if(count>380 && count<400){
            deptCtx.shadowBlur = 0;
            deptCtx.shadowColor = ''
            deptCtx.globalAlpha = .1
            deptCtx.fillStyle = "black"
            deptCtx.fillRect(0, 0, 600, 600);
    }
    else{
        deptCtx.globalAlpha = 1
        if(i == departmentData.length-1){
        i=0;
    }
        deptCtx.beginPath();
        deptCtx.font = "14px Arial";
        deptCtx.fillStyle = "white";
        deptCtx.shadowBlur = .1;
        deptCtx.shadowColor = 'white'
        deptCtx.strokeStyle = "white";
        deptCtx.clearRect(-10,-10,600,600);
        
        deptCtx.fillStyle = 'red';
        deptCtx.fillRect(50,320,100,markUpPt);
        deptCtx.fillRect(320,35,10,10);
        
        deptCtx.font = "18px Arial";
        deptCtx.fillStyle = "white";     
        deptCtx.fillText('$'+departmentData[i].markUp,53,318+markUpPt);
        
        deptCtx.fillStyle = 'blue';
        deptCtx.fillRect(150,320,5,cstMupPt);
        deptCtx.fillRect(320,50,10,10);
        deptCtx.font = "12px Arial";
        
        deptCtx.fillStyle = "white";     
        deptCtx.fillText(departmentData[i].cstMup,155,318+cstMupPt);
        
        deptCtx.fillStyle = 'green';
        deptCtx.fillRect(250,320,100,markDwnPt);
        deptCtx.fillRect(320,20,10,10);
        
        deptCtx.font = "18px Arial";
        deptCtx.fillStyle = "white";     
        deptCtx.fillText('$'+departmentData[i].markDwn,253,318+markDwnPt);
        
        deptCtx.fillStyle = 'blue';
        deptCtx.fillRect(350,320,5,cstMdnPt);
        deptCtx.font = "12px Arial";
        deptCtx.fillStyle = "white";     
        deptCtx.fillText(departmentData[i].cstMdn,355,318+cstMdnPt);

        deptCtx.shadowBlur = .5;
        deptCtx.shadowColor = 'red'
        deptCtx.font = "24px Arial";
        deptCtx.fillStyle = "white";
        deptCtx.fillText(nameID,50,30);
        deptCtx.fillStyle = "grey";
        deptCtx.font = "10px Arial";
        deptCtx.fillText('customers impacted',333,57);
        deptCtx.fillText('Mark down price',333,42);
        deptCtx.fillText('Mark up price',333,27);
        
        if(count == 400){
                i++;
                count = 0;
            }
		}
    count++;
    window.requestAnimationFrame(deptGrph)
}



