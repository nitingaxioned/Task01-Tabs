//variables for tab and tab names
var btn = document.querySelectorAll(".tab-name");
var btnLondon = document.querySelector(".tab-name:nth-of-type(1)");
var btnParis = document.querySelector(".tab-name:nth-of-type(2)");
var btnTokyo = document.querySelector(".tab-name:nth-of-type(3)");
var tab = document.querySelectorAll(".tab");
var tabLondon = document.querySelector(".tab:nth-of-type(1)");
var tabParis = document.querySelector(".tab:nth-of-type(2)");
var tabTokyo = document.querySelector(".tab:nth-of-type(3)");

// Basic Class fixing
tab.forEach(function(val){val.classList.add("hide-me");});
btn.forEach(function(val){val.classList.remove("selected-tab");});

// Event listners
btnLondon.addEventListener("click", function(){
    tabLondon.classList.remove("displayOut");
    onBtnClick();
    btnLondon.classList.add("selected-tab");
    setTimeout(function () { 
        tabLondon.classList.remove("hide-me"); 
        tabLondon.classList.add("displayIn");
    },300);
});

btnParis.addEventListener("click", function(){
    tabParis.classList.remove("displayOut");
    onBtnClick();
    btnParis.classList.add("selected-tab");
    setTimeout(function () { 
        tabParis.classList.remove("hide-me"); 
        tabParis.classList.add("displayIn");
    },300);
});

btnTokyo.addEventListener("click", function(){
    tabTokyo.classList.remove("displayOut");
    onBtnClick();
    btnTokyo.classList.add("selected-tab");
    setTimeout(function () { 
        tabTokyo.classList.remove("hide-me"); 
        tabTokyo.classList.add("displayIn");
    },300);
});

// function to run on click
function onBtnClick(){
    tab.forEach(function(val){val.classList.remove("displayIn");});
    tab.forEach(function(val){val.classList.add("displayOut");});
    setTimeout(function() { tab.forEach(function(val){ val.classList.add("hide-me");}); }, 300);
    btn.forEach(function(val){val.classList.remove("selected-tab");});
}
