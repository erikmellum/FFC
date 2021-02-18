import React from 'react';
import './ExploreContainer.scss';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <img src="assets/ffc-logo.png"/>
      <h2>Helping people from all ages and stages develop a faith that is real and friends that are true so that we may think Biblically, live distinctively, and love like Jesus to impact our world for Christ.</h2>
    </div>
  );
};

export default ExploreContainer;
