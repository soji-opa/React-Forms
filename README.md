# React Forms

This is a react project example in the [Bob Ziroll Learn React for free Boot camp - Meme generator module](https://scrimba.com/learn/learnreact/forms-in-react-submitting-the-form-coe43436db60b0c21a1cca067).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What i learned](#what-i-learned)
  - [Available scripts](#available-scripts)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Student should be able to use the concept of form state as an object to handle forms with more than 3 input elements

## My Process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Grid
- Mobile-first workflow
- React

### What I learned

This particular project helped me go back the basics of setting up a react app, using props, & staying consistent with the mobile first work flow.

I learnt how to build forms without using an external library

I learned how to manage how to manage form state using an object

I also learned that I had to ensure with forms, there has to be only one source truth, and it has to be managed by the react state

Another important thing to note was that in form elements, checkbox is slightly more complicated, as it uses the value: "checked" to manage her state, as against the value: value, like other form elements

Radio buttons also use the property checked

```jsx
<input
    type='checkbox'
    id='isFriendly'
    checked={formData.isFriendly}
    onChange={handleChange}
    name='isFriendly'
/>
<label htmlFor='isFriendly'>Are you friendly?</label>

<legend>Current employment status</legend>
    <input
        type='radio'
        id='unemployed'
        name='employment'
        value='unemployed'
        checked={formData.employment === 'unemployed'}
        onChange={handleChange}
/>
/>
```

### Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Useful resources

- [Scrimba](https://scrimba.com/learn/learnreact) - This platform provided me with an opportunity to learn react for free

## Author

- Github - [@soji](https://github.com/soji-opa)

## Acknowledgments

I am very grateful to [Smug](https://github.com/theadusamuel) & [Openwell](https://github.com/openwell) for always making time out of their busy schedules to see to my coding challenges and providing me with extra motivation.
