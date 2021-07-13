var rChoices = [];
var rString ="";
var popSt ="";
var rIndex = 0;
var checkEx = 0;

function rTypeSt(string) {
    var dAct_R = "";
    // maybe change to switch later
    if (string == "food"){
        dAct_R = ".rType-1";
    }else if(string == "american"){
        dAct_R = ".rType-2";
    }else if(string == "asian"){
        dAct_R = ".rType-3";
    }else if(string == "italian"){
        dAct_R = ".rType-4";
    }else if(string == "indian"){
        dAct_R = ".rType-5";
    }else{
        //mexican
        dAct_R = ".rType-6";
    }
    return dAct_R;   // The function returns the product of p1 and p2
  }

$(document).ready(function(){ 
    $('.rType-1').click(function() { 
        checkEx = rChoices.indexOf("food");
        if (rChoices.length < 2) {
            if (checkEx == -1){
                $('.rType-1').toggleClass('act');
                rChoices.push("food");
            }else{
                $('.rType-1').toggleClass('act');
                rIndex = rChoices.indexOf("food");
                rChoices.splice(rIndex,1);
            }
        }else{
            if (checkEx == -1){
                $('.rType-1').toggleClass('act');
                popSt = rChoices[0];
                rChoices.splice(0,1);
                rChoices.push("food");
                rString = rTypeSt(popSt);
                $(rString).toggleClass('act');
            }else{
                $('.rType-1').toggleClass('act');
                rIndex = rChoices.indexOf("food");
                rChoices.splice(rIndex,1);
            }
        } 
    });
    console.log(rChoices);
});

$(document).ready(function(){ 
    $('.rType-2').click(function() { 
        checkEx = rChoices.indexOf("american");
        if (rChoices.length < 2) {
            if (checkEx == -1){
                $('.rType-2').toggleClass('act');
                rChoices.push("american");
            }else{
                $('.rType-2').toggleClass('act');
                rIndex = rChoices.indexOf("american");
                rChoices.splice(rIndex,1);
            }
        }else{
            if (checkEx == -1){
                $('.rType-2').toggleClass('act');
                popSt = rChoices[0];
                rChoices.splice(0,1);
                rChoices.push("american");
                rString = rTypeSt(popSt);
                $(rString).toggleClass('act');
            }else{
                $('.rType-2').toggleClass('act');
                rIndex = rChoices.indexOf("american");
                rChoices.splice(rIndex,1);
            }
        } 
    });
    console.log(rChoices);
});

$(document).ready(function(){ 
    $('.rType-3').click(function() { 
        checkEx = rChoices.indexOf("asian");
        if (rChoices.length < 2) {
            if (checkEx == -1){
                $('.rType-3').toggleClass('act');
                rChoices.push("asian");
            }else{
                $('.rType-3').toggleClass('act');
                rIndex = rChoices.indexOf("asian");
                rChoices.splice(rIndex,1);
            }
        }else{
            if (checkEx == -1){
                $('.rType-3').toggleClass('act');
                popSt = rChoices[0];
                rChoices.splice(0,1);
                rChoices.push("asian");
                rString = rTypeSt(popSt);
                $(rString).toggleClass('act');
            }else{
                $('.rType-3').toggleClass('act');
                rIndex = rChoices.indexOf("asian");
                rChoices.splice(rIndex,1);
            }
        } 
    });
    console.log(rChoices);
});

$(document).ready(function(){ 
    $('.rType-4').click(function() { 
        checkEx = rChoices.indexOf("italian");
        if (rChoices.length < 2) {
            if (checkEx == -1){
                $('.rType-4').toggleClass('act');
                rChoices.push("italian");
            }else{
                $('.rType-4').toggleClass('act');
                rIndex = rChoices.indexOf("italian");
                rChoices.splice(rIndex,1);
            }
        }else{
            if (checkEx == -1){
                $('.rType-4').toggleClass('act');
                popSt = rChoices[0];
                rChoices.splice(0,1);
                rChoices.push("italian");
                rString = rTypeSt(popSt);
                $(rString).toggleClass('act');
            }else{
                $('.rType-4').toggleClass('act');
                rIndex = rChoices.indexOf("italian");
                rChoices.splice(rIndex,1);
            }
        } 
    });
    console.log(rChoices);
});

$(document).ready(function(){ 
    $('.rType-5').click(function() { 
        checkEx = rChoices.indexOf("indian");
        if (rChoices.length < 2) {
            if (checkEx == -1){
                $('.rType-5').toggleClass('act');
                rChoices.push("indian");
            }else{
                $('.rType-5').toggleClass('act');
                rIndex = rChoices.indexOf("indian");
                rChoices.splice(rIndex,1);
            }
        }else{
            if (checkEx == -1){
                $('.rType-5').toggleClass('act');
                popSt = rChoices[0];
                rChoices.splice(0,1);
                rChoices.push("indian");
                rString = rTypeSt(popSt);
                $(rString).toggleClass('act');
            }else{
                $('.rType-5').toggleClass('act');
                rIndex = rChoices.indexOf("indian");
                rChoices.splice(rIndex,1);
            }
        } 
    });
    console.log(rChoices);
});

$(document).ready(function(){ 
    $('.rType-6').click(function() { 
        checkEx = rChoices.indexOf("mexican");
        if (rChoices.length < 2) {
            if (checkEx == -1){
                $('.rType-6').toggleClass('act');
                rChoices.push("mexican");
            }else{
                $('.rType-6').toggleClass('act');
                rIndex = rChoices.indexOf("mexican");
                rChoices.splice(rIndex,1);
            }
        }else{
            if (checkEx == -1){
                $('.rType-6').toggleClass('act');
                popSt = rChoices[0];
                rChoices.splice(0,1);
                rChoices.push("mexican");
                rString = rTypeSt(popSt);
                $(rString).toggleClass('act');
            }else{
                $('.rType-6').toggleClass('act');
                rIndex = rChoices.indexOf("mexican");
                rChoices.splice(rIndex,1);
            }
        } 
    });
    console.log(rChoices);
});

console.log(rChoices);
