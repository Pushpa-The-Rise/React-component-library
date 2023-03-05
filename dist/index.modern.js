import React from 'react';

const Button = () => {
  const [count, setCount] = React.useState(0);
  const onCount = () => {
    setCount(count + 1);
  };
  const onMinues = () => {
    setCount(count - 1);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: onCount
  }, "Add"), /*#__PURE__*/React.createElement("h1", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: onMinues
  }, "Minus"));
};

const Test = () => {
  const refText = React.useRef();
  const handleClick = () => {
    refText.current.innerHTML = 'Milan';
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    ref: refText
  }, "Sachani"), /*#__PURE__*/React.createElement("button", {
    onClick: handleClick
  }, "Click Me!"));
};

var styles_module = {"test":"_styles-module__test__3ybTi"};

export { Button, Test, styles_module as styles };
//# sourceMappingURL=index.modern.js.map
