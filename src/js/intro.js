import $ from 'jquery';
import profile from '../images/profile_img.png';
import { ReactComponent as ProfileSVG } from '../images/profile_line.svg';

$(document).ready(function(){
    Textscroll();

    $('.scroll-text').click(function(event){            
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });    

});

$(window).resize(function(){
    Textscroll();
});

function Textscroll(){
    $(window).scroll(function(){
        var vhhalf = $(window).height()/2;
        var currentScroll = $(document).scrollTop();
        var nextoffsetTop = $('.intro-wrap').next().offset().top - 60;

        if (nextoffsetTop > currentScroll) {
            $('.text').css('top', currentScroll + vhhalf);
            $('#header .logo').show();
            $('#header .btn-mode').show();
        } else {
            $('#header .logo').hide();
            $('#header .btn-mode').hide();
        }

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

            <div className="text">
                <h1 className="typing-text">
                    <em>Web Publisher <strong>MINE</strong></em>
                    <p className="typing"></p>
                </h1>
            </div>
            <img src={profile} className="intro-profile" alt="profile"/>
            <ProfileSVG />
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