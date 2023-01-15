import profiledraw from '../images/profile_img.png';
import $ from 'jquery';

$(document).ready(function(){
    ProfileCard();

    $(window).on('resize', function(){
        var timer = "";
        clearTimeout(timer);
        timer = setTimeout(function(){
            ProfileCard();
        }, 300);
    });
});

function ProfileCard(){
    var windowW = $(window).width();
    if (windowW > 768) {
        $('.profilecard, .profile-click').off('touch click');
    } else {
        $('.profilecard, .profile-click').on('touch click', function(){
            $('.profile-click').hide();
            
            if($('.profilecard-wrap').hasClass('active')){
                $('.profilecard-wrap').removeClass('active');
            } else {
                $('.profilecard-wrap').addClass('active');
            }
        })
    }  

}


function Profile() {
    return (
        <section className="profile-area" data-aos="fade-up">
            <h3 className="title">Profile</h3>
            <div className="profilecard-wrap">
                <p className="profile-click">CLICK</p>
                <div className="profilecard profilecard-front">
                    <span className="logo"><i className="visuallyhidden">logo</i></span>
                    <img src={profiledraw} className="profile-drawing" alt="프로필 그림" />
                    <div className="info-area">
                        <p className="name">박 민 혜</p>
                        <p className="birth">98.12.01</p>
                        <p className="local">서울시 강서구</p>
                        <a href="mailto:mine_pp@naver.com" className="email">mine_pp@naver.com</a>
                        <a href="tel:010-3193-8441" className="phone">010-3193-8441</a>
                    </div>
                </div>
                <div className="profilecard profilecard-back">
                    <p className="title">경력사항 · 총 3년 7개월</p>
                    <ul className="career">
                        <li>
                            <strong>LS그룹 외주</strong>
                            <p>프리랜서</p>
                            <span className="date">2022.06.01 ~ 2022.07.31</span>
                        </li>
                        <li>
                            <strong>주식회사 알디</strong>
                            <p>퍼블리셔 · 대리(팀장)</p>
                            <span className="date">2019.01.01 ~ 2022.05.31</span>
                        </li>
                    </ul>
                    <p className="title">학력</p>
                    <ul className="career">
                        <li>
                            <strong>한국방송통신대학교</strong>
                            <p>컴퓨터과학과</p>
                            <span className="date">2021.03 ~ 2023.08 (졸업예정)</span>
                        </li>
                        <li>
                            <strong>한양여자대학교</strong>
                            <p>스마트IT과</p>
                            <span className="date">2017.03 ~ 2020.02</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Profile;