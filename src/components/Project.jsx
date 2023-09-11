import PropTypes from 'prop-types';

export default function Project(props) {
  return (
    <>
    <div className="container col-lg-6 col-md-12 flex-md-fill pb-4">
      <div className="card bg-dark text-white">
        <img src={props.srcUrl} className="card-img" alt="{props.description}" />
        <div className="card-img-overlay">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.description}
          </p>
          <p className="card-text">test</p>
        </div>
      </div>
    </div>
    </>
  );
}

Project.propTypes = {
  srcUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}