# Render Props Pattern in React

This video tutorial explores the **Render Props design pattern in React**, focusing on its purpose, implementation, advantages, limitations, and modern alternatives.

The Render Props pattern is primarily used for **sharing logic between components without duplicating code**, especially before the introduction of **React Hooks**.

---

## Core Concepts and Problem Statement

### Problem
- Duplication of logic across components (e.g., mouse position tracking in both Car and Bike components).
- Two components, `CarTracker` and `BikeTracker`, both implement the same mouse tracking logic independently.
- Each component manages its own local state for mouse position and renders distinct JSX (car or bike).
- This duplication is a common **code smell** and should be avoided using better design patterns.

---

## What is Render Props?

- A **render prop** is a prop whose value is a **function that returns JSX**.
- This pattern allows a component to:
  - Share reusable logic internally (the **how**)
  - Let the consumer control what to render (the **what**)
- The component providing the logic (e.g., mouse tracking) receives a function via a prop and invokes it to render JSX dynamically.
- This approach **decouples logic from UI**, enabling reuse across different components with varying render outputs.

---

## Implementation Overview
### Messy Way
- Separate `CarTracker.jsx` and `BikeTracker.jsx` components each implement identical mouse tracking logic independently.
- Leads to unnecessary code duplication and maintenance issues.

---

### Refactoring with Render Props

Create a single `MouseTracker` component that manages the shared logic:

- State for mouse position (`x`, `y`)
- `handleMouseMove` event handler
- Accepts a render prop (a function) that receives the current mouse position and returns JSX
- Invokes the render function inside its JSX

#### Usage Example (Car)
<MouseTracker
  render={({ x, y }) => (
    <p>Car is at ({x}, {y})</p>
  )}
/> 

Refactor to use the special children prop instead of a named render prop.
This allows passing the render function as children between the component tags, improving readability:
<MouseTrackerWithChildren> {({x, y}) => <p>Car is at ({x}, {y})</p>} </MouseTrackerWithChildren>
The internal logic and state management remain the same; only the prop passing style changes.

# Use Cases
- Useful when building reusable component libraries that require flexibility.
- Helpful when working with legacy codebases that still use render props.
- Allows exposing internal state or logic while letting consumers decide on rendering.
- Good for situations where hooks are not yet adopted or compatible.

# Pitfalls and Limitations
- Debugging complexity: Functions passed as render props do not show as separate components in React DevTools, making debugging harder.
- Performance concerns: Inline functions create new closures on every render, potentially causing unnecessary renders or performance hits in large applications.
- Nested render props: Multiple nested render props lead to “callback hell” and messy code, which motivated React hooks as a better alternative.
- Not recommended for new projects: While still valuable for understanding or maintaining legacy code, hooks are the preferred modern solution.

# Future Learning Path
The next videos in the series cover:
Higher-Order Components (HOCs)
Custom Hooks
These patterns improve or complement render props for better composability and performance.

# Practical Task
- Build a toggle component using render props:
- Manage an internal isOpen state.
- Let the consumer decide how to render the open and closed states via a render prop.
- This task reinforces understanding of separating logic and rendering using this pattern.