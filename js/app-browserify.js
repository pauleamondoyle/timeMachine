// es5 and 6 polyfills, powered by babel
require("babel/polyfill")

let fetch = require('./fetcher')

var React = require('react')


// other stuff that we don't really use in our own code
// var Pace = require("../bower_components/pace/pace.js")

// require your own libraries, too!
// var Router = require('./app.js')

// window.addEventListener('load', app)

// function app() {
    // start app
    // new Router()
// }

// ===============================================

var ClockMachine = React.createClass({

	getInitialState: function(){
		return{
			year: 2015,
			ticking: false
		}
	},


	tickForward: function(){
		var self = this
		if (!this.state.ticking){
			self.setState({
				year: self.state.year + 1,
				ticking: true
			})
			setInterval(function(){
				self.setState({
					year: self.state.year + 1,
					ticking: true
				})
			}, 1000)
		}
		else {
			clearInterval(this.tickForward)
		}
	},


	tickBackward: function(){
		var self = this
		if (!this.state.ticking){
			self.setState({
				year: self.state.year - 1,
				ticking: true
			})
			setInterval(function(){
				self.setState({
					year: self.state.year - 1,
					ticking: true
				})
			}, 1000)
		}
	},

	tickPause: function(){
		// var self = this
		// if (this.state.ticking){
		// 	self.setState({year: self.state.year,
		// 					ticking: false}) 
		// 	// setTimeout(this.tickPause, 1000)
		// }
		
		clearInterval(this.tickForward)
	},

	render: function(){
	return(
		<div>
			<p className='readout'> {this.state.year} </p>
			<button onClick={this.tickBackward} className='tickButton'>&#60;</button>
			<button onClick={this.tickPause} className='tickButton'>||</button>
			<button onClick={this.tickForward} className='tickButton'>&#62;</button>
		</div>

	)}


})

React.render(<ClockMachine/>,document.getElementById('clockContainer'))
