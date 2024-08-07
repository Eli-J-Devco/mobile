# Components

- [ButtonText](#buttontext)
- [MySelect](#myselect)
- [MyDatePicker](#mydatepicker)

# ButtonText

`ButtonText` is a simple commponent that allows you to create buttons with custom sized text. This is a useful component when you need to display buttons with styled text that fits your design.

## Usage Pattern

Here is an example of how to use `ButtonText` in your React Navite app:

```jsx
import React from 'react';
import ButtonText from './ButtonText'; // Make sure that path is

const App = () => {
  return (
    <>
      <ButtonText text="Click Me" size="18px" />
      <ButtonText text="Submit" />
      <ButtonText text="Cancel" size="14px" />
    </>
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

- **Type**: `number` (CSS font-size value, Example: `'14'`, `'16'`, `'17'`, etc.)
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

# MySelect

`MySelect` is a simple component that allows you to create selects. This is a useful component when you need to display selects with a style that matches your design.

## Usage Pattern

Here is an example of how to use `MySelect` in your React Navite App:

```tsx
import React from 'react';
import MySelect from './MySelect'; // Make sure that path is

const App = () => {
  const [options, setOptions] = useState([
    {
      value: '1',
      label: 'Viet Nam',
    },
  ]);

  return <MySelect options={options} />;
};

export default App;
```

## Reference

## Props

### `lable`

- **Type**: `string`
- **Description**: The string that will be rendered on top of modal menu.

### `value`

- **Type**: `string` or `number`
- **Required**: true

### `placeholder`

- **Type**: `string`
- **Description**: The string that will be rendered before text value has been selected.

### `options`

- **Type**: `ISelectOption[]`
- **Description**: Select options
- **Required**: true

### `onChange`

- **Type**: `Function(value: string | number) => void`
- **Description**: Called when select an option or input value change

### `containerStyle`

- **Type**: `ViewStyle`

# MyDatePicker

## Usage Pattern

```tsx
import React from 'react';
import MyDatePicker from './MyDatePicker'; // Make sure that path is

const App = () => {
  const [date, setDate] = useState<any>(new Date());

  return <MyDatePicker value={date} placeholder="- - -" />;
};

export default App;
```

## Reference

## Props

### `value`

- **Type**: `DateTime`
- **Required**: false

### `placeholder`

- **Type**: `string`
- **Description**: The string that will be rendered before value has been selected.

### `onChange`

- **Type**: `Function(value: any) => void`
- **Description**: Called when the selected time is changing.

### `containerStyle`

- **Type**: `ViewStyle`
