function recipename() {
    document.getElementById('box1').innerHTML = "Hi";
}

var visible_enter_btn = 0;

function started() {
    var div1 = document.getElementById('main');
    var div2 = document.getElementById('intro');

    if (visible_enter_btn === 1) {
        div1.style.display = 'block';
        div2.style.display = 'block';
        div1.style.transform = 'scale(1)'; 
        visible_enter_btn = 0;
    } else {
        div1.style.display = 'block';
        div2.style.display = 'none';
        div1.style.transform = 'scale(0.95)'; 
        visible_enter_btn = 1;
    }
}
