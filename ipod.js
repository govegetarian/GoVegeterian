expCostFlag = false;
expIngFlag = true;

function removeFocus() {
    $('#filter_id').css("display","none");   
}

function searchFocus() {
    $('#filter_id').css("display","block");   
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
