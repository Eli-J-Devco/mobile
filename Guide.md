# ButtonText Component

`ButtonText` là một component đơn giản cho phép bạn tạo các nút với văn bản có kích thước tùy chỉnh. Đây là một component hữu ích khi bạn cần hiển thị các nút với văn bản có kiểu dáng phù hợp với thiết kế của bạn.

## Props

### `text`

- **Type**: `string`
- **Description**: Văn bản mà bạn muốn hiển thị trên nút.
- **Required**: Có

### `size`

- **Type**: `string` (CSS font-size value, ví dụ: `'14px'`, `'1em'`, `'1.5rem'`, etc.)
- **Description**: Kích thước của văn bản trên nút.
- **Required**: Không
- **Default**: `'16px'` (nếu không được chỉ định)

## Cách Sử Dụng

Dưới đây là một ví dụ về cách sử dụng `ButtonText` trong ứng dụng React của bạn:

```jsx
import React from 'react';
import ButtonText from './ButtonText'; // Đảm bảo đường dẫn chính xác

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
