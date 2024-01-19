import React from 'react'
const siteText = [
  {
    text: ["make", "site compliant with", "webstandard"],
    title: "웹 표준을 준수한 사이트 제작",
    site: "https://github.com/soobini11/himedia",
    info: ["site code", "production period : two days", "use stack : html5/css3 javascript..."]
  },
  {
    text: ["2make", "site compliant with", "webstandard"],
    title: "웹페이지 디자인",
    site: "https://github.com/soobini11/himedia",
    info: ["site code", "production period : two days", "use stack : html5/css3 javascript..."]
  },
  {
    text: ["3make", "site compliant with", "webstandard"],
    title: "웹 표준을 준수한 사이트 제작",
    site: "https://github.com/soobini11/himedia",
    info: ["site code", "production period : two days", "use stack : html5/css3 javascript..."]
  },
  {
    text: ["4make", "site compliant with", "webstandard"],
    title: "웹 표준을 준수한 사이트 제작",
    site: "https://github.com/soobini11/himedia",
    info: ["site code", "production period : two days", "use stack : html5/css3 javascript..."]
  }
]

const Site = () => {
  return (
    <section id="site">
      <div className="site_inner">
        <div className="site_title">
          Site coding <em>작품들</em>
        </div>
        <div className="site_wrap">
          {siteText.map((site, key) => (
            <article className={`site_item s${key+1}`} key={key}>
              <span className='num'>0{key+1}.</span>
              <div className="text">
                <div>{site.text[0]}</div>
                <div>{site.text[1]}</div>
                <div>{site.text[2]}</div>
                <h3 className='title'>{site.title}</h3>
              </div>
              <div className="btn">
                <a href={site.site}>code</a>
                <a href={site.site}>view</a>
              </div>
              <div className="info">
                <span>{site.info[0]}</span>
                <span>{site.info[1]}</span>
                <span>{site.info[2]}</span>

              </div>
            </article>
          ))}

          {/* <article className='site_item s2'>
          <span className='num'>02.</span>
          <div className="text">
            <div>design</div>
            <div>design compliant with</div>
            <div>UI/UX design</div>
            <h3 className='title'>웹페이지 디자인</h3>
          </div>
          <div className="btn">
              <a href="https://github.com/soobini11/himedia">code</a>
              <a href="/">view</a>
            </div>
            <div className="info">
              <span>site design</span>
              <span>production period : two days</span>
              <span>use stack : photoshop/illustrator, figma, github...</span>
            </div>
        </article>
        <article className='site_item s3'>
          <span className='num'>03.</span>
          <div className="text">
            <div>design</div>
            <div>design compliant with</div>
            <div>UI/UX design</div>
          </div>
          <h3 className='title'>웹페이지 디자인</h3>
            <div className="btn">
              <a href="https://github.com/soobini11/himedia">code</a>
              <a href="/">view</a>
            </div>
            <div className="info">
              <span>site design</span>
              <span>production period : two days</span>
              <span>use stack : photoshop/illustrator, figma, github...</span>
            </div>
        </article>
        <article className='site_item s4'>
          <span className='num'>04.</span>
          <div className="text">
            <div>design</div>
            <div>design compliant with</div>
            <div>UI/UX design</div>
          </div>
          <h3 className='title'>웹페이지 디자인</h3>
            <div className="btn">
              <a href="https://github.com/soobini11/himedia">code</a>
              <a href="/">view</a>
            </div>
            <div className="info">
              <span>site design</span>
              <span>production period : two days</span>
              <span>use stack : photoshop/illustrator, figma, github...</span>
            </div>
        </article> */}
        </div>
      </div>
    </section>
  )
}

export default Site
