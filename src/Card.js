import React from 'react';

function Card(props){
	const {name, email, id} = props;
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 bw2 shadow-1 grow">
			<img src={`https://robohash.org/${id}?200x200 `} alt ='avatar'/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;