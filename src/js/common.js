import '../css/fonts.css';
import '../css/layout.scss';
import '../css/common.scss';
import '../css/dark.scss';
import logo from '../images/logo.svg';
import $ from 'jquery';
import AOS from 'aos';
import '../css/plugin/aos.scss';

AOS.init();



$(document).ready(function(){

  $('.scroll-text').hide();

  if($('.loading-wrap').is(':visible')){
    $('html, body').addClass('no-scroll');
  } else {
    $('html, body').removeClass('no-scroll');
  }

  $(document).on('click', '.tab', function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    
  });

  $(window).scroll(function(){
    var scrT = $(window).scrollTop();
    var winH = $(window).height();
    var docH = $(document).height();

    if (winH < docH) {
      if(scrT >= 300) {
        $('.sticky-top').fadeIn();
      } else {
        $('.sticky-top').fadeOut();
      }
    } else {
      $('.sticky-top').hide();
    }
  });

  $('.sticky-top').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 400);
    return false;
  });

  var typingBool = false; 
  var typingIdx = 0; 
  var typingTxt = $(".typing-text").text(); // 타이핑될 텍스트를 가져온다 
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
        $('.typing').css('animation', 'none');
        $('.typing-text em').show();
        $('.scroll-text').fadeIn();
      } 
    }  

});


$(window).on('load', function(){
  $('.loading-wrap').hide();
  $('html, body').removeClass('no-scroll');
})


window.onload = function(){

  const theme = localStorage.getItem('theme'); // dark, light 시스템 테마 설정을 가져옴.
  if(theme) {
      document.body.setAttribute('class', theme);
  }

  // 시스템설정확인 window.matchMedia() :: CSS의 미디어쿼리가 현재 페이지에 해당하는지 확인.
  function toggleTheme() {
      // 저장된 값이 없다면 시스템 설정을 기준으로 한다.
      const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      // 최상위 엘리먼트에 설정, 로컬 스토리지에 설정을 저장.
      document.body.setAttribute('class', newTheme);
      localStorage.setItem('theme', newTheme);
  }


  const btnmode = document.querySelector('.btn-mode');
  btnmode.addEventListener('click', function() {
      toggleTheme();
  })
}


function Header() {
  return (
    <div className="header-inner">
      <a href="/" className="logo" >
        <img src={logo} alt="logo" />
      </a>
      <button type="button" id="mode_view" className="btn-mode">
        <span className="visuallyhidden">모드 전환하기 (Light/Dark)</span>
      </button>
    </div>
  );
}


export default Header;