expCostFlag = false;
expIngFlag = true;
expandedFlag = false;

tofuFlag = false;
tempehFlag = false;
eggsFlag = false;
oneDollarFlag = false;
twoDollarFlag = false;
threeDollarFlag = false;

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

function applyClick() {
    var result_set = new Set();

    $('#filter_item1').css("display","none");   
        $('#filter_item2').css("display","none");   
        $('#filter_item3').css("display","none");   
        expandedFlag = false;     
    
    
    
    if ($('#tofu_id').is(':checked')){
        tofuFlag = true;
        result_set.add(1);
    }


    if ($('#tempeh_id').is(':checked')){
        tempehFlag = true;
        result_set.add(2);
    }


    if ($('#eggs_id').is(':checked')){
        eggsFlag = true;
        result_set.add(3);
        result_set.add(4);
    }


    if ($('#one_dollar').is(':checked')){
        oneDollarFlag = true;
        result_set.add(2);
    }


    if ($('#two_dollar').is(':checked')){
        twoDollarFlag = true;
        result_set.add(3);
    }


    if ($('#three_dollar').is(':checked')){
        threeDollarFlag = true;
        result_set.add(1);        
        result_set.add(4);
    }

    $('#r1').css('display','none');
    $('#r2').css('display','none');
    $('#r3').css('display','none');
    $('#r4').css('display','none');

    for (let rest of result_set) {
        result = '#r' + rest;
        $(result).css('display','block');
    }
    
}


function applyClick() {
    var result_set = new Set();

    $('#filter_item1').css("display","none");   
        $('#filter_item2').css("display","none");   
        $('#filter_item3').css("display","none");   
        expandedFlag = false;     
    
    
    
    if ($('#tofu_id').is(':checked')){
        tofuFlag = true;
        result_set.add(1);
    }


    if ($('#tempeh_id').is(':checked')){
        tempehFlag = true;
        result_set.add(2);
    }


    if ($('#eggs_id').is(':checked')){
        eggsFlag = true;
        result_set.add(3);
        result_set.add(4);
    }


    if ($('#one_dollar').is(':checked')){
        oneDollarFlag = true;
        result_set.add(2);
    }


    if ($('#two_dollar').is(':checked')){
        twoDollarFlag = true;
        result_set.add(3);
    }


    if ($('#three_dollar').is(':checked')){
        threeDollarFlag = true;
        result_set.add(1);        
        result_set.add(4);
    }

    $('#rec_1').css('display','none');
    $('#rec_2').css('display','none');
    $('#rec_3').css('display','none');
    $('#rec_4').css('display','none');

    for (let rest of result_set) {
        result = '#rec_' + rest;
        $(result).css('display','block');
    }
    
}
