# Welcome to Resy FE Interview Exercise

## This is a hands-on test

Provided here is a skeleton application. You'll find an index.html, app.js, and app.css.
The task is to look at the provided .mov and build what is represented therein.

- The header will contain the resy logo and the text 'Select a Breed'
- Build a JavaScript application that populates a select box using this url: https://dog.ceo/api/breeds/list/all
- You can leave out subbreeds
- The select box has the initial prompt: 'Select a breed'
- When the user selects an item from the list eg 'boxer', then an image of a boxer appears below the select control. You can use this URL: https://dog.ceo/api/breed/{breed}/images/random to retrieve an image showing an example of that breed.
- Below the image there is a button. The button has the text "I don't like this one. Show me another." When the user clicks on this button a new call is made to retrieve a new image of a dog of that breed.

This task utilizes these open source urls:

- [https://dog.ceo/api/breeds/list/all](https://dog.ceo/api/breeds/list/all)
- [https://dog.ceo/api/breeds/image/random](https://dog.ceo/api/breeds/image/random)
- [https://dog.ceo/api/breed/affenpinscher/images/random](https://dog.ceo/api/breed/affenpinscher/images/random)

You will utilize these urls to create a select control in which the user can choose a breed and a random image of a dog representing that breed will be displayed on the screen.
If the user clicks a button - "I don't like that one. Show me another."" - then a new image will be presented.

Some of the things evaluated in this exercise are:

- Retrieving data and translating that to the UI controls
- Writing HTML using JavaScript
- Writing functions, keeping track of variables
- Basic styling of the page

You can use any resources available on the web.
Please communicate with us with any questions you might have.

---

## The solve

After revisiting the problem to be solved, I decided that I didn't need the full weight of an ember application, this can likely be tackled using vanillaJS.

Styling - I like to write scss and use BEM to help keep my specificity manageable, I didn't need to add a build tool for this so I'm just running the `sass --watch` command to pick up changes. I'd also almost always use a [reset](https://meyerweb.com/eric/tools/css/reset/) to get around opinionated browser styling and let me start fresh but the layout here was simple enough that I can build this implementation without needed to worry about that.

## Todo

- [] Create header

DOD - It should:

- display the Resy logo
- display header text

[] Dropdown input field

DOD - It should:

- contain a list of dog breeds from [the following endpoint](https://dog.ceo/api/breeds/list/all)
- render 'select a breed' on render

[] Image display

DOD - It should:

- render an image of a dog matching the selected breed [using this endpoint](https://dog.ceo/api/breeds/image/random)

[] Button

DOD - It should:

- fetch a new image, on click [from this endpoint](https://dog.ceo/api/breed/affenpinscher/images/random)
