import React, { useEffect, useRef } from 'react'
import port01 from "../assets/images/port01.jpg"
import port02 from "../assets/images/port02.jpg"
import port03 from "../assets/images/port03.jpg"
import port04 from "../assets/images/port01.jpg"
import port05 from "../assets/images/port02.jpg"
import port06 from "../assets/images/port03.jpg"

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const portText = [
    {
        num : "01",
        title : "Team Ace 팀프로젝트",
        site : "http://jok874.dothome.co.kr/main/",
        img : port01,
        desc : "고난과 역경이 가득한 프로젝트로 팀장을 갈아서 눈물나게 만든 작품이며, 플러그인보다는 직접 프로그램을 작성하여서 이벤트를 만드는것을 중점으로 하였으며, OTT사이트를 참고하여 디벨롭 시킨 작품입니다. 팀장이 다해서 팀장이 설명해야 되는 프로젝트로 모델 이동욱님이 촬영에 임해주셔서 좋은 작품으로 탄생시켰습니다.",
        alt : "TeamACE 포트폴리오",
    },
    {
        num : "02",
        title : "팀 화성 팀프로젝트",
        site : "http://kimmina.dothome.co.kr/hwasung/",
        img : port02,
        desc : "MZ세대를 겨냥한 온라인 전자상으로 다양한 제품을 한곳에서 볼 수 있도록 디자인 하엿으며, 팀원들의 이모지를 만들어서 좀더 다양한 컨텐츠를 보여주는 센스를 보여줬으며, 팀원한명한명의 실력을 보여 줄 수 있는 서브페이지를 제작한 팀 프로젝트 였습니다.",
        alt : "팀 화성 포트폴리오",
    },
    {
        num : "03",
        title : "Team C 팀프로젝트",
        site : "http://dongbinhosting.dothome.co.kr/team/",
        img : port03,
        desc : "요즘 웹페이지의 트랜드인 움직임을 매우 잘 표현한 작품으로 각 팀원들의 한명한명이 그 트랜드를 구현하기위해 많은 노력을 보여주는 작품이며,트랜드에 맞는 색상을 활용하여 만들었으며, 워크가 좋았다.",
        alt : "TeamACE 포트폴리오",
    },
    {
        num : "04",
        title : "Team Ace 팀프로젝트",
        site : "http://jok874.dothome.co.kr/main/",
        img : port04,
        desc : "고난과 역경이 가득한 프로젝트로 팀장을 갈아서 눈물나게 만든 작품이며, 플러그인보다는 직접 프로그램을 작성하여서 이벤트를 만드는것을 중점으로 하였으며, OTT사이트를 참고하여 디벨롭 시킨 작품입니다. 팀장이 다해서 팀장이 설명해야 되는 프로젝트로 모델 이동욱님이 촬영에 임해주셔서 좋은 작품으로 탄생시켰습니다.",
        alt : "TeamACE 포트폴리오",
    },
    {
        num : "05",
        title : "팀 화성 팀프로젝트",
        site : "http://kimmina.dothome.co.kr/hwasung/",
        img : port05,
        desc : "MZ세대를 겨냥한 온라인 전자상으로 다양한 제품을 한곳에서 볼 수 있도록 디자인 하엿으며, 팀원들의 이모지를 만들어서 좀더 다양한 컨텐츠를 보여주는 센스를 보여줬으며, 팀원한명한명의 실력을 보여 줄 수 있는 서브페이지를 제작한 팀 프로젝트 였습니다.",
        alt : "팀 화성 포트폴리오",
    },
    {
        num : "06",
        title : "Team C 팀프로젝트",
        site : "http://dongbinhosting.dothome.co.kr/team/",
        img : port06,
        desc : "요즘 웹페이지의 트랜드인 움직임을 매우 잘 표현한 작품으로 각 팀원들의 한명한명이 그 트랜드를 구현하기위해 많은 노력을 보여주는 작품이며,트랜드에 맞는 색상을 활용하여 만들었으며, 워크가 좋았다.",
        alt : "TeamACE 포트폴리오",
    },

]

const Port = () => {

    const horizontalRef = useRef(null);
    //useRef(null) : 변수를 생성하고, 초기화시키는 명령어

    const sectionsRef = useRef([]);
    // useRef([]) : 변수를 만들고, 빈 배열로 초기화시킴

    useEffect(()=>{
        // useEffect(()=>{}): 컴퍼넌트가 랜더링될때 어떤한 작업을 수행하도록 해야한다면, 그것을 설정해주는 hook 명령
    
        gsap.registerPlugin(ScrollTrigger)
        // Trigger는 어느 특정한 동작에 반응해 자동으로 필요한 동작을 실행하는것을 말한다.
        // ScrollTrigger 플러그인을 등록함.
    
        const horizontal=horizontalRef.current;
        // horizontalRef의 현재값을 horizontal에 대입
        const sections=sectionsRef.current;
        // sectionsRef의 현재값을 sections에 대입
    
        let scrollTween=gsap.to(sections,{
            xPercent:-120*(sections.length-1),
            scrollTrigger:{
                trigger:horizontal,
                start:"top 56px",
                end:()=>"+="+horizontal.offsetWidth,
                pin:true,
                // 활성상태 트리거 요소 고정
                scrub:1,
                // 스크롤이 화면 움직임을 따라가는데 1초걸림
            }
        });
        return()=>{
            scrollTween.kill();
            //스크롤 애니메이션을 제거, 컴포넌트가 언마운팅할 때 메모리 누수를 방지해줌
            //마운트 : 데이터가 화면에 보여지는 것
        }

        // sections{},[]: 랜더링 완료 후 한번 실행.
    
    },[]);

  return (
    <section id="port" ref={horizontalRef}>
            <div className="port_inner">
                <div className="port_title">
                    portfolio <em>포폴작업물</em>
                </div>
                <div className="port_wrap">

                    {portText.map((port,key)=>(
                        <article className={`port_item p${key + 1}`} key ={key}
                            ref = {(el)=>(sectionsRef).current[key] = el}
                        >
                        <span className="num">{port.num}</span>
                        <a href={port.site} target="_blank" className="img" rel="noopener noreferrer">
                            <img src={port.img} alt={port.alt}/>
                        </a>
                        <h3 className="title">{port.title}</h3>
                        <p className="desc">
                            {port.desc}
                        </p>
                        <a href={port.site} target="_blank" className="site">사이트 보기</a>
                    </article>
                    ))}

                    
                </div>
            </div>
        </section>      
  )
}

export default Port
