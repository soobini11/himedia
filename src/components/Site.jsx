import React from 'react'


const siteText=[
  {
    text:["make","site compliant with","webstandard"],
    title:"웹 표준을 준수한 사이트 제작",
    site:"https://github.com/dduares/himedia",
    info:["1site code","product period: two days","ues stack: html5/css3, css variable, javascript..."]
  },
  {
    text:["sadf","site compliant with","webstandard"],
    title:"웹 표준을 준수한 사이트 제작",
    site:"https://github.com/dduares/himedia",
    info:["2site code","product period: two days","ues stack: html5/css3, css variable, javascript..."]
  },
  {
    text:["qwerweq","site compliant with","webstandard"],
    title:"웹 표준을 준수한 사이트 제작",
    site:"https://github.com/dduares/himedia",
    info:["3site code","product period: two days","ues stack: html5/css3, css variable, javascript..."]
  },
  {
    text:["fghkfk","site compliant with","webstandard"],
    title:"웹 표준을 준수한 사이트 제작",
    site:"https://github.com/dduares/himedia",
    info:["4site code","product period: two days","ues stack: html5/css3, css variable, javascript..."]
  },
]

const Site = () => {
  return (
   <section id='site'>
    <div className="site_inner">
      <div className="site_title">
        site coding <em>작품들</em>
      </div>
      <div className="site_wrap">
      {siteText.map((site,key)=>(
        <article className={`site_item s${key+1}`} key={key}>
          <span className='num'>0{key+1}.</span>
          <div className="text">
            <div>{site.text[0]}</div>
            <div>{site.text[1]}</div>
            <div>{site.text[2]}</div>
          </div>
          <div className="title"
          >웹 표준을 준수한 사이트 제작</div>
          <div className="btn">
            <a href={site.site}>code</a>
            <a href="/">view</a>
          </div>
          <div className="info">
            <span>{site.info[0]}</span>
            <span>{site.info[1]}</span>
            <span>{site.info[2]}</span>
          </div>
    
        </article>
        ))}
      </div>
    </div>
   </section>
  )
}

export default Site
