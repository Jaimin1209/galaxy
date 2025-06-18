const netKgInput = document.getElementById("netKg");
const bagsInput = document.getElementById("bags");
const totalNetKgInput = document.getElementById("totalNetKg");

const bhatiResult = document.getElementById("bhatiResult");
const totalBagsResult = document.getElementById("totalBagsResult");
const remainingResult = document.getElementById("remainingResult");

function calculate() {
  const netKg = parseFloat(netKgInput.value);
  const bags = parseFloat(bagsInput.value);
  const totalNetKg = parseFloat(totalNetKgInput.value);

  if (!isNaN(netKg) && !isNaN(bags) && bags !== 0) {
    const bhati = netKg / bags;
    bhatiResult.textContent = `Bhati: ${bhati.toFixed(6)}`;

    if (!isNaN(totalNetKg)) {
      const remaining = totalNetKg - netKg;
      remainingResult.textContent = `Remaining Kg: ${remaining}`;
      const totalAddBag = remaining / bhati;
      totalBagsResult.textContent = `Total Add Bag: ${totalAddBag.toFixed(2)}`;
    } else {
      remainingResult.textContent = `Remaining Kg: --`;
      totalBagsResult.textContent = `Total Add Bag: --`;
    }
  } else {
    bhatiResult.textContent = `Bhati: --`;
    remainingResult.textContent = `Remaining Kg: --`;
    totalBagsResult.textContent = `Total Add Bag: --`;
  }
}

netKgInput.addEventListener("input", calculate);
bagsInput.addEventListener("input", calculate);
totalNetKgInput.addEventListener("input", calculate);
