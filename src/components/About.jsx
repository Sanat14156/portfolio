import React from 'react'

const About = () => (
  <div className='about'><a id='about'></a>
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
        <div>HTML
          <div><div></div></div></div>
        <div>CSS
          <div><div></div></div></div>
        <div>JavaScript
          <div><div></div></div></div>
        <div>JAVA
          <div><div></div></div></div>
        <div>J2EE
          <div><div></div></div></div>
        <div>SQL
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