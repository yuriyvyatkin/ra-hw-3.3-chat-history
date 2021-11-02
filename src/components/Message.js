import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  from: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

function Message({ time, from, text }) {
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span> &nbsp;
        <i class="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">{text}</div>
    </li>
  );
}

Message.propTypes = propTypes;

export default Message;
