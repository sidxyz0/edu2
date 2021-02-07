var link; //will contain the video url
link = document.getElementById('iframe').src;
console.log(link);
var x = document.getElementById("portfolioModal1");

//to pause video when clicked out of pop up window
x.addEventListener('click', function () {
    if (event.target !== x) // for child divs of the parent div
        return;
    console.log('working1');
    document.getElementById('iframe').src = ''; //for parent div only
});

//to pause video when clicked on close button
var y = document.getElementById("close_btn");
y.addEventListener('click', function () {
    console.log('working2');
    document.querySelector('iframe').src = '';
});

//to pause video when clicked on the other close button
var w = document.getElementById("closebtn");
w.addEventListener('click', function () {
    console.log('working2');
    document.querySelector('iframe').src = '';
});

//to reload the video urls to the iframe elements
var z = document.querySelector('.portfolio-item');//getElementsByClassName returns an array of elements with the class name and hence eventlistener doesn't work
console.log(z);
z.addEventListener('click', function () {
    iframe.setAttribute('src', link);
    console.log('working3');
});

//for generating thumbnails from video
var canvas= document.createElement('canvas');
var m=document.getElementById('thumb_1');
console.log(m);
var n=document.getElementById("iframe").src;
console.log(n);
canvas.getContext('2d').drawImage(n, 0, 0, n.width, n.height);