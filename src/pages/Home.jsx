import React from 'react';
import Card from '../components/home/card';
import projects from '../components/home/info';
import '../styles/home.css';
import useCarouselLogic from '../components/home/carouselLogic'; // Import the hook

const Home = () => {
  const {
    position,
    updateCardWidth,
    handleMouseEnter,
    handleMouseLeave,
  } = useCarouselLogic(projects);

  return (
    <div className="mx-auto py-20">
      {/* <h1>hello</h1> */}
      <div className="carousel-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="carousel" style={{ transform: `translateX(${position}px)` }}>
          {projects.map((contact, index) => (
            <div key={contact.id} className="col mb-4">
              <Card
                name={contact.name}
                img={contact.img}
                info={contact.about}
                link="/projects"
                updateCardWidth={updateCardWidth}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
