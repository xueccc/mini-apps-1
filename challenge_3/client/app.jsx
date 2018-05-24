// import React from 'react';
// import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkOutPage : true,
      personalInfo : false,
      shippingInfo : false,
      creditCardInfo : false,
      name:''
    };
  }

  toPersonalInfo() {
    this.setState( {
      checkOutPage: false,
      personalInfo: true
    })
  }
  
  toShippingInfo() {
    this.setState( {
      personalInfo: false,
      shippingInfo : true
    })
  }

  toCCInfo() {
    this.setState( {
      shippingInfo : false,
      creditCardInfo : true
    })
  }


  render() {
    var isCheckOut = this.state.checkOutPage;
    var checkOut = isCheckOut ? (
      <button type="button" onClick={this.toPersonalInfo.bind(this)}>Checkout</button >
    ) : (null);

    var personalInfo = this.state.personalInfo ? (
      <form action="../server.js" method="post">
        Name <input type="text" name="name" onChange={(e)=>{this.setState({name : e.target.value})}}/> <br/>
        Email <input type="email" name="email" /> <br/>
        Password <input type="text" name="password"/><br/>
        <button type="button" onClick={this.toShippingInfo.bind(this)}>Next</button >
      </form>
    ) : (null);

    
    var shippingInfo = this.state.shippingInfo ? (
      <form action="../server.js" method="post">
        Street <input type="text" name="street"/> <br/>
        City <input type="text" name="city"/> <br/>
        State <input type="text" name="state"/> <br/>
        Zip Code <input type="text" name="zipcode"/><br/>
        <button type="button" onClick={this.toCCInfo.bind(this)}>Next</button >
      </form>
    ) : (null);
    
    var creditCardInfo = this.state.creditCardInfo ? (
      <form action="../server.js" method="post">
        Credit Card number <input type="text" name="creditCardNum"/> <br/>
        Expiration date <input type="text" name="expiryDate"/> <br/>
        CVV <input type="text" name="CVV"/> <br/>
        Billing Zip Code <input type="text" name="bZipCode"/><br/>
        <button type="button">Next</button >
      </form>
    ) : (null);


    return (
      <div>
        {checkOut}
        {personalInfo}
        {shippingInfo}
        {creditCardInfo}
      </div>
    )
  }

}










ReactDOM.render(
  <App />,
  document.getElementById('app')
);

