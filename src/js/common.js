import '../css/fonts.css';
import '../css/layout.scss';
import '../css/common.scss';
import '../css/dark.scss';
import $ from 'jquery';
import AOS from 'aos';
import '../css/plugin/aos.scss';
import { gsap } from "gsap";
import { Elastic } from "gsap/all";

AOS.init();



$(document).ready(function(){

  //mouseover 이벤트 - 버튼, a태그, intro-text
  $('.intro-text, button, a').on('mouseover', function(){
    $('.cursor').addClass('hover');
  });

  //mouseleave 이벤트 - 버튼, a태그, intro-text
  $('.intro-text, button, a').on('mouseleave', function(){
    $('.cursor').removeClass('hover');
  });

  // cursor
  const $cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', function(e) {
    $cursor.style.left = e.clientX + 'px';
    $cursor.style.top = e.clientY + 'px';
  });

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




  // intro 3d
  function magneticButton(element) {
    const children = element.children[0]
  
    element.addEventListener('mousemove', e => {
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = element
      const left = e.pageX - offsetLeft / 2
      const top = e.pageY - offsetTop / 2
      const centerX = left - offsetWidth / 2
      const centerY = top - offsetHeight / 2
      const d = Math.sqrt(centerX**2 + centerY**2)
  
      gsap.to(element, 1.5, {
        x: centerX / 7.5,
        y: centerY / 7.5,
        ease: Elastic.easeOut
      })
  
      children.style.transform = `
        translate3d(${centerX / 4}px, ${centerY / 4}px, 0)
        rotate3d(${-centerY / 100}, ${centerX / 100}, 0, ${d / 10}deg)
      `
    })
  
    
    element.addEventListener('mouseleave', () => {
      gsap.to(element, 1.2, {
        x: 0,
        y: 0,
        ease: Elastic.easeOut.config(1, 0.1)
      })
      children.style.transform = ''
    })
  
  }

  const introText = document.getElementById('intro_text');
  magneticButton(introText);  



}


function Header() {
  return (
    <div className="header-inner">
      <a href="/Portfolio/" className="logo"><span className="visuallyhidden">logo</span></a>
      <button type="button" id="mode_view" className="btn-mode">
        <span className="visuallyhidden">모드 전환하기 (Light/Dark)</span>
      </button>
    </div>
  );
}


export default Header;