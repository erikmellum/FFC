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

import './marker.css';

const Marker = (props: any) => {
  return <>
    <div className="pin"></div>
    <div className="pulse"></div>
    <div className="text">{props.title}</div>
  </>
}

export default Marker;