const total = document.getElementById("total");
const anticipo = document.getElementById("anticipo");
const saldo = document.getElementById("saldo");

total.addEventListener("input", () => {
  const cantidad = Number(total.value) || 0;
  const mitad = cantidad / 2;

  anticipo.value = mitad.toFixed(2);
  saldo.value = mitad.toFixed(2);
});