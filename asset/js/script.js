$(window).on('load', function () {

    intro();
    headerScroll();
    carSlide();
    customImg();
    autoVideo();
    vsDimmed();
    panelSlide();
    lineEffect();
})

function intro(){
    
    const intro = gsap.timeline({})
    .to('#loading',{
        yPercent:-100,
        display:'none',
    })
    .to('.sc-cover .line',{
        transform: 'translateY(0%)',
        stagger:0.1,
    })
}

function headerScroll(){

    let lasScroll = 0;
    $(window).on("scroll", onScroll);
    
    function onScroll(){
        
        var headerTop = $(window).scrollTop();
        
        if(headerTop > lasScroll){
            $('.header .header-inner').addClass('hide');
        }else{
            $('.header .header-inner').removeClass('hide');
        }

        if(headerTop >= $(window).height()){
            $('.header .header-inner').addClass('active');
        }else{
            $('.header .header-inner').removeClass('active');
        }
        lasScroll = headerTop;
    }
}

function carSlide(){
    var swiper = new Swiper(".sc-car .swiper", {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
}

function customImg(){

        setInterval(function(){
        var imgNum = Math.round(Math.random()*3);
        $(".sc-order .order-img").attr("src", `./asset/images/car0${imgNum}.jpg`);
    },1500)
}

function autoVideo(){

    $('.gallery-item').mouseover(function(){
        $(this).find('video').get(0).play(); 
    })
    $('.gallery-item').mouseleave(function(){
        $(this).find('video').get(0).pause(); 
    })
}

function vsDimmed(){
    
    scCover = gsap.timeline({
        scrollTrigger:{
            trigger:".cover-image",
            start:"top top", 
            end:"bottom top",
            scrub:3,
        },
    })
    
    scCover
    .addLabel('a')
    .to('.sc-cover .cover-image',{
        ease:'none',
        yPercent:-50,
    },'a')
    .to('.sc-cover .cover-title',{
        yPercent:-5,
    },'a')
    .to('.sc-cover .dimmed',{
        opacity:1,
        visibility: 'visible',
    },'a')

}

// 공용

function lineEffect(){

    $('[data-slideUp=true]').each(function(i,el){
        child = $(this).find('.line');
        line = $(this).find('.border-line');
        gsap.to(line,{
            scrollTrigger:{
                trigger:el,
                start:"top 50%",
                end:"bottom top",
                // markers:true,
                toggleActions: "restart none reverse none",
            },
            width:"100%",
            stagger:0.1,
            
        })
        gsap.to(child,{
            scrollTrigger:{
                trigger:el,
                start:"top 50%",
                end:"bottom top",
                toggleActions: "restart none reverse none",
            },
            transform: 'translateY(0%)',
            stagger:0.1,
        })
    })
}

function panelSlide(){

    gsap.timeline({
        defaults:{
            ease:'none',
        },
        scrollTrigger:{
            trigger:'.sc-program',
            start:"top top", 
            end:"+=300%",
            // markers:true,
            scrub:1,
            pin:true,
            // onUpdate : self => console . log ( "progress:" , self .progress )
            onUpdate : function(self){
                if(self.progress > 0.666){
                    $('.box03').addClass('active').siblings().removeClass('active')
                }else if(self.progress > 0.333){
                    $('.box02').addClass('active').siblings().removeClass('active')
                }else {
                    $('.box01').addClass('active').siblings().removeClass('active')
                }
            }
        },
    })
    .addLabel('a')
    .to('.program-scroll',{
        height:'100%'
    },'a')
    .to('.program-area .box01',{
    },'a')

}











