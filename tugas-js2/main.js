let ratiowidth = document.getElementById('ratio-width');
let ratioheight = document.getElementById('ratio-height');
let widht = document.getElementById('width');
let height = document.getElementById('height');

let calculatewidth = () => {
    let aspectRatio = ratiowidth.value / ratioheight.value;
    width.value = parseFloat((height.value * aspectRatio).toFixed(2));
}

let calculateheight = () => {
    let aspectRatio = ratiowidth.value / ratioheight.value;
    height.value = parseFloat((height.value * aspectRatio).toFixed(2));
}

height.addEventListener("input", calculatewidth);
width.addEventListener("input", calculateheight);
