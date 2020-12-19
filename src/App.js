import react from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import Widgets from "./Widgets"
import Login from "./Login"
import './App.css'
import { useStateValue } from "./StateProvider"

function App() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="App">
      {
        user ? (
          <>
            <Header />

            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </>
        ) : (
            <Login />
          )
      }
      
    </div>
  );
}

export default App;
