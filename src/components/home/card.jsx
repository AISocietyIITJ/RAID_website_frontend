import React, { useRef, useEffect, useState } from 'react';
import '../../styles/home.css';
import { Link } from 'react-router-dom';

function Card(props) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      props.updateCardWidth(cardRef.current.offsetWidth);
    }
  }, [props, cardRef]);

  return (
    <div
      className="col mb-4"
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card shadow-lg rounded-lg overflow-hidden">
        <div className='flex items-center justify-center'>
          <img src={props.img} className="card-img-top shadow-lg rounded-lg overflow-hidden w-full max-w-96 h-auto mt-8 mb-4" alt="Card 1" />
        </div>
        <div className='flex items-center justify-center'>
          <h5 className="card-title project_name">{props.name}</h5>
        </div>

        {isHovered && (
          <div className='flex items-center justify-center'>
            <h2 className='information'>{props.info}</h2>
          </div>
        )}

        {isHovered && (
          <div className='flex items-center justify-center'>
            <div className="card-footer">
              <small className="link_style">{props.link && <Link to={props.link}>Click for more info...</Link>}</small>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
      
      


  
