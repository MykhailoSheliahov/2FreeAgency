(function(){
    document.addEventListener("DOMContentLoaded",function(){

        var slider=["./img/car2.jpg","./img/island.jpg",
            "./img/reporter.jpg"];
        var sliderCount=0;
        var sliderImgChange=document.getElementById("slider");
        sliderImgChange.src=slider[0];

        setInterval(function(){
            sliderCount++;
            if(sliderCount>=slider.length){
                sliderCount=0;
            }
            sliderImgChange.src=slider[sliderCount];
        },1500);

    });
})();


