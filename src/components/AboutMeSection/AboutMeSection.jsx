import React from "react"
import './styles/AboutMeSection.css'

export default function AboutMeSection() {
    return (
        <div className="aboutMeSection">
            <div className="aboutMeContainer">
                <div className="containerHeader">
                    <h2>
                        ABOUT ME
                    </h2>
                </div>
                <div className="containerBox">
                    <div className="containerLeft">
                        <div className="containerLeftBox">
                            <div className="containerLeftName">
                                <h3>박진우</h3>
                            </div>
                            <div className="containerLeftContent">
                                <span>안녕하세요!</span>
                                <span>웹 퍼블리셔 및 웹 개발자 박진우입니다.</span>
                            </div>
                            <div className="containerLeftContent">
                                <span>사용자 관점을 고려하여 웹/앱 디자인 및 개발을 진행합니다.</span>
                                <span className="leftContentGroup">
                                    <span className="boldContent">
                                        React / JavaScript / Html / Css&nbsp;
                                    </span>
                                    를 주로 사용하며
                                </span>
                                <span>디자인 설계로 &nbsp;
                                    <span className="boldContent">
                                        Figma / Adobe Indesign &nbsp;
                                    </span>
                                    툴을 사용합니다.
                                </span>
                            </div>
                            <div className="containerLeftContent">
                                <span>sddd</span>
                            </div>
                        </div>
                    </div>
                    <div className="containerRight">
                        오른쪽
                    </div>
                </div>
            </div>
        </div>
    ) 
}