let view = document.getElementById("view");
            area = document.getElementById("area");
        document.body.onkeydown = keyHandler;

        function keyHandler(e) {
            if (e.ctrlKey && (e.code === "KeyS" || e.code === "KeyE")) {
                e.preventDefault();
                if (e.code === "KeyS") {
                    if (area.style.display) {
                        area.style.display = "";
                        view.style.display = "block";
                        view.textContent = area.value;
                    }
                }
                else {
                    if (!area.style.display) {
                        area.style.display = "block";
                        view.style.display = "none";
                        area.value = view.textContent;
                    }
                }
            }
            if (e.code === "Escape" && area.style.display) {
                area.style.display = "";
                view.style.display = "block";
            }
        }

/*
document.body.addEventListener("keydown", keyPress);
 
        function keyPress(e) {
            if ((e.code === "KeyS" || e.code === "KeyE") && e.ctrlKey) {
                e.preventDefault();
                let el = document.querySelector("hr").nextElementSibling;
                if (e.code === "KeyS" && el.nodeName === "TEXTAREA") {
                    let newEl = document.createElement("div");
                    newEl.textContent = el.value; // Исправил
                    el.replaceWith(newEl);
                }
                else if (e.code === "KeyE" && el.nodeName === "DIV") {
                    let newEl = document.createElement("textarea");
                    newEl.textContent = el.textContent;
                    el.replaceWith(newEl);
                }
            }
        }

let textarea = document.getElementById('myText');
let response = document.getElementById('response');
let button = document.getElementById('btn');

textarea.addEventListener('keydown', event => { 
    event.preventDefault()
    if (event.cntrlKey && eventKEY === 's') {
        textarea.style.display = 'block';
        response.style.display = 'none';
    }   
    if (event.cntrlKey && eventKEY === 's') {
        textarea.style.display = 'none';
        response.style.display = 'block';
    }  
})

function go() {
    response.innerHTML = textarea.value;
}  


let response = document.getElementById('response');
let textarea = document.getElementById('myText');
response.onchange = function () {
    let newresponse = response + textarea;
    newresponse.innerHTML = '';
    changed = true;
}

function go() {
    response.innerHTML = textarea.value;
}
button.addEventListener('click', go);
document.addEventListener('keydown', event => {
    event.preventDefault()

    console.log(event)
    if (event.code = 'MetaLeft') {
        console.log('Cntrl = S pressed')
    }
})


let changed = true;
let textarea = document.getElementById('myText');

textarea.onchange = function () {
    let response = document.getElementById('response')
    response.innerHTML = '';
    changed = true;
}*/
