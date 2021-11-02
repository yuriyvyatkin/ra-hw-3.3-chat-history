import Message from './Message';
import TypingMessage  from './TypingMessage';
import Response  from './Response';
import TypingResponse  from './TypingResponse';

const defaultProps = {
  list: [],
};

function MessageHistory({ list }) {
  if (list.length === 0) {
    return null;
  }

  const secondLastIndex = list.length - 2;

  return (
    <ul>
      {list.map((item, index) => {
        if (index < secondLastIndex) {
          if (index % 2 === 0) {
            return (
              <Message
                key={item.id}
                id={item.id}
                time={item.time}
                from={item.from}
                text={item.text}
              />
            );
          }

          return (
            <Response
              key={item.id}
              id={item.id}
              time={item.time}
              from={item.from}
              text={item.text}
            />
          );
        }

        if (item.text && index % 2 === 0) {
          return (
            <Message
              key={item.id}
              id={item.id}
              time={item.time}
              from={item.from}
              text={item.text}
            />
          );
        } else if (item.text) {
          return (
            <Response
              key={item.id}
              id={item.id}
              time={item.time}
              from={item.from}
              text={item.text}
            />
          );
        }

        if (item.from.name === list[0].from.name) {
          return (
            <TypingMessage
              key={item.id}
              id={item.id}
              time={item.time}
              from={item.from}
            />
          );
        }

        return (
          <TypingResponse
            key={item.id}
            id={item.id}
            time={item.time}
            from={item.from}
          />
        );
      })}
    </ul>
  );
}

MessageHistory.defaultProps = defaultProps;

export default MessageHistory;
