var dataText = [
    "hello, wolrd!!!",
    "Don't keep doing what doesn't work.",
    "The sooner you start to code, the longer the program will take.",
    "Intelligence is the ability to avoid doing work, yet getting the work done."
];

var blessing = document.getElementById('blessing');

function addCard(value) {
    var card = document.createElement('div');
    card.innerText = value,
    card.className = 'card';

    var bigLeft = blessing.offsetWidth - 150;
    var bigTop = blessing.offsetHeight - 150;

    var randLeft = Math.floor(Math.random() * bigLeft);
    var randTop = Math.floor(Math.random() * bigTop);

    var rotatedeg = Math.random() * 360 + 'deg';
    var rotatedeg = 20 - Math.random() * 40 + 'deg';
    card.style.left = randLeft + 'px';
    card.style.top = randTop + 'px';
    card.style.filter = "hue-rotate("+rotatedeg+")";
    card.style.transform = 'rotate('+rotatedeg+')';

    dragCard(card, bigLeft, bigTop);

    blessing.appendChild(card);
}
dataText.forEach(function(item) {
    addCard(item);
});

var popBox = document.querySelector('.pop-box');
var content = document.getElementById('content');
popBox.querySelector('.send').onclick = function() {
    if(content.value.trim() === '') {
        alert('send your leave a message');
        return;
    };
    addCard(content.value);
    content.value = '';
    popBox.classList.toggle('show');
}
document.getElementById('btnSend').addEventListener('click', function() {
    popBox.classList.toggle('show');
});

var focusIndex = 1;
function dragCard(card, bigLeft, bigTop) {
    card.onmousedown = function(e) {
        card.style.zIndex = focusIndex++;
        var disX = e.pageX - card.offsetLeft;
        var disY = e.pageY - card.offsetTop;

        card.onmousemove = function(e) {
            var newx = e.pageX -  disX;
            var newy = e.pageY - disY;
            if(newx > 0 && newx < bigLeft & newy > 0 && newy < bigTop) {
                card.style.left = newx + 'px';
                card.style.top = newy + 'px';
            };
        };
    };
    card.onmouseup = function() {
        document.onmousemove = null;
    };
};