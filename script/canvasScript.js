var canvas = document.getElementById('pieCanvas'), sizeSet = false;
	ctx = canvas.getContext('2d');

var dt = new Date(), last5Days = [];
var dateString = dt.toLocaleString().split('/');

var month = dateString[0];
var date = dateString[1];
var year = dateString[2].split(',')[0];

var today = parseInt(date, 10);

for(var a=0; a<5; a++){
    if(today == 0){
        today = 31;
        month = month - 1
		if(month == 0){
			month = 12;
			year--
		}
    }

    last5Days[4-a] = month+'/'+today.toString()+'/'+year;
	today--
}

	
	(function(){
		var width = $('body').width(),
		height = $('body').height();
		canvas.width = width/1.6;
		canvas.height = height/1.62;
		sizeSet = true
	})()
	
	var x = Math.round(Math.random()*canvas.width), y = Math.round(Math.random()*canvas.height);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.lineWidth = 50;
    var ind = [0,'#ffea00', '#ffba24', '#025c70', '#05ffd1', '#4ec200'];
    var dwnInd = [0,'#ff2f00', '#9172ff', '#ff00a2', '#ff9900', '#1212f1'];
	var allVal = counter = counter2 = [0], r = 16777215, deps=[], start=120, depMupTotal = depMdnTotal =0;

    var tempDepMup = [], tempDepMdn = [];
    for(var a = 0, b=departmentData.length; a<b; a++){
        tempDepMup[a]=departmentData[a];
        tempDepMdn[a]=departmentData[a]
    }
   
    var depMup = tempDepMup.sort(function(x, y){
        return ((x.markUp)-(y.markUp))
    });
    var depMdn = tempDepMdn.sort(function(a, b){
        return ((a.markDwn)-(b.markDwn))
    });

    depMup.length = 5;
    depMdn.length = 5;

    for(a=0;a<5;a++){
        var u = depMup[a].markUp, d = depMdn[a].markDwn;
        depMupTotal += u;
        depMdnTotal += d;
    }

    ctx.fillStyle = 'grey';
    ctx.font = "20px Arial";
    ctx.fillText('Pending price changes',320,20);
    ctx.fillStyle = '#ffffff';
    ctx.font = "14px Arial";
    ctx.fillText('Mark up - sales impact (top 5 depts)',100,360);
    ctx.fillText('Mark Down - sales impact (top 5 depts)',500,360);
	for(var i=1; i<6; i++){
        var arcMup = Math.round((62870*(depMup[i-1].markUp/depMupTotal)+100)-100)/10000, startX=180;startX,startY=180;
		counter[i] = counter[i-1]+arcMup;
		ctx.beginPath();
		ctx.strokeStyle = ind[i];
		
        ctx.fillStyle = ind[i];
        ctx.font = "14px Arial";
        ctx.fillText(depMup[i-1].nameID,startX+150,start-60);
		ctx.fillRect(startX+135,start-73,10,35)
        ctx.fillStyle = '#ffffff';
        ctx.font = "15px Arial";
        ctx.fillText('$'+depMup[i-1].markUp,startX+150,start-40);
		start = start+60;
		
		ctx.arc(startX,startY,100,counter[i-1],counter[i]);
		ctx.stroke();
	}

for(var j=1; j<6; j++){ 
        var arcMdn = Math.round((6287*(depMdn[j-1].markDwn/depMdnTotal)+100)-100)/1000, startX=580, startY=180;
		counter2[j] = counter2[j-1]+arcMdn;
        ctx.beginPath();
		ctx.strokeStyle = dwnInd[j];		
        ctx.fillStyle = dwnInd[j];
        ctx.font = "14px Arial";
        
        ctx.fillText(depMdn[j-1].nameID,startX+160,start-360);
		ctx.fillRect(startX+145,start-373,10,35)
        ctx.fillStyle = '#ffffff';
        ctx.font = "15px Arial";
        ctx.fillText('$'+depMdn[j-1].markDwn,startX+160,start-340);
		start = start+60;      
        
		ctx.arc(startX,startY,100,counter2[j-1],counter2[j]);
		ctx.stroke();
}



