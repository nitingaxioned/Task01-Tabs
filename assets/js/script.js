//variables for tab and tab names
var btn = document.querySelectorAll(".tab-name");
var tab = document.querySelectorAll(".tab");

// Event listners
btn.forEach(function(val, index){
    val.addEventListener("click", function(){
        tab.forEach(function(value){ value.classList.add("hide-me"); });
        btn.forEach(function(value){ value.classList.remove("selected-tab"); });
        val.classList.add("selected-tab");
        tab[index].classList.remove("hide-me"); 
    });
});