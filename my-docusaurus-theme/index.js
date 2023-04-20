const ChatBox = require('./ChatBox').default;

function Theme({ children }) {
  return (
    <>
      <ChatBox />
      {children}
    </>
  );
}

module.exports = Theme;
