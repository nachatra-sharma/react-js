# REACT

## What it contains ?

- In this repo i am gonna talk about component in reactjs and many more....

---

> **First we need to change our _package.json_ file**

```javascript
"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  }
```

---

- It allow us to run our project in faster manner. As we already aware about React Element but it is painfull to code in that way. So let's introduce JSX (Javascript XML) that makes developer life easy. Let's write our first code in JSX.

---

> **First program in JSX**

```jsx
const heading = <h1>Hello world</h1>;
```

---

- Let's talk about react component. there are two type of component in react.

1. Functional Component
2. Class Based Component

- Let's talk about functional component....

---

> **FUnctional component example**

```javascript
const Header = () => {
  return (
    <div>
      {heading}
      <h1>Hello world</h1>
      <p>Lorem ipsum dolor.</p>
    </div>
  );
};
```

## Some key points

1. **React Reconciliation**
2. **Virtual Dom**
3. **React Fiber**
4. **Diff-Algorithm**
