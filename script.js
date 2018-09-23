const quizzes = [
    ["Ethan", "student"],
    ["rabbit", "animal"],
    ["tiger","carnivore"],
    ["brontosaurs!!!!","herb"]
];

function render() {
    document.querySelector(".page").innerText = page + " of " + quizzes.length;

    if (front) {
        document.querySelector(".paper").innerText = quizzes[page- 1][0]
    } else {
        document.querySelector(".paper").innerText = quizzes[page -1][1]
    }
}

function next() {
    if (page < quizzes.length)
        page++;
    render();
}

function prev() {
    if (page >1)
        page--;
    render();
}

function flip() {
    front = !front;
    render();
}

function add() {
    let text = document.querySelector("#newText").value;
    let text2 = document.querySelector("#newText2").value;
    quizzes.push([text, text2])
}
let page = 1;
let front = true;

render();