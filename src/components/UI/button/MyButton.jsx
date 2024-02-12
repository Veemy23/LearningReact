import React, { Component } from 'react'
import classes from './MyButton.module.css'

export class MyButton extends Component {
  render() {
	const {children, ...props} = this.props
	 return (
		<button {...props} className={classes.myBtn}>{children}</button>
	 )
  }
}

export default MyButton