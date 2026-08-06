import Modal from "./Modal";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      <div style={{ padding: 50 }}>
        <Tooltip text="This tooltip is measured before paint">
          <button>Hover me</button>
        </Tooltip>
      </div>
      <div style={{ padding: 50 }}>
        <Tooltip text="This tooltip is measured after paint" useLayoutEffect={false}>
          <button>Hover me</button>
        </Tooltip>
      </div>
      <div style={{ padding: 50 }}>
        <Modal isOpen={true} onClose={() => {}} />
          <button onClick={() => {}}>Open Modal</button>
      </div>

    </div>
  );
};

export default App;
