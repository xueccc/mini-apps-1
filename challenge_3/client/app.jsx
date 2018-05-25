


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkOutPage : true,
      personalInfo : false,
      shippingInfo : false,
      creditCardInfo : false,
      reviewPage : false
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

  toReviewPage() {
    this.setState( {
      creditCardInfo : false,
      reviewPage : true
    })
  }
  
  updateState(e) {
    this.setState({
       [e.target.name]: e.target.value
    })
  }

  postRequest(){
    var purchase = {
      name: this.state.name || null,
      email: this.state.email || null,
      password: this.state.password || null,
      street: this.state.street || null,
      city: this.state.city || null,
      state: this.state.state || null,
      zipcode: this.state.zipcode || null,
      creditCardNum: this.state.creditCardNum || null,
      expiryDate: this.state.expiryDate || null,
      cvv: this.state.CVV || null,
      billZip: this.state.billCode || null
    }

    
    axios.post('/', purchase)
      .then(function(response){
       console.log('purchase posted'); // 
      
      })
      .catch(function(err){
        console.log('error: ',err);
      })
    
    this.setState({
      checkOutPage : true,
      personalInfo : false,
      shippingInfo : false,
      creditCardInfo : false,
      reviewPage : false,
      name: null,
      email: null,
      password: null,
      street: null,
      city: null,
      state: null,
      zipcode: null,
      creditCardNum: null,
      CVV: null,
      expiryDate : null,
      billZip: null
    })  


 }
  
  render() {
   

    return (
      <div>
        <CheckOut checkOutPage={this.state.checkOutPage} toPersonalInfo={this.toPersonalInfo.bind(this)} />
        <PersonalInfo personalInfo={this.state.personalInfo} 
          toShippingInfo={this.toShippingInfo.bind(this)}
          updateState={this.updateState.bind(this)}
        />
        <ShippingInfo shippingInfo={this.state.shippingInfo}
          toCCInfo={this.toCCInfo.bind(this)}
          updateState={this.updateState.bind(this)}
        />
        <CreditCardInfo creditCardInfo={this.state.creditCardInfo} 
          toReviewPage={this.toReviewPage.bind(this)}
          updateState={this.updateState.bind(this)}
        />
        <ReviewPage reviewPage={this.state.reviewPage} postRequest={this.postRequest.bind(this)}/>
      </div>
    )
  }

}


var CheckOut = function (props) {
  return (
    props.checkOutPage ? (
      <button type="button" onClick={props.toPersonalInfo}>Checkout</button >
    ) : (null)
  )
}

var PersonalInfo = function (props) {
  return (
    props.personalInfo ? (
      <form action="../server.js" method="post">
        Name <input type="text" name="name" onChange={props.updateState}/> <br/>
        Email <input type="email" name="email" onChange={props.updateState}/> <br/>
        Password <input type="text" name="password" onChange={props.updateState}/><br/>
        <button type="button" onClick={props.toShippingInfo}>Next</button >
      </form>
    ) : (null)
  )
}

var ShippingInfo = function(props) {
  return (
    props.shippingInfo ? (
      <form action="../server.js" method="post">
        Street <input type="text" name="street" onChange={props.updateState}/> <br/>
        City <input type="text" name="city" onChange={props.updateState}/> <br/>
        State <input type="text" name="state" onChange={props.updateState}/> <br/>
        Zip Code <input type="text" name="zipcode" onChange={props.updateState}/><br/>
        <button type="button" onClick={props.toCCInfo}>Next</button >
      </form>
    ) : (null)
  )
}

var CreditCardInfo = function (props) {
  return (
    props.creditCardInfo ? (
      <form action="../server.js" method="post">
        Credit Card number <input type="text" name="creditCardNum" onChange={props.updateState}/> <br/>
        Expiration date <input type="text" name="expiryDate" onChange={props.updateState}/> <br/>
        CVV <input type="text" name="CVV" onChange={props.updateState}/> <br/>
        Billing Zip Code <input type="text" name="billCode" onChange={props.updateState}/><br/>
        <button type="button" onClick={props.toReviewPage}>Next</button >
      </form>
    ) : (null)
  )
}


var ReviewPage = function (props) {
  return (
    props.reviewPage ? (
    <div>Review Transaction Information
    <button onClick={props.postRequest}>Complete Purchase</button>
    </div>
    ) : (null)
  )
}
    


ReactDOM.render(
  <App />,
  document.getElementById('app')
);

