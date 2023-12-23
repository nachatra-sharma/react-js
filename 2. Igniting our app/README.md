# REACT

## What it contains ?

- As we know reactjs is good in dom manipulation but for making reactjs more powerful we need more than this we need a bundler to make it more powerful.

- In this repo i am gonna talk about parcel that is one of the bundler. Let's get started....

---

> **First we need to _initilize npm_ to our project directory**

```
npm init
```

---

- It generate a file named as package.json and this file contains the configuration for our project. So after initializing npm in our project we need to install parcel (bundler) for our project.

---

> **For installing _parcel_ we write**

```
npm install -D parcel
```

---

- -D means we need parcel in our development environment. After installing parcel we got two thing first is package-lock.json file and second we got a node_module.

- package-lock.json contains the exact version of all the dependencies and node_module contains all the packages that parcel needs. after installing parcel now we need to install react and react-dom in our project directory.

---

> **For installing _react_ in our project directory we write**

```
npm install react
```

> **For installing _react-dom_ in our project directory we write**

```
npm install react-dom
```

## Parcel

> 1. Hot module replacement
> 2. Minify
> 3. Bundling
> 4. File watcher algorithm
> 5. Dev and production build
> 6. Clean our code
> 7. Tree shaking
> 8. Code spliting
> 9. Image optimization
> 10. Transitive Dependencies
