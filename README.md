# Reflection Preview Formatting Fix

## Issue Description

The reflection preview component collapses line breaks and multiple consecutive spaces, causing multiline raw text to render as a single continuous line.

**Text content example**

```ts
const reflectionText = `I learned about: 
1. how to use adjective and noun: A-なN ですね / A-いN 
    Example: きれいな公園ですね / ひろい公園ですね.
2. how to read road sign or even stall/shop sign.

Also I learned new words like:
- 高い / たかい = high
- 低い / ひくい = low
`;
```

**Actual Behavior**

Formatting is stripped during rendering:

```txt
I learned about: 1. how to use adjective and noun: A-なN ですね / A-いN Example: きれいな公園ですね / ひろい公園ですね. 2. how to read road sign or even stall/shop sign. Also I learned new words like: - 高い / たかい = high - 低い / ひくい = low
```

## Solution

Applied `whiteSpace: 'pre-wrap'` to the Material UI `<Typography>` component via the `sx` prop to preserve whitespace and newline characters.

```tsx
<Typography 'pre-wrap' sx="{{" variant="body2" whiteSpace: }}>
  {reflectionText}
</Typography>
```

## Live Demo

View the live preview on GitHub Pages:

[https://iyanarmanda-forks.github.io/fo/](https://iyanarmanda-forks.github.io/fo/)

## Contact

GitHub: [iyanarmanda](https://github.com/iyanarmanda)

