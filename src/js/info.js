function Info() {
    return (
        <div className="info-inner">
            <section className="project-wrap">
                <h3 className="title">Project</h3>
                <ul className="project-list main">

                    <li className="project-item" data-aos="fade-left">
                        <a href="https://pmineq.github.io/admin/LSGPIS/main.html" className="project-link" target="_blank" rel="noreferrer">
                            <div className="project-thumb">
                                <img src={require("../images/project/lsgpis.png").default} alt="LS GPIS"/>
                            </div>
                            <div className="project-info">
                                <strong><span className="tag style01">PC</span> LS GPIS</strong>
                                <div className="project-infoarea">
                                    <p>디자인 100% · 퍼블리싱 100%</p>
                                </div>
                                <p className="project-text">Admin 디자인 시스템 입니다. 기획서에 맞춰 디자인 시안 작업 및 제안서를 작업하였습니다.<br/>
                                Figma를 이용하여 디자인 시안을 작업하였으며, HTML과 CSS를 이용하여 퍼블리싱 작업 후 jQuery로 메뉴 닫기 및 lnb 동작 기능을 작성하였습니다.<br/>
                                또한, chart.js라이브러리를 이용하여 디자인과 동일하게 그래프를 커스텀하여 레이아웃, 컴포넌트, 로그인, 메인화면 작업을 진행하였습니다.
                                </p>
                            </div>
                        </a>
                    </li>

                    <li className="project-item" data-aos="fade-right">
                        <a href="https://pmineq.github.io/admin/LSLPL/page.html" className="project-link" target="_blank" rel="noreferrer">
                            <div className="project-thumb">
                                <img src={require("../images/project/lslpl.png").default} alt="LS LPL"/>
                            </div>
                            <div className="project-info">
                                <strong><span className="tag style01">PC</span> LS LPL</strong>
                                <div className="project-infoarea">
                                    <p>퍼블리싱 100%</p>
                                </div>
                                <p className="project-text">LS Nikko Admin 디자인 시스템 입니다.<br/> 
                                기획서 및 디자인 시안이 작업 되어 있어, 시안을 토대로 작업하며 고객사의 요구사항에 맞게 수정하였습니다.<br/>
                                HTML과 CSS를 이용하여 퍼블리싱을 작업하고, 메뉴 및 간단한 동작은 jQuery로 작업하였으며 개발자에게 넘긴 후 다시 받아서 스타일 수정을 진행하였습니다.
                                </p>
                            </div>
                        </a>
                    </li>


                    <li className="project-item" data-aos="fade-left">
                        <a href="#" className="project-link">
                            <div className="project-thumb">
                                <img src={require("../images/project/portfolio.png").default} alt="Portfolio"/>
                            </div>
                            <div className="project-info">
                                <strong><span className="tag style01">반응형</span> Portfolio</strong>
                                <div className="project-infoarea">
                                    <p>디자인 100% · 퍼블리싱 100%</p>
                                </div>
                                <p className="project-text">react.js와 scss를 사용하여 제작하고, github에 업로드 하였습니다. 매끄러운 반응형을 목표로 작업하였으며, 최상단의 해/달 아이콘을 클릭하면 다크모드로 전환되는 것이 특징입니다.<br/>
                                심플하면서 인터랙티브한 요소들을 추가하였습니다.<br/>
                                profile 영역은 사원증 컨셉으로 작업하였으며, 모바일에서는 클릭 시에 뒷면이 나오는 인터랙션을 추가하여 작업하였습니다.<br/>
                                project 영역은 메인 프로젝트와 서브 프로젝트들로 나누어 부가설명을 디테일하게 작성하였고, 서브 프로젝트는 간단하게 나타냈습니다.
                                </p>
                            </div>
                        </a>
                    </li>

                    <li className="project-item" data-aos="fade-right">
                        <a href="https://shop.hyundai.com/" className="project-link" target="_blank" rel="noreferrer">
                            <div className="project-thumb">
                                <img src={require("../images/project/hyundai.png").default} alt="현대 Shop"/>
                            </div>
                            <div className="project-info">
                                <strong><span className="tag style01">반응형</span> 현대 Shop</strong>
                                <div className="project-infoarea">
                                    <p>퍼블리싱 95%</p>
                                </div>
                                <p className="project-text">크로스 브라우징을 고려하여 작업한 현대자동차 통합 온라인쇼핑몰 플랫폼입니다.<br/>
                                Mobile gnb 무한 스크롤, 상단 scroll percent 노출, 상세페이지 상품정보 고정 등 기존 쇼핑몰에서 볼 수 없었던 새로운 기능들을 추가하여 작업한 경험이 있습니다.<br/>
                                전체 페이지 공통과 대부분 작업을 진행하였으며, #투데이 일부 영역과 수정사항 일부를 제외하여 95% 기여도로 나타내었습니다.
                                </p>
                            </div>
                        </a>
                    </li>

                    <li className="project-item" data-aos="fade-left">
                        <a href="https://ygkplus.com/" className="project-link" target="_blank" rel="noreferrer">
                            <div className="project-thumb">
                                <img src={require("../images/project/kplus.png").default} alt="YG KPLUS"/>
                            </div>
                            <div className="project-info">
                                <strong><span className="tag style01">반응형</span> YG KPLUS</strong>
                                <div className="project-infoarea">
                                    <p>디자인 100% · 퍼블리싱 100%</p>
                                </div>
                                <p className="project-text">리뉴얼된 KPLUS 홈페이지 입니다.<br/>
                                디자인 100%로 본사에 컨펌받아 진행하였으며, 메인화면은 fullpage 플러그인을 사용하였습니다. 모바일 화면과 가로모드로 전환될 것까지 고려하여 신경 써서 작업하였습니다.<br/>
                                production의 아코디언 레이아웃은 플러그인을 사용하지 않고 jquery로 작성하였습니다.<br/>
                                이외 모든 페이지 디자인 + 퍼블리싱 100% 혼자 작업하였습니다.
                                </p>
                            </div>
                        </a>
                    </li>

                    <li className="project-item" data-aos="fade-right">
                        <a href="https://pmineq.github.io/admin/GTEC/Web/components.html" className="project-link" target="_blank" rel="noreferrer">
                            <div className="project-thumb">
                                <img src={require("../images/project/admin.png").default} alt="ADMIN 디자인 시스템"/>
                            </div>
                            <div className="project-info">
                                <strong><span className="tag style01">반응형</span> ADMIN 디자인 시스템</strong>
                                <div className="project-infoarea">
                                    <p>디자인 100% · 퍼블리싱 100%</p>
                                </div>
                                <p className="project-text">
                                    스터디에서 개인프로젝트로 진행한 ADMIN 디자인 시스템입니다.<br/>
                                    어드민 화면에서 필요한 요소들과 디자인 가이드를 개발자도 쉽게 가져다 쓸 수 있도록 작성하였습니다.<br/>
                                    반응형으로 작업하여 모바일에서도 확인할 수 있으며,
                                    다크모드로 전환할 수 있는 기능 또한 추가하였습니다.
                                </p>
                            </div>
                        </a>
                    </li>

                    <li className="project-item" data-aos="fade-left">
                        <a href="https://pmineq.github.io/Three/ex01/index.html" className="project-link" target="_blank" rel="noreferrer">
                            <div className="project-thumb">
                                <img src={require("../images/project/Three.png").default} alt="Three.js 공부"/>
                            </div>
                            <div className="project-info">
                                <strong>Three.js 학습</strong>
                                <div className="project-infoarea">
                                    <p>블렌더 100% · 퍼블리싱 100%</p>
                                </div>
                                <p className="project-text">
                                    개인적으로 공부하고 있는 Three.js 입니다.<br/>
                                    3D 컴퓨터 그래픽 제작 소프트웨어인 '블렌더'를 이용하여 3D 캐릭터를 제작하고,<br/>
                                    제작한 glb 파일을 Three.js 를 이용하여 웹 브라우저에 불러왔습니다.<br/>
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>

                <h3 className="title">More Project</h3>
                <ul className="project-list">

                    <li className="project-item">
                        <a href="https://www.figma.com/file/MvilioYP11ubQJbGWyWrKh/EdiTodo?node-id=138%3A2039" className="project-link" target="_blank" rel="noreferrer">
                            <div className="project-thumb">
                                <img src={require("../images/project/editodo.png").default} className="pc" alt="editodo"/>
                                <img src={require("../images/project/editodo_m.png").default} className="mobile" alt="editodo"/>
                            </div>
                            <div className="project-info">
                                <strong><span className="tag style01">App</span> EdiTodo</strong>
                                <div className="project-infoarea">
                                    <p>디자인 100% · 퍼블리싱 진행중</p>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li className="project-item">
                        <a href="https://tn.platformbuilder.co.kr/" className="project-link" target="_blank" rel="noreferrer">
                            <div className="project-thumb">
                                <img src={require("../images/project/thehada.png").default} className="pc" alt="theHADA"/>
                                <img src={require("../images/project/thehada_m.png").default} className="mobile" alt="theHADA"/>
                            </div>
                            <div className="project-info">
                                <strong><span className="tag style01">반응형</span> theHADA</strong>
                                <div className="project-infoarea">
                                    <p>퍼블리싱 100%</p>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li className="project-item">
                        <a href="https://togetheron.co.kr/" className="project-link" target="_blank" rel="noreferrer">
                            <div className="project-thumb">
                                <img src={require("../images/project/withon.png").default} className="pc" alt="함께ON"/>
                                <img src={require("../images/project/withon_m.png").default} className="mobile" alt="함께ON"/>
                            </div>
                            <div className="project-info">
                                <strong><span className="tag style01">반응형</span> 함께ON</strong>
                                <div className="project-infoarea">
                                    <p>디자인 97% · 퍼블리싱 97%</p>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li className="project-item">
                        <a href="https://callct.platformbuilder.co.kr/" className="project-link" target="_blank" rel="noreferrer">
                            <div className="project-thumb">
                                <img src={require("../images/project/callct.png").default} className="pc" alt="직장 내 괴롭힘 상담센터"/>
                                <img src={require("../images/project/callct_m.png").default} className="mobile" alt="직장 내 괴롭힘 상담센터"/>
                            </div>
                            <div className="project-info">
                                <strong><span className="tag style01">반응형</span> 직장 내 괴롭힘 상담센터</strong>
                                <div className="project-infoarea">
                                    <p>디자인 100% · 퍼블리싱 100%</p>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li className="project-item">
                        <a href="https://lms.kcplaa.or.kr/" className="project-link" target="_blank" rel="noreferrer">
                            <div className="project-thumb">
                                <img src={require("../images/project/lms.png").default} className="pc" alt="한국공인노무사회 이러닝센터"/>
                                <img src={require("../images/project/lms_m.png").default} className="mobile" alt="한국공인노무사회 이러닝센터"/>
                            </div>
                            <div className="project-info">
                                <strong><span className="tag style02">적응형</span> 한국공인노무사회 이러닝센터</strong>
                                <div className="project-infoarea">
                                    <p>디자인 일부 · 퍼블리싱 100%</p>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li className="project-item">
                        <a href="https://mgon.co.kr/" className="project-link" target="_blank" rel="noreferrer">
                            <div className="project-thumb">
                                <img src={require("../images/project/mgon.png").default} className="pc" alt="마켓고잉"/>
                                <img src={require("../images/project/mgon_m.png").default} className="mobile" alt="마켓고잉"/>
                            </div>
                            <div className="project-info">
                                <strong><span className="tag style01">반응형</span> 마켓고잉</strong>
                                <div className="project-infoarea">
                                    <p>배너 및 세팅 디자인 · 퍼블리싱 60%</p>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li className="project-item">
                        <a href="https://cggc.yahoda.co.kr/" className="project-link" target="_blank" rel="noreferrer">
                            <div className="project-thumb">
                                <img src={require("../images/project/cggc.png").default} className="pc" alt="CGGC"/>
                                <img src={require("../images/project/cggc_m.png").default} className="mobile" alt="CGGC"/>
                            </div>
                            <div className="project-info">
                                <strong><span className="tag style02">적응형</span> CGGC</strong>
                                <div className="project-infoarea">
                                    <p>디자인 100% · 퍼블리싱 100%</p>
                                </div>
                            </div>
                        </a>
                    </li>

                    {/* <li className="project-item">
                        <a href="#" target="_blank" rel="noreferrer">
                            <div className="project-thumb">
                                <img src={require("../images/project/default.png").default} className="pc" alt="Special One Makers"/>
                                <img src={require("../images/project/default_m.png").default} className="mobile" alt="Special One Makers"/>
                            </div>
                            <div className="project-info">
                                <strong><span className="tag style02">적응형</span> Special One Makers</strong>
                                <div className="project-infoarea">
                                    <p>디자인 · 퍼블리싱 100%</p>
                                </div>
                            </div>
                        </a>
                    </li> */}

                    <li className="project-item">
                        <a href="https://rdebiz.co.kr/rd/index.html" className="project-link" target="_blank" rel="noreferrer">
                            <div className="project-thumb">
                                <img src={require("../images/project/rd.png").default} className="pc" alt="주식회사 알디 홈페이지"/>
                                <img src={require("../images/project/rd_m.png").default} className="mobile" alt="주식회사 알디 홈페이지"/>
                            </div>
                            <div className="project-info">
                                <strong><span className="tag style01">반응형</span> 주식회사 알디 홈페이지</strong>
                                <div className="project-infoarea">
                                    <p>템플릿 수정 · 유지보수 100%</p>
                                </div>
                            </div>
                        </a>
                    </li>

                    {/* <li className="project-item">
                        <a href="#" target="_blank" rel="noreferrer">
                            <div className="project-thumb">
                                <img src={require("../images/default.png").default} className="pc" alt="FieldMake"/>
                                <img src={require("../images/default_m.png").default} className="mobile" alt="FieldMake"/>
                            </div>
                            <div className="project-info">
                                <strong><span className="tag style02">적응형</span> FieldMake</strong>
                                <div className="project-infoarea">
                                    <p>디자인 100% · 유지보수</p>
                                </div>
                            </div>
                        </a>
                    </li> */}
                </ul>
            </section>
            
        </div>
    );
}

export default Info;