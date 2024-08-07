# ButtonText Component

`ButtonText` is a simple commponent that allows you to create buttons with custom sized text. This is a usefuly component when you need to display buttons with styled text that fits your design.

## Usage Pattern

Here is an example of how to use `ButtonText` in your React app:

```jsx
import React from 'react';
import ButtonText from './ButtonText'; // Make sure that path is

const App = () => {
  return (
    <div>
      <ButtonText text="Click Me" size="18px" />
      <ButtonText text="Submit" />
      <ButtonText text="Cancel" size="14px" />
    </div>
  );
};

export default App;
```

## Reference

## Props

### `text`

- **Type**: `string`
- **Description**: The text you want to display on the button.
- **Required**: true

### `textSize`

- **Type**: `number` (CSS font-size value, Example: `'14px'`, `'1em'`, `'1.5rem'`, etc.)
- **Description**: Size of text on button.
- **Required**: false
- **Default**: `'14px'` (if not specified)

### `onPress`

- **Type**: `Function`
- **Description**: Called when the touch is released, but not if cancelled (e.g by scroll that
  steals the responder lock). The first function argument is an event in form of PressEvent.

### `textStyle`

- **Type**: `TextStyle`

### `touchableOpacityStyles`

- **Type**: `ViewStyle`

### `touchableOpacityProps`

- **Type**: `TouchableOpacityProps`

### `textProps`

- **Type**: `TextProps`