var grphcanvas = document.getElementById('graphCanvas');
	grphCtx = grphcanvas.getContext('2d');	
	
	var x = Math.round(Math.random()*grphcanvas.width), y = Math.round(Math.random()*grphcanvas.height), initY = Math.round(Math.random()*500);
	grphCtx.clearRect(0, 0, grphcanvas.width, grphcanvas.height);
    
	grphCtx.strokeStyle = "white";grphCtx.fillStyle="yellow"
        //scales
		for(var d=0,a=0,b=0; a<50; a++){  
            grphCtx.strokeStyle = "white"
            grphCtx.globalAlpha=1;
			grphCtx.beginPath();
            //vertical
			var y = a*7
			grphCtx.moveTo(0,y);
			if(b<6){				
				grphCtx.lineTo(b+5,y)
				if(b==5){				
				grphCtx.lineTo(b+15,y)
				}
			}
			if(b>=6){								
				grphCtx.lineTo(15-b,y)
				if(b==10){				
					b = 0;
                    grphCtx.moveTo(0,y)
                    grphCtx.globalAlpha=".5"
                    grphCtx.strokeStyle = '#010101'
                    grphCtx.lineTo(900,y);
				}
			}
			grphCtx.stroke();
            
            //horizontal
			var x = a*18
			grphCtx.moveTo(x+20,0);
			if(b<6){				
				grphCtx.lineTo(x+20,b+5)
			}
			if(b>=6){								
				grphCtx.lineTo(x+20,15-b)
                if(b==9){                    				
					grphCtx.lineTo(x+20,b+25)                    
                    grphCtx.fillStyle="white";
                    grphCtx.fontSize="25px";
                    grphCtx.fillText(last5Days[d],x-25,b+20)
                    d++
                }
				if(b==10){
					b = 0;
				}
			}
            grphCtx.strokeStyle = "grey"
			grphCtx.stroke();
			b++;
		}
        //actual graph
    
        grphCtx.beginPath();
        grphCtx.lineWidth = 2;
		grphCtx.moveTo(10,340);
        grphCtx.font = "15px Arial";
		var data=[0], rad1 = 5;
        var xRed=[0];
        var yRed=[0]
        
        grphCtx.fillText('$'+(Math.round(Math.random()*500)+initY)*100,0,360);
        grphCtx.strokeStyle = "red";
		for(var a=1;a<6;a++){
            var randomRed = Math.round(Math.random()*500),
                calculatedRedData = data[a-1]+(1-Math.round(Math.random()*2))*initY+(1-Math.round(Math.random()*2))*randomRed;
            
            //increment data value based on previous node
			data[a]=calculatedRedData<0?-calculatedRedData:calculatedRedData;
			xRed[a]=xRed[a-1]+180;
            //adjust graph on y axis
			yRed[a]=340-Math.round(data[a]/3);
			grphCtx.lineTo(xRed[a],yRed[a])
			grphCtx.stroke();
			grphCtx.beginPath();
			grphCtx.fillStyle="gold"
			grphCtx.arc(xRed[a],yRed[a],rad1++,0,6.287)
			grphCtx.fillText('$'+(data[a]*100),xRed[a]-25,yRed[a]-25);
            grphCtx.stroke();
			grphCtx.fill();
		}

		grphCtx.strokeStyle = "green";
		grphCtx.moveTo(10,340);
		var data1=[0], xGreen=[0], yGreen=[Math.round(Math.random()*150)+200], rad2 = 5;
		for(var a=1;a<6;a++){
            var randomGreen = Math.round(Math.random()*500),
                calculatedGreenData = data[a-1]+(1-Math.round(Math.random()*2))*initY+(1-Math.round(Math.random()*2))*randomGreen;

			data1[a]=calculatedRedData<0?-calculatedRedData:calculatedRedData;
			xGreen[a]=xGreen[a-1]+180;
			yGreen[a]=340-Math.round(data[a]/8);
			grphCtx.lineTo(xGreen[a],yGreen[a])
			grphCtx.stroke();
			grphCtx.beginPath();
			grphCtx.fillStyle="cyan"
			grphCtx.arc(xGreen[a],yGreen[a],rad2++,0,6.287)
			grphCtx.fillText('$'+data1[a]*100,xGreen[a]-25,yGreen[a]+25)
			grphCtx.fill();
		}
            grphCtx.fillStyle = 'grey'
            grphCtx.font = "22px Arial";
            grphCtx.fillText('Last 5 day price change trend for all Departments',350,390);

            grphCtx.font = "15px Arial";
            grphCtx.fillStyle = 'red';
			grphCtx.fillRect(1150,360,10,10);
			grphCtx.fillText('Mark Down price graph',1180,370);
            grphCtx.fillStyle = 'green'
			grphCtx.fillRect(1150,375,10,10);
			grphCtx.fillText('Mark Up price graph',1180,385);