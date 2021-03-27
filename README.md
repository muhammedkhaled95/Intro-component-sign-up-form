## Overview

This is my first project in Frontend web development building a simple intro component sign up form web page using
HTML5, CSS3, and Vanilla Javascript. the challenge is presented by frontend mentor website.

## A link to the challenge:
  https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"This is not a valid email address!"*

### Screenshots

![](result/sign up form.png)
![](result/sign up form II.png)

### Links

- Live Site URL: [Add live site URL here](https://muhammedkhaled95.github.io/Intro-component-sign-up-form/)

## My process

1-Firstly, I built my HTML structure of the web page and styled it for a desktop design.
2-secondly, I added a client side validation for the form input fields.
3-thirdly, I added the interactive hover states for the form.
4-And finally, I added media queries to make the sign up form mobile friendly as well.
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- Media queries
- Vanilla Javascript

### What I learned

-The most important thing I've taken from this small project is client side validation for forms to validate
user inputs before even being sent to the server side which makes the validation process more efficient.
-How to make a web page responsive as well, using media queries in CSS.
-I've learned how to use Google chrome developer tool to debug my code and find errors more easily than just rooming
around line of code to find the problems I faced.


### Continued development

-I will continue adding more features to this sign up web page such as more validation constraints and adding more input
fields for the user such as confirming password, a text area, and showing password for the user.

## Author

- Linkedin - [Muhammed Khaled](https://www.linkedin.com/in/muhammed-khaled-3b2b111b8/)
- Frontend Mentor - [@muhammedkhaled95](https://www.frontendmentor.io/profile/muhammedkhaled95)
- Github - [@muhammedkhaled95](https://github.com/muhammedkhaled95)


###Links to important web development concepts I've learned in this project from different learning sources.

1) adding a background image in css from image folder located one level up from my .css file
-concept: relative URLs
-learning source: https://www.w3schools.com/html/html_filepaths.asp
-code example: background-image: ("../images/image.png")
*******************************************************************************************************
2) margin auto value works only on block level elements, that's why i used display: block within
input and button elements to apply auto value of margin to them
-concept: margin auto value.
-learning sourcr: https://stackoverflow.com/questions/5734199/auto-margins-dont-center-image-in-page
-code example:
input, button{
    display: block;
    margin: auto;
}

<!-- ************************************************************************************************** -->
3) Form validation using HTML5 or Javascript
learning source: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
