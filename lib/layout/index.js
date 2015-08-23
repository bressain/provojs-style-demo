import React from 'react'
import styleable from 'react-styleable'

import Cover from '../cover'
import Avatar from '../avatar'

@styleable(require('./index.css'))
export default class Layout extends React.Component {
  render () {
    return (
      <div className={this.props.css.container}>
        <Cover />
        <Avatar />
        <div className={this.props.css.main}>
          <div className={this.props.css.bio}>
            <h1>Bressain Dinkelman</h1>
            <p>.Net, JavaScript, software craftsman at <a href="http://www.pluralsight.com">Pluralsight</a>. I like music, video games and programming. I've been accused of acting my age on occasion.</p>
          </div>
          <div className={this.props.css.info}>
            <h2>Background & Experience</h2>
            <p>
              <ul>
                <li>BS in Computer Science (some emphasis on graphic art).</li>
                <li>Caselle (5 years) - Desktop accounting software using .Net & SQL Server.</li>
                <li>Henry Schein (2 years) - Dental desktop & website software using .Net, Grails, Backbone, & SQL Server.</li>
                <li>Ancestry.com (2 years) - Geneological backend and full stack website using .Net, Angular, SQL Server, & MySQL.</li>
                <li>Pluralsight.com (1 year) - Tech & creative learning full stack website using .Net, Angular, React, & Cassandra.</li>
              </ul>
            </p>
            <h2>Technology Stack</h2>
            <p>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
