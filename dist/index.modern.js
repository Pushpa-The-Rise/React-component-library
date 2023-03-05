import React from 'react';

var Button = function Button() {
  var _React$useState = React.useState(0),
    count = _React$useState[0],
    setCount = _React$useState[1];
  var onCount = function onCount() {
    setCount(count + 1);
  };
  var onMinues = function onMinues() {
    setCount(count - 1);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: onCount
  }, "Add"), /*#__PURE__*/React.createElement("h1", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: onMinues
  }, "Minus"));
};

var Test = function Test() {
  var refText = React.useRef();
  var handleClick = function handleClick() {
    refText.current.innerHTML = 'Milan';
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    ref: refText
  }, "Sachani"), /*#__PURE__*/React.createElement("button", {
    onClick: handleClick
  }, "Click Me!"));
};

var styles_module = {"test":"_3ybTi"};

export { Button, Test, styles_module as styles };
//# sourceMappingURL=index.modern.js.map
