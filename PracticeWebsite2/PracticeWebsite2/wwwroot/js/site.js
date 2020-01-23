// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function myMove() {
    var animation = document.getElementById("animation");
    var position = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (position == 400) {
            clearInterval(id);
        } else {
            position++;
            animation.style.top = position + 'px';
            animation.style.left = position + 'px';
        }
    }
}