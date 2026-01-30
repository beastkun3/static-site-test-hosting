const overlay = document.getElementById("overlay");
const modalContainer = document.getElementById("modalContainer");

document.getElementById("yesMain").addEventListener("click", showSuccess);
document.getElementById("noMain").addEventListener("click", openNoModal);

let zIndexCounter = 20;
let depressedCounter = 0;

function openNoModal() {
  overlay.classList.remove("hidden");

  const modal = document.createElement("div");
  modal.className = "modal";

  if (depressedCounter <= 3) {
    modal.innerHTML = `
      <h2>Are you sure? 🥺</h2>
      <p>Please reconsider, na?</p>
      <div class="modal-buttons">
        <button class="btn yes">YES</button>
        <button class="btn no">NO</button>
      </div>
    `;
  } else {
    modal.innerHTML = `
      <h2>😔</h2>
      <p>Your boyfriend is sad</p>
      <div class="modal-buttons">
        <button class="btn yes">YES</button>
        <button class="btn no">NO</button>
      </div>
    `;
  }

  positionModalRandomly(modal);

  zIndexCounter++;
  depressedCounter++;
  modal.style.zIndex = zIndexCounter;

  modal.querySelector(".yes").addEventListener("click", showSuccess);
  modal.querySelector(".no").addEventListener("click", openNoModal);

  modalContainer.appendChild(modal);
}

function showSuccess() {
  closeAllModals();
  overlay.classList.remove("hidden");

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.style.left = "50%";
  modal.style.top = "50%";
  modal.style.transform = "translate(-50%, -50%) scale(0.9)";
  modal.style.zIndex = 1000;

  modal.innerHTML = `
    <h2>Hehe 😄</h2>
    <p>Nais</p>
    <div class="modal-buttons">
        <button class="btn so">So, now</button>
    </div>
  `;

  modal.querySelector(".so").addEventListener("click", showDatePickerModal);
  modalContainer.appendChild(modal);

}

function showDatePickerModal() {
  closeAllModals();
  overlay.classList.remove("hidden");

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.style.left = "50%";
  modal.style.top = "50%";
  modal.style.transform = "translate(-50%, -50%) scale(0.9)";
  modal.style.zIndex = 1000;

  modal.innerHTML = `
    <h2>When should we go out?</h2>
    <p>Pick a date 🙂</p>

    <select id="dateSelect" style="width:100%; padding:10px; margin-top:10px; border-radius:8px;">
      <option value="">-- choose one --</option>
      <option value="date1">Feb 16</option>
      <option value="date2">Feb 23</option>
      <option value="date3">Mar 2</option>
      <option value="idk">idk</option>
    </select>

    <div class="modal-buttons">
      <button class="btn yes" id="confirmDate">Confirm</button>
    </div>
  `;

  modalContainer.appendChild(modal);

  modal.querySelector("#confirmDate").addEventListener("click", () => {
    const value = modal.querySelector("#dateSelect").value;

    if (!value) return;

    if (value === "idk") {
      showTryAgainModal();
    } else {
      showFinalSuccessModal();
    }
  });
}

function showTryAgainModal() {
  closeAllModals();
  overlay.classList.remove("hidden");

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.style.left = "50%";
  modal.style.top = "50%";
  modal.style.transform = "translate(-50%, -50%) scale(0.9)";
  modal.style.zIndex = 1000;

  modal.innerHTML = `
    <h2>Somari Pothu,</h2>
    <p>Pick a proper date!</p>
    <div class="modal-buttons">
      <button class="btn yes">Okay</button>
    </div>
  `;

  modal.querySelector(".yes").addEventListener("click", showDatePickerModal);

  modalContainer.appendChild(modal);
}

function showFinalSuccessModal() {
  closeAllModals();
  overlay.classList.remove("hidden");

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.style.left = "50%";
  modal.style.top = "50%";
  modal.style.transform = "translate(-50%, -50%) scale(0.9)";
  modal.style.zIndex = 1000;

  modal.innerHTML = `
    <h2>🎉 It's a date, then!</h2>
    <p>Can't wait for it, baby girl ❤️</p>
  `;

  modalContainer.appendChild(modal);
}

function closeAllModals() {
  modalContainer.innerHTML = "";
  overlay.classList.add("hidden");
  zIndexCounter = 20;
  depressedCounter = 0;
}

function positionModalRandomly(modal) {
  const modalWidth = 320;
  const modalHeight = 220;
  const padding = 20;

  const maxX = window.innerWidth - modalWidth - padding;
  const maxY = window.innerHeight - modalHeight - padding;

  modal.style.left = `${Math.max(padding, Math.random() * maxX)}px`;
  modal.style.top = `${Math.max(padding, Math.random() * maxY)}px`;
}
