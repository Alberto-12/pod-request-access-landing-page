# Frontend Mentor - Pod request access landing page

This is a solution to the [Meet landing page challenge on Frontend Mentor](https://www.frontendmentor.io/solutions/pod-request-access-landing-page-c__ApQHhvN). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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



## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./assets/Screenshot%202022-12-12%20at%2014-22-55%20Frontend%20Mentor%20Pod%20request%20access%20landing%20page.png)



### Links

- Solution URL: [solution URL](http://127.0.0.1:5500/)
- Live Site URL: [live site URL](https://alberto-12.github.io/pod-request-access-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript


### What I learned

The main focus of this challenge was to create an email form validation using Javascript. Here's the code for Javasript which I'm really proud of:

```js
var form = document.getElementById('addForm');
var email = document.getElementById('text');
var message = document.getElementById('myP');
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;''

form.addEventListener('submit', validate);

function validate(e){
    e.preventDefault();

    if (email.value === '') {
        message.innerHTML = 'Oops! check your email';
    } else if (!pattern.test(email.value)) {
        message.innerHTML = 'Oops! check your email';
    } else {
        message.innerHTML = '';
       
    }
   
}
```

### Continued development

I'm looking forward to improve on Javascript.

### Useful resources

- [Example resource 1](https://www.youtube.com/watch?v=i37KVt_IcXw) - This helped me to better understand working with background images.

## Author


- Frontend Mentor - [@Alberto-12](https://www.frontendmentor.io/profile/Alberto-12) this really helped me to better understand DOM manipulation with Javasript.

## Acknowledgments

I'm very Thankfull for my mentor Treasure Kabareebe that guided me through the process.