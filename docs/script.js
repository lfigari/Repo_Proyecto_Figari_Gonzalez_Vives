// Selecciona todas las piezas
const pieces = document.querySelectorAll(".piece");
const removedList = document.getElementById("removed-list");

pieces.forEach((piece) => {
  piece.addEventListener("click", () => {
    if (piece.classList.contains("hidden")) return;

    piece.classList.add("hidden");

    const name = piece.dataset.name || "Elemento sin nombre";

    const li = document.createElement("li");
    li.textContent = name;
    removedList.appendChild(li);
  });
});