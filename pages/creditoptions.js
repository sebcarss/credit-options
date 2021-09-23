import { Button } from "@mui/material";

function CreditOptions({ currencySymbol, productPrice, creditStatus }) {
  return <div>
    <h4>Credit Options</h4>
    <p>Product Price {currencySymbol}{productPrice}</p>
    <p>Credit Status {creditStatus}</p>
    <Button>View more</Button>
  </div>
}

// This gets called on every request
export async function getServerSideProps(context) {

  const currencySymbol = "£";
  const productPrice = (context.query && context.query.productprice) || 0;
  const creditStatus = (context.query && context.query.creditstatus) || 0;
  
  return { 
    props: { 
      currencySymbol,
      productPrice,
      creditStatus
    } 
  }
}

export default CreditOptions
