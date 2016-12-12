(function(){
	impress().init();

    var counter;
    var listOfMicroSteps

    document.getElementById("impress").addEventListener("impress:stepenter", checkMicroSteps);
    document.getElementById("impress").addEventListener("impress:stepleave", removeShowClass);

    function checkMicroSteps(){
        counter = 0;
        var list = document.getElementsByClassName("present")[0].querySelectorAll(".microstep");
        listOfMicroSteps = [].slice.call( list );

        listOfMicroSteps.sort(function(a,b){
            return ( Number(a.getAttribute("data-order")) - Number(b.getAttribute("data-order")))
        })
    }

    function removeShowClass(){
        listOfMicroSteps.forEach(function(elem){
             elem.classList.remove("show");
        });
    }

    document.addEventListener( "keyup", function( event ){
        if(event.keyCode==39){
            if(counter < listOfMicroSteps.length){
                //listOfMicroSteps[counter].style.visibility = "visible";
                listOfMicroSteps[counter].classList.add("show");
               counter++;
               event.stopImmediatePropagation();		
            }	
        }else{
            removeShowClass();
        }
    }, true);
})();

