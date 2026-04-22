# Compound Component Design Pattern

## Overview
The Compound Component Pattern is a React design pattern where a parent component
works together with multiple related child components. These child components
share state and behavior provided by the parent instead of relying on many props.

This pattern helps create flexible, readable, and scalable component APIs.

---

## Why Use This Pattern
- Improves readability of JSX
- Avoids large components with many props
- Encourages better separation of concerns
- Makes components easier to extend
- Provides a better developer experience

---

## Basic Concept
A parent component exposes related child components as static properties.

Example:
```jsx
<Modal>
  <Modal.Header />
  <Modal.Body />
  <Modal.Footer />
</Modal>
```

## Task
- Build a simple card component using this pattern, your card should have <Card.Header>, <Card.Body>, <Card.Footer>.
- Make a <Card.Image>. Try using it in a few different ways to see how clean the code looks compared to a giant card with 10 props.
- create a Tab Component Using this pattern.

# Pattern - 2 - (Render Props Pattern)
## Overview
The Render Props Pattern is a React design pattern where a component takes a function as a prop and calls that function with its internal state or data, allowing the parent component to control the rendering.

## Syntax
```jsx
<MyComponent render={(state) => (
  <p>{state.value}</p>
)} />
```