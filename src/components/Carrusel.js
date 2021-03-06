import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function App() {
return (
	<div className="Carrusel">
		<Carousel 
			controls={false}
			fade={true}
			indicators={false}
			>
			<Carousel.Item interval={3000}>
			<img
				className="d-block w-100 CarruselImg"
				src="https://firebasestorage.googleapis.com/v0/b/shubaraship.appspot.com/o/Banners%2FPop-Banner.png?alt=media&token=81335dda-4bcc-491f-aed1-5e7cf5a932c5"
				alt="Funko Pop"
			/>
			</Carousel.Item>
			<Carousel.Item interval={3000}>
			<img
				className="d-block w-100 CarruselImg"
				src="https://firebasestorage.googleapis.com/v0/b/shubaraship.appspot.com/o/Banners%2FYakuza-Banner.png?alt=media&token=fd62db3a-c343-43dc-af94-fd93646628f3"
				alt="Yakuza"
			/>
			</Carousel.Item>
			<Carousel.Item interval={3000}>
				<img
					className="d-bloc w-100 CarruselImg"
					src="https://firebasestorage.googleapis.com/v0/b/shubaraship.appspot.com/o/Banners%2FZelda-Banner.png?alt=media&token=a54b70cf-32f1-4f5b-abb4-92d27cd5d2be"
					alt="Zelda BotW"
				/>
			</Carousel.Item>
		</Carousel>
	</div>
);
}

