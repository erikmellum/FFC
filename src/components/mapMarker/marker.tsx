// https://gist.github.com/jobsamuel/56496033bfb4d0f3e316aeb88341ed16
// import React from 'react';
// import './marker.css';

// interface ContainerProps { }

// const ExploreContainer: React.FC<ContainerProps> = () => {
//   return (
//     <div className="container">
//       <strong>Ready to create an app?</strong>
//       <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
//     </div>
//   );
// };

// export default ExploreContainer;
import { useState } from 'react';
import './marker.css';

const Marker = (props: any) => {
  const [showHint, setShowHint] = useState<Boolean>(false);
  const handleClick = () => {
    setShowHint(!showHint);
  }
  return <>
    <div className="pin" onClick={handleClick}></div>
    <div className="pulse"></div>
    <div className="text">{props.marker.title}</div>
      <div className={`hint ${showHint ? "active" : ""}`}>
        <div className="hint-image-container">
          <img src="http://placekitten.com/100/50"/>
        </div>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi architecto, explicabo ab obcaecati, molestias blanditiis aliquid rem consequatur voluptatum excepturi vero? Ipsa eos impedit quam nisi architecto eum! Provident.</span>
      </div> 
  </>
}

export default Marker;