import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

function CurrItem(props) {
	return (
			<div>
			    <img alt={props.alt} src={props.src} />
			    <Carousel.Caption>
			    	<h3>{props.title}</h3>
			        <p>{props.text}</p>
			    </Carousel.Caption>
		    </div>
	)
}


class MyCarousel extends Component {

	render (){
		return (
			<Carousel>
				<Carousel.Item>
				    <CurrItem alt="Dijkstra" src="/images/dijkstra_exp.jpg" title="First slide label" text="Nulla vitae elit libero, a pharetra augue mollis interdum."/>
				</Carousel.Item>
				<Carousel.Item>
				    <CurrItem alt="Alan Turing" src="/images/alan_turing_exp.jpg" title="Second slide label" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
				</Carousel.Item>
				<Carousel.Item>
				    <CurrItem alt="Linus Torvalds" src="/images/linus_torvalds_exp.jpg" title="Third slide label" text="Praesent commodo cursus magna, vel scelerisque nisl consectetur."/>
				</Carousel.Item>
		  	</Carousel>
		)
	}
}

export default MyCarousel;