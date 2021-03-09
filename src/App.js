import React, { useEffect, useState } from 'react';
import Inspector from './Components/Inspector/Inspector';
import Creator from './Components/Creator/Creator'
import Navigation from './Components/Navigation/Navigation'
import { Route, Switch} from 'react-router-dom'
function App() {

  const [invoiceData, setInvoiceData] = useState()
  const saveDataHandler = (e) =>{
    e.preventDefault()
    setInvoiceData({...invoice})
  }
  const [invoice, setInvoice] = useState({
    invoiceNumber: '',
    city: '',
    releaseDate: '',
    saleDate: '',
    sellerCompany: '',
    sellerNip: '',
    sellerAddress: '',
    sellerCity: '',
    sellerCode: '',
    buyerCompany: '',
    buyerNip: '',
    buyerAddress: '',
    buyerCity: '',
    buyerCode: '',
    serviceName: '',
    qty: '',
    priceNetto: '',
    priceBrutto: '',
    vat: '',
    paymentMethod: '',
    paymentDeadline: '',
    accountNumber: '',
    splitPayment: true,
  })

  const handleChange = (e)=>{
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setInvoice({
      ...invoice,
      [e.target.name]: value
    });
  }

  useEffect(()=>{
    localStorage.setItem('Invoice', JSON.stringify(invoiceData))
  },[invoiceData])

  return (
    <div className="App">
        <Navigation />
      <Switch>
      <Route path="/" exact >
        <Creator handleChange={handleChange} invoice={invoice} setInvoice={setInvoice} saveDataHandler={saveDataHandler} />
      </Route>
      <Route path="/inspect" component={Inspector} />
      </Switch>
    </div>
  );
}

export default App;
