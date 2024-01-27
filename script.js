document.addEventListener('DOMContentLoaded', function () {
    var card = document.getElementById('movingCard');
    var velocityX = 10;
    var velocityY = 10;
    var posX = 0;
    var posY = 0;

    function moveCard() {
        posX += velocityX;
        posY += velocityY;

        if (posX + card.offsetWidth > window.innerWidth || posX < 0) {
            velocityX *= -1;
        }

        if (posY + card.offsetHeight > window.innerHeight || posY < 0) {
            velocityY *= -1;
        }

        card.style.left = posX + 'px';
        card.style.top = posY + 'px';

        requestAnimationFrame(moveCard);
    }

    moveCard();
});
