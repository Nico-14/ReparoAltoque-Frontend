import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

export default function VolverArriba() {
  const [bottom, setBottom] = useState(-20);

  useEffect(() => {
    //componentDidMount()
    const handleScrollEvent = () => {
      if (window.scrollY + window.innerHeight >= window.innerHeight * 1.5) {
        setBottom(2);
      } else {
        setBottom(-20);
      }
    }; //
    window.addEventListener('scroll', handleScrollEvent);
    //componentWillUnmount()
    return () => window.removeEventListener('scroll', handleScrollEvent); //
  });

  const backToTheTop = () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

  return (
    <button type="button" className="btn btn-warning" onClick={() => backToTheTop()}>
      <style jsx>{`
        button {
          position: fixed;
          bottom: ${bottom}%;
          right: 2%;
          z-index: 40;
        }
      `}</style>
      <span className="btn-inner--icon">
        <FontAwesomeIcon icon={faAngleDoubleUp} size="2x" />
      </span>
    </button>
  );
}
