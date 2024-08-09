# Components

- [ButtonText](#buttontext)
- [MySelect](#myselect)
- [MyDatePicker](#mydatepicker)
- [MyDateRangePicker](#mydaterangepicker)
- [PrimaryCardItem](#primarycarditem)
- [Card](#card)
- [Item](#item)
- [TextBetweenView](#textbetweenview)
- [MySpin](#myspin)
- [MyTree](#mytree)
- [MyCheckBox](#mycheckbox)

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

`MyDatePicker` to select a date.

## When to use

By clicking the input box, use can select a date form a popup calenda.

## Usage Pattern

Here is an example of how to use `MyDatePicker` in your React Native app:

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

# MyDateRangePicker

`MyDateRangePicker` to select a date range

## Usage Pattern

Here is an example of how to use `MyDateRangePicker` in your React Native app:

```tsx
import React from 'react';
import MyDateRangePicker from './MyDateRangePicker'; // Make sure that path is

const App = () => {
  const [date, setDate] = useState<any>([new Date(), new Date()]);

  return <MyDateRangePicker value={date} placeholder="- - -" />;
};

export default App;
```

## Reference

## Props

### Inherits `MyDateRangePickerProps`

### `value`

- **Type**: `[any, any]`
- **Required**: false

# PrimaryCardItem

`PrimaryCardItem` is a container for display information.

## When to use

`PrimaryCardItem` can be uesed display content relate to a singer subject. The content can consist of multiple element of varying types and sizes. But no title.

## Usage Pattern

Here is an example of how to use `PrimaryCardItem` in your React Native app:

```tsx
import React from 'react';
import PrimaryCardItem from './PrimaryCardItem'; // Make sure that path is

const App = () => {
  return (
    <PrimaryCardItem bgColor="#000">
      <Text>Example</Text>
    </PrimaryCardItem>
  );
};

export default App;
```

## Reference

## Props

### `gap`

- **Type**: `number`
- **Default**: 4

### `padding`

- **Type**: `number`
- **Default**: 8

### `layout`

- **Type**: `row` or `colunm`
- **Description**: Layout items in the card
- **Default**: `row`

### `bgColor`

- **Type**: `string`
- **Description**: Background color of card

### `children`

- **Type**: `ReactNode`
- **Description**: child element
- **Required**: true

# Card

`Card` is a container for displaying information.

## When to use

A card can be used to display content related to a single subject. The content can consist of multiple element of varying types and sizes.

## Usage Pattern

Here is an example of how to use `Card` in your React Native app:

```tsx
import React from 'react';
import Card from './Card'; // Make sure that path is

const App = () => {
  return (
    <Card tiltle="My card">
      <Text>Example</Text>
    </Card>
  );
};

export default App;
```

## Reference

## Props

### `title`

- **Type**: `string`
- **Description**: Title of the card
- **Required**: `false`

### `mode`

- **Type**: `light` or `dark`
- **Description**: Card title background color.
- **Default**: `dark`

### `children`

- **Type**: `ReactNode`
- **Description**: Child element

# Item

`Item` is for display basic text including label and value.

## When to use

When you need to display a value and its label.

## Usage Pattern

Here is an example of how to use `Item` in your React Native app:

```tsx
import React from 'react';
import Item from './Item'; // Make sure that path is

const App = () => {
  return <Item label="Weather" value="26C" />;
};

export default App;
```

## Reference

## Props

### `mode`

- **Type**: `light` or `dark`
- **Description**: Item background color
- **Default**: `light`

### `lable`

- **Type**: `string`
- **Required**: `true`

### `value`

- **Type**: `string`
- **Required**: `false`

### `paddingHorizontal`

- **Type**: `number`
- **Default**: 0

### `backgroundColor`

- **Type**: `string`
- **Description**: Item background color
- **Default**: `transparent`

# TextBetweenView

`TextBetweenView` is used to display text and a value or an alert on a row.

## When to use

When you need to display a row of text and value or an alert with or without a bottom border.

## Usage Pattern

Here is example of how to use `TextBetweenView` in your React Native app:

```tsx
import React from 'react';
import TextBetweenView from './TextBetweenView'; // Make sure that path is

const App = () => {
  return <TextBetweenView leftText="Weather" rightText="26C" />;
};

export default App;
```

## Referen

## Props

### `type`

- **Type**: `primary` or `alert`
- **Default**: `primary`

### `leftText`

- **Type**: `string`
- **Discription**: Text displayed on the left.
- **Required**: `true`

### `rightText`

- **Type**: `string`
- **Discription**: Text displayed on the right.
- **Required**: `false`

### `paddingHorizontal`

- **Type**: `number`
- **Default**: 0

### `backgroundColor`

- **Type**: `string`
- **Default**: `transparent`

### `borderBottom`

- **Type**: `boolean`
- **Default**: `true`

### `color`

- **Type**: `primary` or `secondary`
- **Default**: `primary`

# MySpin

Used for the loading status of a page or a block.

## When to use

When part of the page is waiting for asynchronous data or during a rendering process, an appropriate loading animation can effectively alleviate useer's inquietude.

## Usage Pattern

Here is example of how to use `MySpin` in your React Native app:

```tsx
import React from 'react';
import MySpin from './MySpin'; // Make sure that path is

const App = () => {
  return <MySpin />;
};

export default App;
```

## Referen

## Props

### `size`

- **Type**: `small` or `large`
- **Default**: `small`

### `color`

- **Type**: `string`
- **Default**: `#fff`

# MyTree

Multiple-level structure list.

## When to use

Almost anything can be represented in tree structure. Example include directories, countries, organization hỉerarchy, etc.The `MyTree` component is a way of representeding the hierachial relationship between these things. You can also expand, collapse and select a treeNode within a Tree.

## Usage Pattern

Here is example of how to use `MyTree` in your React Native app:

```tsx
const treeData: ITree[] = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 4,
    name: 'Leviton',
    children: [
      {
        id: 5,
        name: 'PRS office Vietnam',
        children: [
          {
            id: 6,
            name: 'Child 4',
            children: [
              {
                id: 8,
                name: 'Child 5',
              },
            ],
          },
        ],
      },
      {
        id: 5,
        name: 'PRS office Vietnam',
        children: [
          {
            id: 6,
            name: 'Child 4',
            children: [
              {
                id: 8,
                name: 'Child 5',
              },
            ],
          },
        ],
      },
      {
        id: 5,
        name: 'PRS office Vietnam',
        children: [
          {
            id: 6,
            name: 'Child 4',
            children: [
              {
                id: 8,
                name: 'Child 5',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 9,
    name: 'NW',
    children: [
      {
        id: 10,
        name: 'ACRA Investments, Inc.',
      },
      {
        id: 11,
        name: 'ACRA Investments, Inc.',
      },
      {
        id: 14,
        name: 'ACRA Investments, Inc.',
      },
    ],
  },
];

import React from 'react';
import MyTree from './MyTree'; // Make sure path that is correct

const App = () => {
  return <MyTree data={treeData} />;
};

export default App;
```

## Reference

## Props

### `data`

- **Type**: `ITree[]`
- **Required**: `true`

### `onChecked`

- **Type**: `Func(checked: boolean, value?: any) => void`
- **Desrciption**: Callback function for when the user click a treeNode.

# MyCheckBox

Collect user's choices.

## When to use

- Used for selecting multiple values from several options.
- If you use only one checkbox, it is the same as using `MySwicth` to toggle beween to states. The difference is that `MySwicth` will trigger the state change directly, but `MyCheckBox` just marks the state changed and this needs to be submitted.

## Usage Pattern

Here is example of how to use `MyCheckBox` in your React Native app:

```tsx
import React from 'react';
import MyCheckBox from './MyCheckBox'; // Make sure path that is correct

const App = () => {
  return <MyCheckBox value={1} />;
};

export default App;
```

## Referen

## Props

### `value`

- **Type**: `any`
- **Description**: Used for setting the currently selected value

### `checked`

- **Type**: `boolean`
- **Description**: Specifies whether the checkbox is selected.

### `iconSize`

- **Type**: `number`
- **Default**: 10

### `checkBoxStyle`

- **Type**: `ViewStyle`

### `onChecked`

- **Type**: `Func(checked: boolean, value?: any) => void`
- **Description**: The callback function that is triggered when the state changes.
