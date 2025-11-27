import CometChatApp from "./CometChat/CometChatApp";

const App = () => {
  return (
    <div 
      id="light-theme"  // 👈 REQUIRED THEME WRAPPER
      style={{ width: "100vw", height: "100vh" }}
    >
      <CometChatApp />
    </div>
  );
};

export default App;
