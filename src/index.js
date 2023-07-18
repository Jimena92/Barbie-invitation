document.addEventListener("DOMContentLoaded", function () {
    const btnYes = document.getElementById("btnYes");
    btnYes.addEventListener("click", irAFraseBonita);
  
    const btnNo = document.getElementById("btnNo"); // Seleccionamos el botón "No" por su ID
    btnNo.addEventListener("click", irANo);
  });
  
  function irAFraseBonita() {
    window.location.href = "src/yes.html";
  }
  
  function irANo() {
    window.location.href = "src/no.html";
  }

  