// add an input event listener to the input
document.querySelector('input').addEventListener('input', function(e) {
    // store the input value in a variable
    var value = e.target.value;
    // check of the input value is a color
    if (value.match(/^#[0-9a-f]{6}$/i)) {
        // if it is a color, set the background color to the input value
        document.body.style.backgroundColor = value;
        // set the h1 to a new color
        document.querySelector('h1').style.color = getContrastingColor(value);
        document.querySelector('input').style.background = value;
        document.querySelector('input').style.color = getContrastingColor(value);
        document.querySelector('input').style.border = value;
    }
    // if it is not a color, set the background color to white
    else {
        document.body.style.backgroundColor = 'white';
        // set the h1 to black
        document.querySelector('h1').style.color = 'black';
        document.querySelector('input').style.background = 'white';
        document.querySelector('input').style.color = 'black';
        document.querySelector('input').style.borderColor = 'white';
    }
});

// takes a hex color and returns white if it is dark, or black if it is light
function getContrastingColor(hex) {
    // convert a hex color to rgb
    var rgb = hexToRgb(hex);
    // determine if the color is light or dark
    var isLight = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 > 125;
    // return the opposite color
    return isLight ? 'black' : 'white';
}

function hexToRgb(hex) {
    // convert a hex color to rgb
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
