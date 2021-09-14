var Fsquare = document.getElementById("Firstsq");
var seqsquare = document.getElementById("secsq");
var images = [];
var imageobj;
var obj_width = 20;
var obj_height = 35;
var imleft;
var imtop;
var random_left;
var random_top;
var faces_number = 5;
function add_images() {
    /*create images adding them to the destinated positons*/
    for (var i = 0; i < 4; i++) {
        var image_link = document.createElement('a');
        var mirror_link = document.createElement('a');
        var image = document.createElement('img');
        var mirror_image = document.createElement('img');
        image.src = "smiley_face_!.png";
        mirror_image.src = "smiley_face_!.png";
        if (get_new_position()) {
            image.style.width = obj_width + "px";
            image.style.height = obj_height + "px";
            image_link.style.position = "relative";
            image_link.style.left = random_left + "px";
            image_link.style.top = random_top + "px";
            image_link.href = "javascript:alert('wrong image please try again')";
            mirror_image.style.width = obj_width + "px";
            mirror_image.style.height = obj_height + "px";
            mirror_link.style.position = "relative";
            mirror_link.style.left = random_left + "px";
            mirror_link.style.top = random_top + "px";
            imleft = random_left;
            imtop = random_top;
        }
        if (i == 3) {
            image.src = "smiley_face_2.jpg";
            image_link.href = "javascript:unmatched_click()";
            image.id = "dif";
        }
        image_link.appendChild(image);
        mirror_link.appendChild(mirror_image);
        Fsquare.appendChild(image_link);
        seqsquare.appendChild(mirror_link);
        imageobj = { left: imleft, top: imtop };
        images.push(imageobj);
    }
}
function get_new_position() {
    /*generate random positions and check if the position is available or already there is an object that can overlap*/ 
    random_left = Math.floor(Math.random() * 40);
    random_top = Math.floor(Math.random() * 300);
    if (images.length == 0) {
        return true;
    }
    for (var i = 0; i < images.length; i++) {
        if (images[i].left == random_left && images[i].top == random_top) {
            get_new_position();
        }
        else if (images[i].left < random_left || images[i].left > random_left && ((random_top + obj_height) - (images[i].top + obj_height) <= 35 || (images[i].top + obj_height) - (random_top + obj_height) <= 35)) {
            get_new_position();
        }
        else if (images[i].left > random_left && (images[i].left + obj_width) - (random_left + obj_width) <= 20) {
            get_new_position();
        }
        else if (images[i].top > random_top && (images[i].top + obj_height) - (random_top + obj_height) <= 35) {
            get_new_position();
        }
    }
    return true;
}
function unmatched_click() {
    /*resetting unmatched face to become a normal smiley face then call the add_images function*/
    var unmatched_square = document.getElementById("dif");
    unmatched_square.setAttribute('src', 'smiley_face_!.png');
    unmatched_square.setAttribute('id', '');
    unmatched_square.setAttribute('href', 'javascript:alert("wrong face please try again")');
    add_images();
}
add_images();
