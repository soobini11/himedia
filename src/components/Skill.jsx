import React from 'react'

const skillText =[
  {
    title : "우리의 목표는 100% 취업이다.",
    desc : "포트폴리오가 완성이 되어야합니다. 포트폴리오는 본인의 작품을 보기 좋게 디자인하여 보는 사람이 편하게 본인의 실력을 볼 수 있도록 하는 것이 가장 중요합니다. 개성이 강한 것도 좋지만 보는 사람들이 편한 작품이 지금은 더 중요한 듯 합니다.",
  },
  {
    title : "나의 스펙 쌓기",
    desc : "포트폴리오가 완성이 되어야합니다. 포트폴리오는 본인의 작품을 보기 좋게 디자인하여 보는 사람이 편하게 본인의 실력을 볼 수 있도록 하는 것이 가장 중요합니다. 개성이 강한 것도 좋지만 보는 사람들이 편한 작품이 지금은 더 중요한 듯 합니다.",
  },
  {
    title : "우리의 목표는 100% 취업이다.",
    desc : "포트폴리오가 완성이 되어야합니다. 포트폴리오는 본인의 작품을 보기 좋게 디자인하여 보는 사람이 편하게 본인의 실력을 볼 수 있도록 하는 것이 가장 중요합니다. 개성이 강한 것도 좋지만 보는 사람들이 편한 작품이 지금은 더 중요한 듯 합니다.",
  },
]

const Skill = () => {
  return (
    <section id="skill">
      <div className="skill_inner">
        <h2 className='skill_title'>Challenge <em>나의 도전</em></h2>
        <div className="skill_desc">
          {skillText.map((skill,key)=>(
            <div key={key}>
            <span>{key+1}</span>
            <h3>{Skill.title}</h3>
            <p>{skill.desc}</p>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skill
