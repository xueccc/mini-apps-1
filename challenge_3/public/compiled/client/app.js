'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      checkOutPage: true,
      personalInfo: false,
      shippingInfo: false,
      creditCardInfo: false,
      reviewPage: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'toPersonalInfo',
    value: function toPersonalInfo() {
      this.setState({
        checkOutPage: false,
        personalInfo: true
      });
    }
  }, {
    key: 'toShippingInfo',
    value: function toShippingInfo() {
      this.setState({
        personalInfo: false,
        shippingInfo: true
      });
    }
  }, {
    key: 'toCCInfo',
    value: function toCCInfo() {
      this.setState({
        shippingInfo: false,
        creditCardInfo: true
      });
    }
  }, {
    key: 'toReviewPage',
    value: function toReviewPage() {
      this.setState({
        creditCardInfo: false,
        reviewPage: true
      });
    }
  }, {
    key: 'updateState',
    value: function updateState(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: 'postRequest',
    value: function postRequest() {
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
      };

      axios.post('/', purchase).then(function (response) {
        console.log('purchase posted'); // 
      }).catch(function (err) {
        console.log('error: ', err);
      });

      this.setState({
        checkOutPage: true,
        personalInfo: false,
        shippingInfo: false,
        creditCardInfo: false,
        reviewPage: false,
        name: null,
        email: null,
        password: null,
        street: null,
        city: null,
        state: null,
        zipcode: null,
        creditCardNum: null,
        CVV: null,
        expiryDate: null,
        billZip: null
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return React.createElement(
        'div',
        null,
        React.createElement(CheckOut, { checkOutPage: this.state.checkOutPage, toPersonalInfo: this.toPersonalInfo.bind(this) }),
        React.createElement(PersonalInfo, { personalInfo: this.state.personalInfo,
          toShippingInfo: this.toShippingInfo.bind(this),
          updateState: this.updateState.bind(this)
        }),
        React.createElement(ShippingInfo, { shippingInfo: this.state.shippingInfo,
          toCCInfo: this.toCCInfo.bind(this),
          updateState: this.updateState.bind(this)
        }),
        React.createElement(CreditCardInfo, { creditCardInfo: this.state.creditCardInfo,
          toReviewPage: this.toReviewPage.bind(this),
          updateState: this.updateState.bind(this)
        }),
        React.createElement(ReviewPage, { reviewPage: this.state.reviewPage, postRequest: this.postRequest.bind(this) })
      );
    }
  }]);

  return App;
}(React.Component);

var CheckOut = function CheckOut(props) {
  return props.checkOutPage ? React.createElement(
    'button',
    { type: 'button', onClick: props.toPersonalInfo },
    'Checkout'
  ) : null;
};

var PersonalInfo = function PersonalInfo(props) {
  return props.personalInfo ? React.createElement(
    'form',
    { action: '../server.js', method: 'post' },
    'Name ',
    React.createElement('input', { type: 'text', name: 'name', onChange: props.updateState }),
    ' ',
    React.createElement('br', null),
    'Email ',
    React.createElement('input', { type: 'email', name: 'email', onChange: props.updateState }),
    ' ',
    React.createElement('br', null),
    'Password ',
    React.createElement('input', { type: 'text', name: 'password', onChange: props.updateState }),
    React.createElement('br', null),
    React.createElement(
      'button',
      { type: 'button', onClick: props.toShippingInfo },
      'Next'
    )
  ) : null;
};

var ShippingInfo = function ShippingInfo(props) {
  return props.shippingInfo ? React.createElement(
    'form',
    { action: '../server.js', method: 'post' },
    'Street ',
    React.createElement('input', { type: 'text', name: 'street', onChange: props.updateState }),
    ' ',
    React.createElement('br', null),
    'City ',
    React.createElement('input', { type: 'text', name: 'city', onChange: props.updateState }),
    ' ',
    React.createElement('br', null),
    'State ',
    React.createElement('input', { type: 'text', name: 'state', onChange: props.updateState }),
    ' ',
    React.createElement('br', null),
    'Zip Code ',
    React.createElement('input', { type: 'text', name: 'zipcode', onChange: props.updateState }),
    React.createElement('br', null),
    React.createElement(
      'button',
      { type: 'button', onClick: props.toCCInfo },
      'Next'
    )
  ) : null;
};

