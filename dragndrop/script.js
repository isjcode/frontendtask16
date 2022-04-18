const drag_area = document.getElementsByClassName("drag-area")[0];
const box = document.getElementById("box1");

box.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("id", e.target.id);
});


drag_area.addEventListener("dragenter", (e) => {
    e.preventDefault();
});

drag_area.addEventListener("dragover", (e) => {
    e.preventDefault();
});

drag_area.addEventListener("drop", (e) => {
    e.preventDefault();
    e.target.innerHTML = "";

    const id = e.dataTransfer.getData("id");
    const dragged = document.getElementById(id);

    e.target.appendChild(dragged);
});

