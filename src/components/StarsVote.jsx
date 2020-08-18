import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function StarsVote({ stars, size = '1x' }) {
  return (
    <div className="stars" >
      <style jsx>{`
        .stars{
          position: relative;
          color: #f0b41b;
        }
        .front_stars {
          position: absolute;
          z-index: 14;
          top: 0;
        }
      `}</style>
      <div className="back_stars">
        <FontAwesomeIcon icon={["far", "star"]} size={size}></FontAwesomeIcon>
        <FontAwesomeIcon icon={["far", "star"]} size={size}></FontAwesomeIcon>
        <FontAwesomeIcon icon={["far", "star"]} size={size}></FontAwesomeIcon>
        <FontAwesomeIcon icon={["far", "star"]} size={size}></FontAwesomeIcon>
        <FontAwesomeIcon icon={["far", "star"]} size={size}></FontAwesomeIcon>
      </div>
      <div className="front_stars">
        {
          [...Array(Math.floor(stars))].map((_, index) =>
            <FontAwesomeIcon icon='star' size={size} key={index} >{index}</FontAwesomeIcon>)
        }
        {
          stars - Math.floor(stars) >= 0.5 && <FontAwesomeIcon icon='star-half' size={size}></FontAwesomeIcon>
        }
      </div>
    </div >
  )
}