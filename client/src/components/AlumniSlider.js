import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AlumniSlider = () => {
  const alumniData = [
    {
      name: 'John Doe',
      institute: 'MIT',
      story: 'John has achieved great success in AI research, leading groundbreaking projects in the field.',
      img: require('../images/alumni1.avif')
    },
    {
      name: 'Jane Smith',
      institute: 'Harvard',
      story: 'Jane is a pioneer in medical technology, with her innovations saving countless lives.',
      img: require('../images/alumni2.jpg')
    },
    {
        name: 'Anjali Verma',
        institute: 'IIT Delhi',
        story: 'Anjali has become a leading voice in sustainable architecture, designing eco-friendly buildings across the world.',
        img: require('../images/alumni4.jpg') // Replace with actual image URL
      },
      {
        name: 'Carlos Mendoza',
        institute: 'Stanford University',
        story: 'Carlos founded a successful tech startup that focuses on cybersecurity solutions for small businesses.',
        img: 'https://via.placeholder.com/150' // Replace with actual image URL
      },
      {
        name: 'Amina Hassan',
        institute: 'Oxford University',
        story: 'Amina is an influential human rights lawyer, advocating for justice and equality on an international stage.',
        img: 'https://via.placeholder.com/150' // Replace with actual image URL
      },
      {
        name: 'Li Wei',
        institute: 'University of Cambridge',
        story: 'Li is a renowned scientist, making significant contributions to renewable energy research.',
        img: '../images/alumni3.jpg' // Replace with actual image URL
      }

  ];

  const settings = {
  
    dots: true,
    focusOnSelect: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,

    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="alumni-slider">
      <Slider {...settings}>
        {alumniData.map((alumnus, index) => (
          <div key={index} className="alumni-card">
            <img src={alumnus.img} alt={alumnus.name} className="alumni-photo" />
            <div className="alumni-info">
              <h3>{alumnus.name}</h3>
              <h4>{alumnus.institute}</h4>
              <p>{alumnus.story}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AlumniSlider;
