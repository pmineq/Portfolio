import logo from '../images/logo.svg';
import $ from 'jquery';

$(document).ready(function(){
    ProfileCard();

    $(window).resize(function(){
        ProfileCard();
    })
});

function ProfileCard(){
    var windowW = $(window).width();
    if (768 > windowW) {
        $('.profilecard').on('click', function(){
            $(this).parent().toggleClass('active');
            $('.profile-click').hide();
        })
    } else {
        $('.profilecard-wrap').removeClass('active');
    }  
}


function Profile() {
    return (
        <section className="profile-area" data-aos="fade-up">
            <h3 className="title">Profile</h3>
            <div className="profilecard-wrap">
                <p className="profile-click">CLICK</p>
                <div className="profilecard profilecard-front">
                    <img src={logo} className="logo" alt="logo" />
                    <div className="info-area">
                        <p className="name">박 민 혜</p>
                        <p className="birth">98.12.01</p>
                        <p className="local">서울시 강서구</p>
                        <a href="mailto:mine_pp@naver.com" className="email">mine_pp@naver.com</a>
                        <a href="tel:010-3193-8441" className="phone">010-3193-8441</a>
                    </div>
                </div>
                <div className="profilecard profilecard-back">
                    <p className="title">경력사항</p>
                    <ul className="career">
                        <li>
                            <strong>주식회사 알디 정규직</strong>
                            <p>퍼블리셔 · 대리(팀장)</p>
                            <span className="date">2020.01.01 ~ 현재</span>
                        </li>
                        <li>
                            <strong>주식회사 알디 계약직</strong>
                            <p>퍼블리셔 · 사원</p>
                            <span className="date">2019.01.01 ~ 2019.12.31</span>
                        </li>
                    </ul>
                    <p className="title">학력</p>
                    <ul className="career">
                        <li>
                            <strong>한국방송통신대학교</strong>
                            <p>컴퓨터과학과</p>
                            <span className="date">2021.03 ~ 현재</span>
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