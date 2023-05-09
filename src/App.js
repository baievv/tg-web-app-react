import { useEffect } from "react";
import "./App.css";

const tg=window.Telegram.WebApp;

function App() {

  useEffect(()=>{
    tg.ready();
  },[])
  const onCLose=()=>{
    tg.close();
  }

  return (
  <div className="App">
    Work
    <button onClick={onclose}>Закрыть</button>
    </div>
  )
}

export default App;
