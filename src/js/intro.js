import $ from 'jquery';

$(document).ready(function(){
    Textscroll();

    $('.scroll-text').click(function(event){            
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });    


    //typing
    var typingBool = false; 
    var typingIdx = 0; 
    var typingTxt = "UI DEVELOPER"; // 타이핑될 텍스트를 가져온다 
    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
    if(typingBool === false){ // 타이핑이 진행되지 않았다면 
    typingBool=true;   
    var tyInt = setInterval(typing,200); // 반복동작 
    } 
    
    function typing(){ 
        if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
            $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
            typingIdx++; 
        } else{ 
            clearInterval(tyInt); //끝나면 반복종료 
            $('.typing-text').css('animation', 'none');
            $('.scroll-text').fadeIn();
        } 
    }  
    

});

$(window).resize(function(){
    Textscroll();
});

function Textscroll(){
    $(window).scroll(function(){

        var scrollTop = $(window).scrollTop();
        if(scrollTop > 0){
            $('.scroll-text').fadeOut();
        } else {
            $('.scroll-text').fadeIn();
        }
    });
}





function Intro() {
    return (
        <div className="intro-inner">

            <div id="intro_text" className="intro-text">
                <div className="text-wrap">
                    <span>HELLO&#128075;</span>
                    <h1 className="typing-text">
                        <p className="typing"></p>
                    </h1>
                    <em>MI<span className="colon"></span>NE</em>
                </div>
            </div>

            <svg className="intro-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                    <stop id="stop1" stopColor="rgba(242, 228, 55, 1)" offset="0%"></stop>
                    <stop id="stop2" stopColor="rgba(251, 191, 31, 1)" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <path fill="url(#sw-gradient)" d="M24.9,-26.5C31.1,-18.7,34.2,-9.3,35.1,0.8C35.9,11,34.4,22,28.2,30.1C22,38.2,11,43.4,1.1,42.3C-8.8,41.2,-17.7,33.9,-25.2,25.8C-32.7,17.7,-38.8,8.8,-38.8,0C-38.8,-8.8,-32.6,-17.6,-25.1,-25.4C-17.6,-33.3,-8.8,-40.2,0.3,-40.5C9.3,-40.7,18.7,-34.4,24.9,-26.5Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0"></path>
            </svg>
            
            <svg className="intro-blob-svg02" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="sw-gradient2" x1="0" x2="1" y1="1" y2="0">
                    <stop id="stop1" stopColor="rgba(34, 154, 255, 1)" offset="0%"></stop>
                    <stop id="stop2" stopColor="rgba(141, 253, 255, 1)" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <path fill="url(#sw-gradient2)" d="M26.1,-28.5C31.5,-20.7,32,-10.3,30.4,-1.7C28.7,7,24.9,14,19.4,19C14,24.1,7,27.1,0,27.1C-7,27.1,-14,24,-21.2,19C-28.3,14,-35.7,7,-36.3,-0.6C-36.8,-8.1,-30.6,-16.2,-23.4,-24.1C-16.2,-31.9,-8.1,-39.5,1.1,-40.6C10.3,-41.7,20.7,-36.3,26.1,-28.5Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" stroke="url(#sw-gradient2)"></path>
            </svg>

            <a href="#info" className="scroll-text">
                <p>프로젝트 바로보기</p>
                <div className="icon-scroll">
                    <div className="scroll-arrow"><span className="line"></span><span className="line"></span></div>
                    <div className="scroll-arrow"><span className="line"></span><span className="line"></span></div>
                </div>
            </a>
        </div>
        
    );
}




export default Intro;