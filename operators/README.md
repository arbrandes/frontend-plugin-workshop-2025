# Plugin Examples for Operators

This directory contains example material for site operators.

## Basic Plugin development

### [Hello, world!](configs/basic-example.env.config.jsx):

Adding a hello world `<p>` in an existing slot

```jsx
<p style={{backgroundColor: 'lightblue'}}>Open edX rlz!</p>
```

### Create a [plugin for an existing slot](configs/sidebar-plugin-example.env.config.jsx):

Adding a paragon card to the sidebar.

```jsx
<div className="product-card-container d-flex">
    <Card className="mb-4" orientation="horizontal">
        <Card.ImageCap
          src="https://picsum.photos/360/200/"
          srcAlt="Card image"
          logoSrc="https://picsum.photos/150/150"
          logoAlt="Card logo"
        />
    ...
```

### Write a brand new [footer](configs/branded-footer-example.env.config.jsx):

```jsx
import Footer from './src/my-brand/Footer'
```
