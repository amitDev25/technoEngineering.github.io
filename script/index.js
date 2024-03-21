// The typewriter element
var typeWriterElement = document.getElementById('typewriter');

// The TextArray: 
var textArray = ["WELCOME TO TECHNO ENGINEERING", "Premier Destination For Machine Repair, Maintenance And Supply Needs"];

// You can also do this by transfering it through a data-attribute
// var textArray = typeWriterElement.getAttribute('data-array');


// function to generate the backspace effect 
function delWriter(text, i, cb) {
    if (i >= 0) {
        typeWriterElement.innerHTML = text.substring(0, i--);
        // generate a random Number to emulate backspace hitting.
        var rndBack = 10 + Math.random() * 150;
        setTimeout(function () {
            delWriter(text, i, cb);
        }, rndBack);
    } else if (typeof cb == 'function') {
        setTimeout(cb, 100);
    }
};

// function to generate the keyhitting effect
function typeWriter(text, i, cb) {
    if (i < text.length + 1) {
        typeWriterElement.innerHTML = text.substring(0, i++);
        // generate a random Number to emulate Typing on the Keyboard.
        var rndTyping = 250 - Math.random() * 300;
        setTimeout(function () {
            typeWriter(text, i++, cb)
        }, rndTyping);
    } else if (i === text.length + 1) {
        setTimeout(function () {
            delWriter(text, i, cb)
        }, 3000);
    }
};

// the main writer function
function StartWriter(i) {
    if (typeof textArray[i] == "undefined") {
        setTimeout(function () {
            StartWriter(0)
        }, 0);
    } else if (i < textArray[i].length + 1) {
        typeWriter(textArray[i], 0, function () {
            StartWriter(i + 1);
        });
    }
};
// wait one second then start the typewriter
setTimeout(function () {
    StartWriter(0);
}, 0);

let slider = document.querySelectorAll(".slides")
let count = 0
console.log(slider)
slider.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`

    });

const goPrev = () => {
    count--
    if (count < 0) {
        count = slider.length - 1
    }
    slideImage()
}

const goNext = () => {
    count++
    if (count > slider.length - 1) {
        count = 0
    }
    slideImage()
}

const slideImage = () => {
    slider.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${count * 100}%)`

        });

}

window.onload = setInterval(() => {
    goNext()
}, 5000);

