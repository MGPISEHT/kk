$(document).ready(function(){
    $("#search").click(function(){
        $(".menu").slideToggle();
        $(".box-search-item").slideToggle(1000);
    })
})
// slide show 
var couter = 1;
setInterval(function(){
    document.getElementById('radio' + couter).checked = true;
    couter++;
    if(couter>4){
        couter = 1;
    }
},4000);
// brand slide
$(document).ready(function(){
    var i = 0;
    $(".slide").show();
    $(".slide").eq(0).show();
    $(".next").click(function(){
        slide();
    })
    $(".pre").click(function(){
        $(".slide").eq(i).show();
        i=i-1;
        if(i==-1){
            i=10;
        }
        $(".slide").eq(i).show();
    })
    var slide = function(){
        $(".slide").eq(i).show();
        i=i+1;
        if(i==11){
            i=0;
        }
        $(".slide").eq(i).show();
    };
    var autoslide = setInterval(function () {slide()}, 1000);
    $(".brand-logo").mouseover(function(){
        clearInterval(autoslide);
    })
    $(".brand-logo").mouseleave(function(){
        autoslide = setInterval(function () {slide()}, 1000);
    })
})