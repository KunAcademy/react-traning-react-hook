import './App.css';
import UseState from './hook/basic/useState';
import UseEffect from './hook/basic/useEffect';
import UseContext from './hook/advance/useContext/useContext';
import UseRef from './hook/advance/useRef';
import UseMemo from './hook/advance/useMemo';
import UseCallback from './hook/advance/useCallback/useCallback';
import UseTransition from './hook/advance/useTransition';
import UseDeferredValue from './hook/advance/useDeferrredValue';

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseContext /> */}
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <UseTransition /> */}
      <UseDeferredValue />
    </div>
  );
}

export default App;
