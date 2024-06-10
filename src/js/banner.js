const btnLeft=document.querySelector(".btn-left"), 
    btnRight=document.querySelector(".btn-right")
    carousel=document.querySelector("#carousel")
    slider=document.querySelectorAll(".slider");

    btnRight.addEventListener("click", e=>moveToRight())
    btnLeft.addEventListener("click", e=>moveToLeft())

    setInterval(()=>{
        moveToRight(); 
    }, 3000)

    let operator=0;
    let widthImg=100/slider.length;
    let count=0;

    function moveToRight(){
        
        if(count>=slider.length-1){
            operator=0;
            count=0;
            carousel.style.transform=`translate(-${operator}%)`;
            
        } else{
            count++;
            operator=operator+widthImg;
            carousel.style.transform=`translate(-${operator}%)`;
            carousel.style.transiton="all ease .6s";
        }
        
    }

    function moveToLeft(){
        count--;
        if (count<0){
            count=slider.length-1;
            operator=widthImg*(slider.length-1)
            carousel.style.transform=`translate(-${operator}%)`;
        } else{
            operator=operator-widthImg;
            carousel.style.transform=`translate(-${operator}%)`;
            carousel.style.transiton="all ease .6s";
        }
        
    }

    