# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![](./screenshot.png)


### Links

- Solution URL: [https://github.com/MatheusFukuyama/Ping](https://github.com/MatheusFukuyama/Ping)
- Live Site URL: [https://matheusfukuyama.github.io/Ping/]( https://matheusfukuyama.github.io/Ping/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript
- Regex

### What I learned

In this project i learned the basic concepts about regex and how use it. I also learned how to use trim function to remove the spaces in the begining and in the end of the input. Learned how to make a respondible web page using some basic concepts such as break points, fluid layouts and using diferents relative units.

```js
function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
    return (false)
}

function empatyEmail(email) {
    if(email.trim() === "") {
       return 0
    }
    return 1
}
```

### Continued development

I still want to practice reposive css and want study more about to use some preprocessor to make the css files more maintable. And also learn how SEO works to make a better html file and finally learn about acessibility.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [https://www.w3schools.com/cssref/css_units.asp](https://www.w3schools.com/cssref/css_units.asp) - This helped me for relative units reason. I really liked this pattern and will use it going forward.
- [https://medium.com/xp-inc/regex-um-guia-pratico-para-express%C3%B5es-regulares-1ac5fa4dd39f](https://medium.com/xp-inc/regex-um-guia-pratico-para-express%C3%B5es-regulares-1ac5fa4dd39f) - This is an amazing article which helped me finally understand regex. I'd recommend it to anyone still learning this concept.
- [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim) - This is article help me to learn how to use trim function in javascript.


## Author

- Frontend Mentor - [@MatheusFukuyama](https://www.frontendmentor.io/profile/MatheusFukuyama)

