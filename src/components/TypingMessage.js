import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  from: PropTypes.object.isRequired,
};

function TypingMessage({ time, from }) {
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span> &nbsp;
        <i class="fa fa-circle me"></i>
        <p>
          <i class="fa fa-circle me"></i>
          <i class="fa fa-circle me" style={{ opacity: 0.5 }}></i>
          <i class="fa fa-circle me" style={{ opacity: 0.25 }}></i>
        </p>
      </div>
    </li>
  );
}

TypingMessage.propTypes = propTypes;

export default TypingMessage;
