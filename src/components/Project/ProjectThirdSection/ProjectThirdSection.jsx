import React from "react";
import './styles/ProjectThirdSection.css'
import turtlelearnmain from '../../../assets/images/ProjectSectionImages/turtlelearnmain.png'
import turtlelearnlogo from '../../../assets/images/ProjectSectionImages/turtlelearnlogo.png'
import { useNavigate } from "react-router-dom";

export default function ProjectThirdSection() {

    const navigate = useNavigate();

    const thirdDetail = () => {
        navigate("/MyPortfolio/thirdDetail");
    };

    // const thirdDetail = () => {
    //     window.open('/MyPortfolio/thirdDetail', '_blank');
    //     };

    return (
        <div className="projectThirdSection">
            <div className="projectFirstContainer">
                    <div className="firstImgBox">
                        <img src={turtlelearnmain} alt="turtlelearnmain" className="turtlelearnmainImg" />
                    </div>
                    <div className="explainBox">
                        <img src={turtlelearnlogo} alt="turtlelearnlogo" className="turtlelearnlogoImg"/>
                        <h3>
                            경계선 지능인을 위한 학습 앱 서비스
                        </h3>
                        <span>경계선 지능인을 타겟으로 한 학습 앱 서비스입니다.</span>
                        <span>경계선 지능인들이 사용자인 것을 고려해</span>
                        <span>서울시 경계선 지능인 평생교육센터에서 사용하는</span>
                        <span>메인 색상을 참고 하였으며, 폰트도 고려하여 UX/UI를 설계 및 디자인 하였습니다.</span>
                        <span>약 700만 명의 경계선 지능인들을 위해</span>
                        <span>성인지 학습, 읽기 및 말하기 학습, 문해력 학습, 진로 탐색으로 학습할 수 있습니다.</span>
                        <div className="buttonGroup">
                            <button onClick={thirdDetail}>More</button>
                            <a href="https://wlsn0105.github.io/project/turtlelearn.html" target="_blank" rel="noreferrer">
                                <button className="moreFigma">
                                    문제점 및 개선사항
                                </button>
                            </a>
                            <a href="https://www.figma.com/design/6DaeRbRD18g64VQo41XJkN/2024-%EB%94%94%EC%A7%80%ED%84%B8%EA%B2%BD%EC%A7%84%EB%8C%80%ED%9A%8C-UI?node-id=12-49&t=L1Ed7I1oQoJObew4-1" target="_blank" rel="noreferrer">
                                <button className="moreFigma">
                                    Figma
                                </button>
                            </a>
                        </div>
                    </div>
                </div> 
        </div>
    )
}