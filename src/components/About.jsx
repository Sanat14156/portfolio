import React from 'react'

const About = () => (
  <div className='about' id='about'>
    <h2>ABOUT</h2>
    <section>
      <article className='details'>
        <p><span>University:</span> Gautam Buddha University, Greater Noida, U.P.</p>
        <p><span>Degree:</span> B.Tech(ME) </p>
        <p><span>Birthday:</span> 29-01-1999</p>
        <p><span>Age:</span> 24 years</p>
        <p><span>Current Location:</span> Delhi</p>
        <p><span>Traning:</span> JSpider's Noida </p>
        <p><span>Duration:</span> 6 months</p>
      </article>
      <article className='skills'>
        <div><div><span>HTML</span><span>95%</span></div>
          <div><div></div></div>
          </div>
        <div><div><span>CSS</span><span>88%</span></div>
          <div><div></div></div></div>
        <div><div><span>JavaScript</span><span>90%</span></div>
          <div><div></div></div></div>
        <div><div><span>React Js</span><span>85%</span></div>
          <div><div></div></div></div>
        <div><div><span>Java</span><span>90%</span></div>
          <div><div></div></div></div>
        <div><div><span>SQL</span><span>80%</span></div>
          <div><div></div></div></div>
      </article>
    </section>
    <section className='education'>
      <h3>Education</h3>
      <div>
        <h5>🗓️ 2016-2021</h5>
        <h3>Bachelor of Technology</h3>
        <p>Gautam Buddha University, Greater Noida, U.P.</p>
        <p>83.3%</p>
      </div>
      <div>
        <h5>🗓️ 2014-2015</h5>
        <h3>Intermediate</h3>
        <p>Mantora Public School, Kanpur, U.P. (CBSE)</p>
        <p>86%</p>
      </div>
      <div>
        <h5>🗓️ 2012-2013</h5>
        <h3>High School</h3>
        <p>Siddharth Public School, Kanpur, U.P. (CBSE)</p>
        <p>78%</p>
      </div>
    </section>

  </div>
)

export default About