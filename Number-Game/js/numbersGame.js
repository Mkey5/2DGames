/**
 * Created by Marek on 3.11.2015 ã. 23:17:33 ÷.
 */

// #randomNum-1 ->4
// #number-1 ->4
// #random-main
// #span-up-1   #span-down-1 ->4
// #OK


$(function(){
    var arrRandom = new Array();
    var arrToCheck = new Array();
    var arrForPrint = ["random-main","randomNum-1","randomNum-2",
        "randomNum-3",
        "randomNum-4"];

    //for the up and down buttons
    $('#span-up-1').click(function(){
        var val = Number($('#number-1').val());
        $('#number-1').val(val+1);
    });

    $('#span-down-1').click(function(){
        var val = Number($('#number-1').val());
        $('#number-1').val(val-1);
    });

    $('#span-up-2').click(function(){
        var val = Number($('#number-2').val());
        $('#number-2').val(val+1);
    });

    $('#span-down-2').click(function(){
        var val = Number($('#number-2').val());
        $('#number-2').val(val-1);
    });

    $('#span-up-3').click(function(){
        var val = Number($('#number-3').val());
        $('#number-3').val(val+1);
    });

    $('#span-down-3').click(function(){
        var val = Number($('#number-3').val());
        $('#number-3').val(val-1);
    });

    $('#span-up-4').click(function(){
        var val = Number($('#number-4').val());
        $('#number-4').val(val+1);
    });

    $('#span-down-4').click(function(){
        var val = Number($('#number-4').val());
        $('#number-4').val(val-1);
    });

    // generate numbers
    function generateNums(){
        while(arrRandom.length<5){
            var rand = random(rand);
            if(arrRandom[0] === undefined){
                arrRandom.push(rand);
            }else{
                if(arrRandom[0]>=3){
                    if(arrToCheck.indexOf(rand)== -1 && rand <= arrRandom[0]){
                        arrRandom.push(rand);
                        arrToCheck.push(rand);
                    }
                }else{
                    if(rand <= arrRandom[0]){
                        arrRandom.push(rand);
                        arrToCheck.push(rand);
                    }
                }
            }
        }

        printNums();
    }

    // for random numbers
    function random(num){
        num = Math.floor(Math.random() * 6);
        return num;
    }

    // printing the numbers
    function printNums(){
        for(var i=0;i<arrRandom.length;i++){
            $('#'+arrForPrint[i]).text(arrRandom[i]);
        }
    }

    function checkForErrors(){
        var err = false;
        var count=0;
        var errAns = new Array();

        var arrCheckErr = new Array();
        arrCheckErr.push(Number($('#number-1').val()));
        arrCheckErr.push(Number($('#number-2').val()));
        arrCheckErr.push(Number($('#number-3').val()));
        arrCheckErr.push(Number($('#number-4').val()));

        var arrIds = [ "number-1" , "number-2" , "number-3" , "number-4"];

        for(var i=0;i<arrCheckErr.length;i++){
            if( isNaN(arrCheckErr[i]) || (arrCheckErr[i]>5 || arrCheckErr[i]<0)
            || arrCheckErr[i] + arrToCheck[i] != arrRandom[0] ){
                err = true;
                count+=1;
                errAns.push(arrIds[i]);
                errAns.push(arrRandom[0] - arrToCheck[i]);

                $('#'+arrForPrint[i+1]).css("background","red");
            }else{
                $('#'+arrForPrint[i+1]).css("background","white");
            }
        }

        console.log(count);

        if(count>=3){
            $('#'+errAns[0]).val(errAns[1]);
            $('#'+errAns[2]).val(errAns[3]);
            $('#'+errAns[4]).val(errAns[5]);
            if(count>3){
                $('#'+errAns[6]).val(errAns[7]);
            }
            setTimeout(function(){
                location.reload(true);
            },2000);
        }

        if(err == false){
            $('#number-1').val('0');
            $('#number-2').val('0');
            $('#number-3').val('0');
            $('#number-4').val('0');
            // resetting the numbers
            resetNums();
            // generating the new random numbers
            generateNums();
        }
    }

    // resetting the numbers
    function resetNums(){
        arrRandom = new Array();
        arrToCheck = new Array();

        for(var i=0;i<arrForPrint.length;i++){
            $('#'+arrForPrint[i]).css("background","white");
        }

    }


    // on submitting
    $('#OK').click(function(){

        // check for errors !
        checkForErrors();

    });

    // the game starts
    generateNums();

});