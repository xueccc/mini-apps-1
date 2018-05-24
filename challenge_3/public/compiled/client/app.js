"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import React from 'react';
// import ReactDOM from 'react-dom';


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
      name: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: "toPersonalInfo",
    value: function toPersonalInfo() {
      this.setState({
        checkOutPage: false,
        personalInfo: true
      });
    }
  }, {
    key: "toShippingInfo",
    value: function toShippingInfo() {
      this.setState({
        personalInfo: false,
        shippingInfo: true
      });
    }
  }, {
    key: "toCCInfo",
    value: function toCCInfo() {
      this.setState({
        shippingInfo: false,
        creditCardInfo: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var isCheckOut = this.state.checkOutPage;
      var checkOut = isCheckOut ? React.createElement(
        "button",
        { type: "button", onClick: this.toPersonalInfo.bind(this) },
        "Checkout"
      ) : null;

      var personalInfo = this.state.personalInfo ? React.createElement(
        "form",
        { action: "../server.js", method: "post" },
        "Name ",
        React.createElement("input", { type: "text", name: "name", onChange: function onChange(e) {
            _this2.setState({ name: e.target.value });
          } }),
        " ",
        React.createElement("br", null),
        "Email ",
        React.createElement("input", { type: "email", name: "email" }),
        " ",
        React.createElement("br", null),
        "Password ",
        React.createElement("input", { type: "text", name: "password" }),
        React.createElement("br", null),
        React.createElement(
          "button",
          { type: "button", onClick: this.toShippingInfo.bind(this) },
          "Next"
        )
      ) : null;

      var shippingInfo = this.state.shippingInfo ? React.createElement(
        "form",
        { action: "../server.js", method: "post" },
        "Street ",
        React.createElement("input", { type: "text", name: "street" }),
        " ",
        React.createElement("br", null),
        "City ",
        React.createElement("input", { type: "text", name: "city" }),
        " ",
        React.createElement("br", null),
        "State ",
        React.createElement("input", { type: "text", name: "state" }),
        " ",
        React.createElement("br", null),
        "Zip Code ",
        React.createElement("input", { type: "text", name: "zipcode" }),
        React.createElement("br", null),
        React.createElement(
          "button",
          { type: "button", onClick: this.toCCInfo.bind(this) },
          "Next"
        )
      ) : null;

      var creditCardInfo = this.state.creditCardInfo ? React.createElement(
        "form",
        { action: "../server.js", method: "post" },
        "Credit Card number ",
        React.createElement("input", { type: "text", name: "creditCardNum" }),
        " ",
        React.createElement("br", null),
        "Expiration date ",
        React.createElement("input", { type: "text", name: "expiryDate" }),
        " ",
        React.createElement("br", null),
        "CVV ",
        React.createElement("input", { type: "text", name: "CVV" }),
        " ",
        React.createElement("br", null),
        "Billing Zip Code ",
        React.createElement("input", { type: "text", name: "bZipCode" }),
        React.createElement("br", null),
        React.createElement(
          "button",
          { type: "button" },
          "Next"
        )
      ) : null;

      return React.createElement(
        "div",
        null,
        checkOut,
        personalInfo,
        shippingInfo,
        creditCardInfo
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJjaGVja091dFBhZ2UiLCJwZXJzb25hbEluZm8iLCJzaGlwcGluZ0luZm8iLCJjcmVkaXRDYXJkSW5mbyIsIm5hbWUiLCJzZXRTdGF0ZSIsImlzQ2hlY2tPdXQiLCJjaGVja091dCIsInRvUGVyc29uYWxJbmZvIiwiYmluZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvU2hpcHBpbmdJbmZvIiwidG9DQ0luZm8iLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztJQUdNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxvQkFBZSxJQURKO0FBRVhDLG9CQUFlLEtBRko7QUFHWEMsb0JBQWUsS0FISjtBQUlYQyxzQkFBaUIsS0FKTjtBQUtYQyxZQUFLO0FBTE0sS0FBYjtBQUZpQjtBQVNsQjs7OztxQ0FFZ0I7QUFDZixXQUFLQyxRQUFMLENBQWU7QUFDYkwsc0JBQWMsS0FERDtBQUViQyxzQkFBYztBQUZELE9BQWY7QUFJRDs7O3FDQUVnQjtBQUNmLFdBQUtJLFFBQUwsQ0FBZTtBQUNiSixzQkFBYyxLQUREO0FBRWJDLHNCQUFlO0FBRkYsT0FBZjtBQUlEOzs7K0JBRVU7QUFDVCxXQUFLRyxRQUFMLENBQWU7QUFDYkgsc0JBQWUsS0FERjtBQUViQyx3QkFBaUI7QUFGSixPQUFmO0FBSUQ7Ozs2QkFHUTtBQUFBOztBQUNQLFVBQUlHLGFBQWEsS0FBS1AsS0FBTCxDQUFXQyxZQUE1QjtBQUNBLFVBQUlPLFdBQVdELGFBQ2I7QUFBQTtBQUFBLFVBQVEsTUFBSyxRQUFiLEVBQXNCLFNBQVMsS0FBS0UsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBL0I7QUFBQTtBQUFBLE9BRGEsR0FFVixJQUZMOztBQUlBLFVBQUlSLGVBQWUsS0FBS0YsS0FBTCxDQUFXRSxZQUFYLEdBQ2pCO0FBQUE7QUFBQSxVQUFNLFFBQU8sY0FBYixFQUE0QixRQUFPLE1BQW5DO0FBQUE7QUFDTyx1Q0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxNQUF4QixFQUErQixVQUFVLGtCQUFDUyxDQUFELEVBQUs7QUFBQyxtQkFBS0wsUUFBTCxDQUFjLEVBQUNELE1BQU9NLEVBQUVDLE1BQUYsQ0FBU0MsS0FBakIsRUFBZDtBQUF1QyxXQUF0RixHQURQO0FBQUE7QUFDaUcsdUNBRGpHO0FBQUE7QUFFUSx1Q0FBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxPQUF6QixHQUZSO0FBQUE7QUFFNEMsdUNBRjVDO0FBQUE7QUFHVyx1Q0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxVQUF4QixHQUhYO0FBRytDLHVDQUgvQztBQUlFO0FBQUE7QUFBQSxZQUFRLE1BQUssUUFBYixFQUFzQixTQUFTLEtBQUtDLGNBQUwsQ0FBb0JKLElBQXBCLENBQXlCLElBQXpCLENBQS9CO0FBQUE7QUFBQTtBQUpGLE9BRGlCLEdBT2QsSUFQTDs7QUFVQSxVQUFJUCxlQUFlLEtBQUtILEtBQUwsQ0FBV0csWUFBWCxHQUNqQjtBQUFBO0FBQUEsVUFBTSxRQUFPLGNBQWIsRUFBNEIsUUFBTyxNQUFuQztBQUFBO0FBQ1MsdUNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssUUFBeEIsR0FEVDtBQUFBO0FBQzRDLHVDQUQ1QztBQUFBO0FBRU8sdUNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEIsR0FGUDtBQUFBO0FBRXdDLHVDQUZ4QztBQUFBO0FBR1EsdUNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssT0FBeEIsR0FIUjtBQUFBO0FBRzBDLHVDQUgxQztBQUFBO0FBSVcsdUNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssU0FBeEIsR0FKWDtBQUk4Qyx1Q0FKOUM7QUFLRTtBQUFBO0FBQUEsWUFBUSxNQUFLLFFBQWIsRUFBc0IsU0FBUyxLQUFLWSxRQUFMLENBQWNMLElBQWQsQ0FBbUIsSUFBbkIsQ0FBL0I7QUFBQTtBQUFBO0FBTEYsT0FEaUIsR0FRZCxJQVJMOztBQVVBLFVBQUlOLGlCQUFpQixLQUFLSixLQUFMLENBQVdJLGNBQVgsR0FDbkI7QUFBQTtBQUFBLFVBQU0sUUFBTyxjQUFiLEVBQTRCLFFBQU8sTUFBbkM7QUFBQTtBQUNxQix1Q0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxlQUF4QixHQURyQjtBQUFBO0FBQytELHVDQUQvRDtBQUFBO0FBRWtCLHVDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLFlBQXhCLEdBRmxCO0FBQUE7QUFFeUQsdUNBRnpEO0FBQUE7QUFHTSx1Q0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxLQUF4QixHQUhOO0FBQUE7QUFHc0MsdUNBSHRDO0FBQUE7QUFJbUIsdUNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssVUFBeEIsR0FKbkI7QUFJdUQsdUNBSnZEO0FBS0U7QUFBQTtBQUFBLFlBQVEsTUFBSyxRQUFiO0FBQUE7QUFBQTtBQUxGLE9BRG1CLEdBUWhCLElBUkw7O0FBV0EsYUFDRTtBQUFBO0FBQUE7QUFDR0ksZ0JBREg7QUFFR04sb0JBRkg7QUFHR0Msb0JBSEg7QUFJR0M7QUFKSCxPQURGO0FBUUQ7Ozs7RUEvRWVZLE1BQU1DLFM7O0FBNEZ4QkMsU0FBU0MsTUFBVCxDQUNFLG9CQUFDLEdBQUQsT0FERixFQUVFQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBRkYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjaGVja091dFBhZ2UgOiB0cnVlLFxuICAgICAgcGVyc29uYWxJbmZvIDogZmFsc2UsXG4gICAgICBzaGlwcGluZ0luZm8gOiBmYWxzZSxcbiAgICAgIGNyZWRpdENhcmRJbmZvIDogZmFsc2UsXG4gICAgICBuYW1lOicnXG4gICAgfTtcbiAgfVxuXG4gIHRvUGVyc29uYWxJbmZvKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoIHtcbiAgICAgIGNoZWNrT3V0UGFnZTogZmFsc2UsXG4gICAgICBwZXJzb25hbEluZm86IHRydWVcbiAgICB9KVxuICB9XG4gIFxuICB0b1NoaXBwaW5nSW5mbygpIHtcbiAgICB0aGlzLnNldFN0YXRlKCB7XG4gICAgICBwZXJzb25hbEluZm86IGZhbHNlLFxuICAgICAgc2hpcHBpbmdJbmZvIDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICB0b0NDSW5mbygpIHtcbiAgICB0aGlzLnNldFN0YXRlKCB7XG4gICAgICBzaGlwcGluZ0luZm8gOiBmYWxzZSxcbiAgICAgIGNyZWRpdENhcmRJbmZvIDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgaXNDaGVja091dCA9IHRoaXMuc3RhdGUuY2hlY2tPdXRQYWdlO1xuICAgIHZhciBjaGVja091dCA9IGlzQ2hlY2tPdXQgPyAoXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLnRvUGVyc29uYWxJbmZvLmJpbmQodGhpcyl9PkNoZWNrb3V0PC9idXR0b24gPlxuICAgICkgOiAobnVsbCk7XG5cbiAgICB2YXIgcGVyc29uYWxJbmZvID0gdGhpcy5zdGF0ZS5wZXJzb25hbEluZm8gPyAoXG4gICAgICA8Zm9ybSBhY3Rpb249XCIuLi9zZXJ2ZXIuanNcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgIE5hbWUgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17KGUpPT57dGhpcy5zZXRTdGF0ZSh7bmFtZSA6IGUudGFyZ2V0LnZhbHVlfSl9fS8+IDxici8+XG4gICAgICAgIEVtYWlsIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiAvPiA8YnIvPlxuICAgICAgICBQYXNzd29yZCA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIi8+PGJyLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy50b1NoaXBwaW5nSW5mby5iaW5kKHRoaXMpfT5OZXh0PC9idXR0b24gPlxuICAgICAgPC9mb3JtPlxuICAgICkgOiAobnVsbCk7XG5cbiAgICBcbiAgICB2YXIgc2hpcHBpbmdJbmZvID0gdGhpcy5zdGF0ZS5zaGlwcGluZ0luZm8gPyAoXG4gICAgICA8Zm9ybSBhY3Rpb249XCIuLi9zZXJ2ZXIuanNcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgIFN0cmVldCA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3RyZWV0XCIvPiA8YnIvPlxuICAgICAgICBDaXR5IDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIvPiA8YnIvPlxuICAgICAgICBTdGF0ZSA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3RhdGVcIi8+IDxici8+XG4gICAgICAgIFppcCBDb2RlIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ6aXBjb2RlXCIvPjxici8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMudG9DQ0luZm8uYmluZCh0aGlzKX0+TmV4dDwvYnV0dG9uID5cbiAgICAgIDwvZm9ybT5cbiAgICApIDogKG51bGwpO1xuICAgIFxuICAgIHZhciBjcmVkaXRDYXJkSW5mbyA9IHRoaXMuc3RhdGUuY3JlZGl0Q2FyZEluZm8gPyAoXG4gICAgICA8Zm9ybSBhY3Rpb249XCIuLi9zZXJ2ZXIuanNcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgIENyZWRpdCBDYXJkIG51bWJlciA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY3JlZGl0Q2FyZE51bVwiLz4gPGJyLz5cbiAgICAgICAgRXhwaXJhdGlvbiBkYXRlIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJleHBpcnlEYXRlXCIvPiA8YnIvPlxuICAgICAgICBDVlYgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIkNWVlwiLz4gPGJyLz5cbiAgICAgICAgQmlsbGluZyBaaXAgQ29kZSA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYlppcENvZGVcIi8+PGJyLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+TmV4dDwvYnV0dG9uID5cbiAgICAgIDwvZm9ybT5cbiAgICApIDogKG51bGwpO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge2NoZWNrT3V0fVxuICAgICAgICB7cGVyc29uYWxJbmZvfVxuICAgICAgICB7c2hpcHBpbmdJbmZvfVxuICAgICAgICB7Y3JlZGl0Q2FyZEluZm99XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxufVxuXG5cblxuXG5cblxuXG5cblxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKTtcblxuIl19