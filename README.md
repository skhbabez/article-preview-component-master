# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![desktop](./screenshots/desktop.jpeg)
![tablet](./screenshots/tablet.jpeg)
![mobile](./screenshots/mobile.jpeg)

### Links

- Solution URL: [https://github.com/skhbabez/article-preview-component-master](https://github.com/skhbabez/article-preview-component-master)
- Live Site URL: [https://skhbabez.github.io/article-preview-component-master/](https://skhbabez.github.io/article-preview-component-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- javascript

### What I learned

I learned how to position images with object-position. I am proud of how I Usind absolute Positioning and z-index to create the toast, while having the button still appear. The most interesting piece of code to me though, was inverting the color of the share button svg.

```css
.share-btn-dark {
  --share-btn-color: brightness(0) invert(1); /*used with filter*/
}
```

### Continued development

I want to focus more on Best practices, especially when it comes to responsoveness and accessibilty. This project forced me to dive a little into aria declarations and showed me I have a lot to still learn in this area.

### Useful resources

- [Trick to color invert an svg](https://stackoverflow.com/questions/24224112/css-filter-make-color-image-with-transparency-white) - Really ehlpful and ingenious.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.
