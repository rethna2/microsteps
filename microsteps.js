(function(){
    impress().init();
    var counter, microsteps;

    document.getElementById("impress").addEventListener("impress:stepenter", checkMicrosteps);
    document.getElementById("impress").addEventListener("impress:stepleave", removeShowClass);

    function checkMicrosteps(){
        counter = 0;
        var list = document.getElementsByClassName("present")[0].querySelectorAll(".microstep");

        microsteps = [].slice.call(list);
        microsteps.sort(function(a, b){
            return Number(a.getAttribute("data-order")) - Number(b.getAttribute("data-order"));
        });
    }

    function removeShowClass(){
        counter = 0;
        microsteps.forEach(function(elem){
            elem.classList.remove("show");
        });
    }

    document.addEventListener("keyup", function(event){
        if(event.keyCode !== 39) removeShowClass();
        else if(counter < microsteps.length){
            event.stopImmediatePropagation();
            microsteps[counter++].classList.add("show");
        }
    }, true);
})();
