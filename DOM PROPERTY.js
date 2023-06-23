// to select only single element from DOM we use 
document.getElementById("source")


// Selecting Multiple Elements At Once
// As I'm sure you remember from learning both HTML structure and CSS styling, an ID should be unique - meaning two or more elements should never have the same ID. Since IDs are unique, and since there will be only one element in the HTML with that ID, document.getElementById() will only ever return at most one element. So how would we select multiple DOM elements?
document.getElementsByClassName()
document.getElementsByTagName()


// .getElementsByClassName() and .getElementsByTagName() have an extra "s" in their name.
// The method's name is .getElementsByClassName(), not .getElementByClassName(). Notice the word right in the middle, it's "Elements" not "Element". If you think about it, this actually makes a lot of sense! Since both .getElementsByClassName() and .getElementsByTagName() could return multiple items, their method names tell us that directly. Now compare this with .getElementById() that will only ever return at most one element. Its name has the singular "Element" in it.

document.getElementByClassName('highlight-spanned');
// This code above will not work, because there is no DOM method .getElementByClassName() (with singular "Element").

// Node with capital N ===class;
// node with small-letter n===object 


// chapeter 2
// JAVASCRIPT & THE DOM 
// CREATE
// DELETE
// MANIPULATE