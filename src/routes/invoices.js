import { Link } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();
  
  /*function getInvoices(); in ../Data.js*/
  return (
    document.title = 'Invoices',

    <div style={{ display: "flex" }}>
      <nav style={{ borderRight: "solid 1px", padding: "1rem"}}>

          <Link to="/">Back to Home</Link>
      
          {invoices.map(invoice => ( 
          <Link style={{ display: "block", margin: "1rem 0" }} 
                to={`/invoices/${invoice.number}`} 
                key={invoice.number}>
            {invoice.name}
          </Link>
        ))}

      </nav>
    </div>
  );
}