import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  from: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

function Response({ time, from, text }) {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i> {from.name}
        </span>
        <span className="message-data-time">{time}</span>
      </div>
      <div className="message my-message">{text}</div>
    </li>
  );
}

Response.propTypes = propTypes;

export default Response;
