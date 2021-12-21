import './App.css';
import { Link, Routes, Route} from "react-router-dom";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";

const HeadName = "Navbar & Link";

function Hello(){
  let Hello_N = "Firts & End";
  return(      
      <div>
        <h1>{Hello_N}</h1>
      </div>
      );
}

export default function App() {
  return (
    document.title = 'Main',
    <div >
      <nav className="Head">
      <h1> {HeadName}</h1>
        <ul className='nav'>
          <li>
            <Link to="/">Home</Link>
          </li>|{" "}
          <li>
            <Link to="/invoices">Invoices</Link>
          </li>|{" "}
          <li>
          <Link to="/expenses">Expenses</Link>
          </li>|{" "}
        </ul>        
      </nav>
      <Routes>
          <Route path="/" element={<Hello /> }/>          
          <Route path="expenses" element={<Expenses /> }/>
          <Route path="invoices" element={<Invoices />} />
        </Routes>
    </div>
  );
}