import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  from: PropTypes.object.isRequired,
};

function TypingResponse({ time, from }) {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i> {from.name}
        </span>
        <span className="message-data-time">{time}</span>
      </div>
      <i className="fa fa-circle online"></i>
      <i className="fa fa-circle online" style={{ opacity: 0.5 }}></i>
      <i className="fa fa-circle online" style={{ opacity: 0.25 }}></i>
    </li>
  );
}

TypingResponse.propTypes = propTypes;

export default TypingResponse;
