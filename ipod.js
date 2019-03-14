expCostFlag = false;
expIngFlag = true;
expandedFlag = false;

function removeFocus() {
    $('#filter_id').css("display","none");   
}

function filterFocus() {
    if (expandedFlag == false) {
    $('#filter_item1').css("display","block");   
    $('#filter_item2').css("display","block");
    $('#filter_item3').css("display","block");      
        expandedFlag = true;     
    }
    else {
        $('#filter_item1').css("display","none");   
        $('#filter_item2').css("display","none");   
        $('#filter_item3').css("display","none");   
        expandedFlag = false;     
    
    }
    
}


function expCost() {
    if (expCostFlag == false){
        $('.cost_check').css("display", "block");
        expCostFlag = true;
        document.getElementById('cost_prep').innerHTML='keyboard_arrow_up';
     }
    else {
        $('.cost_check').css("display", "none");
        expCostFlag = false;
        document.getElementById('cost_prep').innerHTML='keyboard_arrow_down';
    }
}


function expIng() {
    if (expIngFlag == false){
        $('.ing_check').css("display", "block");
        expIngFlag = true;
        document.getElementById('main_ing').innerHTML='keyboard_arrow_up';
    }
    else {
        $('.ing_check').css("display","none");
        expIngFlag = false;
document.getElementById('main_ing').innerHTML='keyboard_arrow_down';    
    }
}


$(document).click(function(evt){
    if ($(evt.target).closest("#filter_id").length <= 0 && $(evt.target).closest("#search-bar-id").length <= 0)
        $('#filter_id').css("display","none");   
});
