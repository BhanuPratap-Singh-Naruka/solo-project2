const Section = (props) => {
  return (
    <section className="container">
      <div className="section-img">
        <img src={props.item.imageUrl} alt={props.item.title} />
      </div>
      <div className="section-content">
        <div className="location">
          <i class="fa-solid fa-location-dot"></i>
          <small className="japan">{props.item.location}</small>
          <a href={props.item.googleMapsUrl}>View on Google map</a>
        </div>
        <p className="title">{props.item.title}</p>
        <small className="date">
          {props.item.startDate} - {props.item.endDate}
        </small>
        <p className="description">{props.item.description}</p>
      </div>
    </section>
  );
};

export default Section;
