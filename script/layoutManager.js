function expandView(){
    var expandButton = document.getElementById('expandButton'); 
    $('#expandButton').hide();
    $('.sideBlock').hide();
    //$('#dispData').hide();
    $('#mainContainer').width('100%');                    
    $('#mainContainer').height('100%');
    
    var dataGrid = document.getElementsByClassName('dataGrid')[0];
    dataGrid.style.float="right";
    dataGrid.style.top="150";
    dataGrid.style.right="150";
    dataGrid.style.position="absolute";
}