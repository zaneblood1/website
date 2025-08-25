function showAlert() {
    alert("Repository Downloaded!")
}

const num_gallery_slides = 5;
let counter = 1;
let hideIndex = 1;

function loadNext() {

    counter = counter + 1;
    if (counter > num_gallery_slides) {
        counter = counter%num_gallery_slides;
        hideIndex = num_gallery_slides;
    }
    else {
        hideIndex = counter-1;
    }

    const slideToHide = document.getElementById("gallery-"+hideIndex);
    slideToHide.style.display = "none";

    const slideToShow = document.getElementById("gallery-"+counter);
    slideToShow.style.display = "block";
}

function loadLast() {

    counter = counter - 1;
    if (counter < 1) {
        counter = num_gallery_slides;
        hideIndex = 1;
    }
    else {
        hideIndex = counter+1;
    }

    const slideToHide = document.getElementById("gallery-"+hideIndex);
    slideToHide.style.display = "none";

    const slideToShow = document.getElementById("gallery-"+counter);
    slideToShow.style.display = "block";

}