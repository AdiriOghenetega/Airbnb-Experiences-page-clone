export default function Reviews(props) {
  let display 
  if (props.openSpots === 0) {
    display = "SOLD OUT"
  } else if (props.location === "Online") {
    display = "ONLINE"
  }

  return (
    <div className="review_container">
      <div className="review_img">
        <img src={`./images/${props.coverImg}`} />
        {display && <button>{display}</button>}
      </div>
      <div className="review_rating_location">
        <img src="./images/Star-icon.png" />
        <span className="rating">{props.stats.rating}</span>
        <span className="reviewcount gray">
          ({props.stats.reviewCount}).
        </span>{" "}
        <span className="location gray">{props.location}</span>
      </div>
      <p className="title">{props.title}</p>
      <span className="price">
        <bold className="bolden">From ${props.price}</bold> /person
      </span>
    </div>
  );
}
