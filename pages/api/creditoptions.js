// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  const currencySymbol = "£";
  const productPrice = req.query && req.query.productprice;
  const creditStatus = req.query && req.query.creditstatus;


  if(! productPrice || ! creditStatus){
    res.status(400).json(   {
      "code": 400,
      "response": "Invalid json message received"
    });
  }

  const divMarkUp = `<div>
    <h4>Credit Options</h4>
    <p>Product Price ${currencySymbol}${productPrice}</p>
    <p>Credit Status ${creditStatus}</p>
    <button>Click me!</button>
  </div>`;

  res.status(200).json(
    {
      "code": 200,
      "response": [
          {
              "typeCode": "veryPayContent_div",
              "versionId": "vp_0001",
              "markUp": divMarkUp
          },
          {
              "typeCode": "veryPayContent_modal1",
              "versionId": "vp_0001",
              "markUp": divMarkUp
          }
      ]
    }
  )
}