var CreditCardInfo = function CreditCardInfo(props) {
  return props.creditCardInfo ? React.createElement(
    'form',
    { action: '../server.js', method: 'post' },
    'Credit Card number ',
    React.createElement('input', { type: 'text', name: 'creditCardNum', onChange: props.updateState }),
    ' ',
    React.createElement('br', null),
    'Expiration date ',
    React.createElement('input', { type: 'text', name: 'expiryDate', onChange: props.updateState }),
    ' ',
    React.createElement('br', null),
    'CVV ',
    React.createElement('input', { type: 'text', name: 'CVV', onChange: props.updateState }),
    ' ',
    React.createElement('br', null),
    'Billing Zip Code ',
    React.createElement('input', { type: 'text', name: 'billCode', onChange: props.updateState }),
    React.createElement('br', null),
    React.createElement(
      'button',
      { type: 'button', onClick: props.toReviewPage },
      'Next'
    )
  ) : null;
};

var ReviewPage = function ReviewPage(props) {
  return props.reviewPage ? React.createElement(
    'div',
    null,
    'Review Transaction Information',
    React.createElement(
      'button',
      { onClick: props.postRequest },
      'Complete Purchase'
    )
  ) : null;
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJjaGVja091dFBhZ2UiLCJwZXJzb25hbEluZm8iLCJzaGlwcGluZ0luZm8iLCJjcmVkaXRDYXJkSW5mbyIsInJldmlld1BhZ2UiLCJzZXRTdGF0ZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJwdXJjaGFzZSIsImVtYWlsIiwicGFzc3dvcmQiLCJzdHJlZXQiLCJjaXR5IiwiemlwY29kZSIsImNyZWRpdENhcmROdW0iLCJleHBpcnlEYXRlIiwiY3Z2IiwiQ1ZWIiwiYmlsbFppcCIsImJpbGxDb2RlIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwidG9QZXJzb25hbEluZm8iLCJiaW5kIiwidG9TaGlwcGluZ0luZm8iLCJ1cGRhdGVTdGF0ZSIsInRvQ0NJbmZvIiwidG9SZXZpZXdQYWdlIiwicG9zdFJlcXVlc3QiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkNoZWNrT3V0IiwiUGVyc29uYWxJbmZvIiwiU2hpcHBpbmdJbmZvIiwiQ3JlZGl0Q2FyZEluZm8iLCJSZXZpZXdQYWdlIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFHTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsb0JBQWUsSUFESjtBQUVYQyxvQkFBZSxLQUZKO0FBR1hDLG9CQUFlLEtBSEo7QUFJWEMsc0JBQWlCLEtBSk47QUFLWEMsa0JBQWE7QUFMRixLQUFiO0FBRmlCO0FBU2xCOzs7O3FDQUVnQjtBQUNmLFdBQUtDLFFBQUwsQ0FBZTtBQUNiTCxzQkFBYyxLQUREO0FBRWJDLHNCQUFjO0FBRkQsT0FBZjtBQUlEOzs7cUNBRWdC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cUMsVUFBVW5DLE1BQU1tQyxXQUFyRCxHQUZsQjtBQUFBO0FBRXNGLG1DQUZ0RjtBQUFBO0FBR00sbUNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssS0FBeEIsRUFBOEIsVUFBVW5DLE1BQU1tQyxXQUE5QyxHQUhOO0FBQUE7QUFHbUUsbUNBSG5FO0FBQUE7QUFJbUIsbUNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssVUFBeEIsRUFBbUMsVUFBVW5DLE1BQU1tQyxXQUFuRCxHQUpuQjtBQUlvRixtQ0FKcEY7QUFLRTtBQUFBO0FBQUEsUUFBUSxNQUFLLFFBQWIsRUFBc0IsU0FBU25DLE1BQU1xQyxZQUFyQztBQUFBO0FBQUE7QUFMRixHQURGLEdBUUssSUFUUDtBQVdELENBWkQ7O0FBZUEsSUFBSVEsYUFBYSxTQUFiQSxVQUFhLENBQVU3QyxLQUFWLEVBQWlCO0FBQ2hDLFNBQ0VBLE1BQU1NLFVBQU4sR0FDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxRQUFRLFNBQVNOLE1BQU1zQyxXQUF2QjtBQUFBO0FBQUE7QUFEQSxHQURBLEdBSUssSUFMUDtBQU9ELENBUkQ7O0FBWUFRLFNBQVNDLE1BQVQsQ0FDRSxvQkFBQyxHQUFELE9BREYsRUFFRUMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUZGIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjaGVja091dFBhZ2UgOiB0cnVlLFxuICAgICAgcGVyc29uYWxJbmZvIDogZmFsc2UsXG4gICAgICBzaGlwcGluZ0luZm8gOiBmYWxzZSxcbiAgICAgIGNyZWRpdENhcmRJbmZvIDogZmFsc2UsXG4gICAgICByZXZpZXdQYWdlIDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgdG9QZXJzb25hbEluZm8oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSgge1xuICAgICAgY2hlY2tPdXRQYWdlOiBmYWxzZSxcbiAgICAgIHBlcnNvbmFsSW5mbzogdHJ1ZVxuICAgIH0pXG4gIH1cbiAgXG4gIHRvU2hpcHBpbmdJbmZvKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoIHtcbiAgICAgIHBlcnNvbmFsSW5mbzogZmFsc2UsXG4gICAgICBzaGlwcGluZ0luZm8gOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHRvQ0NJbmZvKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoIHtcbiAgICAgIHNoaXBwaW5nSW5mbyA6IGZhbHNlLFxuICAgICAgY3JlZGl0Q2FyZEluZm8gOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHRvUmV2aWV3UGFnZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKCB7XG4gICAgICBjcmVkaXRDYXJkSW5mbyA6IGZhbHNlLFxuICAgICAgcmV2aWV3UGFnZSA6IHRydWVcbiAgICB9KVxuICB9XG4gIFxuICB1cGRhdGVTdGF0ZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICBwb3N0UmVxdWVzdCgpe1xuICAgIHZhciBwdXJjaGFzZSA9IHtcbiAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSB8fCBudWxsLFxuICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwgfHwgbnVsbCxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkIHx8IG51bGwsXG4gICAgICBzdHJlZXQ6IHRoaXMuc3RhdGUuc3RyZWV0IHx8IG51bGwsXG4gICAgICBjaXR5OiB0aGlzLnN0YXRlLmNpdHkgfHwgbnVsbCxcbiAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLnN0YXRlIHx8IG51bGwsXG4gICAgICB6aXBjb2RlOiB0aGlzLnN0YXRlLnppcGNvZGUgfHwgbnVsbCxcbiAgICAgIGNyZWRpdENhcmROdW06IHRoaXMuc3RhdGUuY3JlZGl0Q2FyZE51bSB8fCBudWxsLFxuICAgICAgZXhwaXJ5RGF0ZTogdGhpcy5zdGF0ZS5leHBpcnlEYXRlIHx8IG51bGwsXG4gICAgICBjdnY6IHRoaXMuc3RhdGUuQ1ZWIHx8IG51bGwsXG4gICAgICBiaWxsWmlwOiB0aGlzLnN0YXRlLmJpbGxDb2RlIHx8IG51bGxcbiAgICB9XG5cbiAgICBcbiAgICBheGlvcy5wb3N0KCcvJywgcHVyY2hhc2UpXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgY29uc29sZS5sb2coJ3B1cmNoYXNlIHBvc3RlZCcpOyAvLyBcbiAgICAgIFxuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbihlcnIpe1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6ICcsZXJyKTtcbiAgICAgIH0pXG4gICAgXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjaGVja091dFBhZ2UgOiB0cnVlLFxuICAgICAgcGVyc29uYWxJbmZvIDogZmFsc2UsXG4gICAgICBzaGlwcGluZ0luZm8gOiBmYWxzZSxcbiAgICAgIGNyZWRpdENhcmRJbmZvIDogZmFsc2UsXG4gICAgICByZXZpZXdQYWdlIDogZmFsc2UsXG4gICAgICBuYW1lOiBudWxsLFxuICAgICAgZW1haWw6IG51bGwsXG4gICAgICBwYXNzd29yZDogbnVsbCxcbiAgICAgIHN0cmVldDogbnVsbCxcbiAgICAgIGNpdHk6IG51bGwsXG4gICAgICBzdGF0ZTogbnVsbCxcbiAgICAgIHppcGNvZGU6IG51bGwsXG4gICAgICBjcmVkaXRDYXJkTnVtOiBudWxsLFxuICAgICAgQ1ZWOiBudWxsLFxuICAgICAgZXhwaXJ5RGF0ZSA6IG51bGwsXG4gICAgICBiaWxsWmlwOiBudWxsXG4gICAgfSkgIFxuXG5cbiB9XG4gIFxuICByZW5kZXIoKSB7XG4gICBcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q2hlY2tPdXQgY2hlY2tPdXRQYWdlPXt0aGlzLnN0YXRlLmNoZWNrT3V0UGFnZX0gdG9QZXJzb25hbEluZm89e3RoaXMudG9QZXJzb25hbEluZm8uYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPFBlcnNvbmFsSW5mbyBwZXJzb25hbEluZm89e3RoaXMuc3RhdGUucGVyc29uYWxJbmZvfSBcbiAgICAgICAgICB0b1NoaXBwaW5nSW5mbz17dGhpcy50b1NoaXBwaW5nSW5mby5iaW5kKHRoaXMpfVxuICAgICAgICAgIHVwZGF0ZVN0YXRlPXt0aGlzLnVwZGF0ZVN0YXRlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICAgIDxTaGlwcGluZ0luZm8gc2hpcHBpbmdJbmZvPXt0aGlzLnN0YXRlLnNoaXBwaW5nSW5mb31cbiAgICAgICAgICB0b0NDSW5mbz17dGhpcy50b0NDSW5mby5iaW5kKHRoaXMpfVxuICAgICAgICAgIHVwZGF0ZVN0YXRlPXt0aGlzLnVwZGF0ZVN0YXRlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICAgIDxDcmVkaXRDYXJkSW5mbyBjcmVkaXRDYXJkSW5mbz17dGhpcy5zdGF0ZS5jcmVkaXRDYXJkSW5mb30gXG4gICAgICAgICAgdG9SZXZpZXdQYWdlPXt0aGlzLnRvUmV2aWV3UGFnZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIHVwZGF0ZVN0YXRlPXt0aGlzLnVwZGF0ZVN0YXRlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICAgIDxSZXZpZXdQYWdlIHJldmlld1BhZ2U9e3RoaXMuc3RhdGUucmV2aWV3UGFnZX0gcG9zdFJlcXVlc3Q9e3RoaXMucG9zdFJlcXVlc3QuYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cblxuXG52YXIgQ2hlY2tPdXQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICBwcm9wcy5jaGVja091dFBhZ2UgPyAoXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtwcm9wcy50b1BlcnNvbmFsSW5mb30+Q2hlY2tvdXQ8L2J1dHRvbiA+XG4gICAgKSA6IChudWxsKVxuICApXG59XG5cbnZhciBQZXJzb25hbEluZm8gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICBwcm9wcy5wZXJzb25hbEluZm8gPyAoXG4gICAgICA8Zm9ybSBhY3Rpb249XCIuLi9zZXJ2ZXIuanNcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgIE5hbWUgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17cHJvcHMudXBkYXRlU3RhdGV9Lz4gPGJyLz5cbiAgICAgICAgRW1haWwgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIG9uQ2hhbmdlPXtwcm9wcy51cGRhdGVTdGF0ZX0vPiA8YnIvPlxuICAgICAgICBQYXNzd29yZCA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17cHJvcHMudXBkYXRlU3RhdGV9Lz48YnIvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtwcm9wcy50b1NoaXBwaW5nSW5mb30+TmV4dDwvYnV0dG9uID5cbiAgICAgIDwvZm9ybT5cbiAgICApIDogKG51bGwpXG4gIClcbn1cblxudmFyIFNoaXBwaW5nSW5mbyA9IGZ1bmN0aW9uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgcHJvcHMuc2hpcHBpbmdJbmZvID8gKFxuICAgICAgPGZvcm0gYWN0aW9uPVwiLi4vc2VydmVyLmpzXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICBTdHJlZXQgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0cmVldFwiIG9uQ2hhbmdlPXtwcm9wcy51cGRhdGVTdGF0ZX0vPiA8YnIvPlxuICAgICAgICBDaXR5IDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgb25DaGFuZ2U9e3Byb3BzLnVwZGF0ZVN0YXRlfS8+IDxici8+XG4gICAgICAgIFN0YXRlIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdGF0ZVwiIG9uQ2hhbmdlPXtwcm9wcy51cGRhdGVTdGF0ZX0vPiA8YnIvPlxuICAgICAgICBaaXAgQ29kZSA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiemlwY29kZVwiIG9uQ2hhbmdlPXtwcm9wcy51cGRhdGVTdGF0ZX0vPjxici8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLnRvQ0NJbmZvfT5OZXh0PC9idXR0b24gPlxuICAgICAgPC9mb3JtPlxuICAgICkgOiAobnVsbClcbiAgKVxufVxuXG52YXIgQ3JlZGl0Q2FyZEluZm8gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICBwcm9wcy5jcmVkaXRDYXJkSW5mbyA/IChcbiAgICAgIDxmb3JtIGFjdGlvbj1cIi4uL3NlcnZlci5qc1wiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgQ3JlZGl0IENhcmQgbnVtYmVyIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjcmVkaXRDYXJkTnVtXCIgb25DaGFuZ2U9e3Byb3BzLnVwZGF0ZVN0YXRlfS8+IDxici8+XG4gICAgICAgIEV4cGlyYXRpb24gZGF0ZSA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZXhwaXJ5RGF0ZVwiIG9uQ2hhbmdlPXtwcm9wcy51cGRhdGVTdGF0ZX0vPiA8YnIvPlxuICAgICAgICBDVlYgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIkNWVlwiIG9uQ2hhbmdlPXtwcm9wcy51cGRhdGVTdGF0ZX0vPiA8YnIvPlxuICAgICAgICBCaWxsaW5nIFppcCBDb2RlIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJiaWxsQ29kZVwiIG9uQ2hhbmdlPXtwcm9wcy51cGRhdGVTdGF0ZX0vPjxici8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLnRvUmV2aWV3UGFnZX0+TmV4dDwvYnV0dG9uID5cbiAgICAgIDwvZm9ybT5cbiAgICApIDogKG51bGwpXG4gIClcbn1cblxuXG52YXIgUmV2aWV3UGFnZSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIHByb3BzLnJldmlld1BhZ2UgPyAoXG4gICAgPGRpdj5SZXZpZXcgVHJhbnNhY3Rpb24gSW5mb3JtYXRpb25cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLnBvc3RSZXF1ZXN0fT5Db21wbGV0ZSBQdXJjaGFzZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgICkgOiAobnVsbClcbiAgKVxufVxuICAgIFxuXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEFwcCAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pO1xuXG4iXX0=