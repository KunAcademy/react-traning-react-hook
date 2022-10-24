import './App.css';
import UseState from './hook/basic/useState';
import UseEffect from './hook/basic/useEffect';
import UseContext from './hook/advance/useContext/useContext';
import UseRef from './hook/advance/useRef';
import UseMemo from './hook/advance/useMemo';
import UseCallback from './hook/advance/useCallback/useCallback';

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseContext /> */}
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      <UseCallback />
    </div>
  );
}

export default App;
