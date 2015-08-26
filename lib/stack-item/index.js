import React from 'react'
import styleable from 'react-styleable'

@styleable(require('./index.css'))
export default class TechStack extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    comment: React.PropTypes.string
  }
  renderComment() {
    return this.props.comment ? (<p> - {this.props.comment}</p>) : ''
  }
  render () {
    return (
      <li className={this.props.css.container}>
        <h3><a href={this.props.url}>{this.props.title}</a></h3>
        {this.renderComment()}
        {this.props.children}
      </li>
    )
  }
}
