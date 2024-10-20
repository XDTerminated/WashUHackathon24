const symptoms = new Map([
  ["HeadTrauma", 1],
  ["BackTrauma", 2],
]);

function handleSearchBox(event) {
  const symptomSearchBox = document.getElementById("symptom-search-box");
  if (!symptomSearchBox) {
    throw new Error("Failed to find element(3)");
  }

  const availableSymptoms = document.getElementById(
    "available-symptoms-table-body"
  );
  if (!availableSymptoms) {
    throw new Error("Failed to find available symptoms table body");
  }

  const rows = availableSymptoms.querySelectorAll("tr"); // Get all <tr> elements within the available symptoms
  const searchTerm = symptomSearchBox.value.toLowerCase(); // Get the search term

  rows.forEach((row) => {
    const cells = row.children;

    let matchFound = false;
    for (let cellIndex = 0; cellIndex < cells.length; cellIndex++) {
      const cellText = cells[cellIndex].textContent.toLowerCase();
      if (cellText.includes(searchTerm)) {
        matchFound = true;
        break;
      }
    }

    row.style.display = matchFound ? "" : "none"; // Show or hide the row
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const symptomSearchBox = document.getElementById("symptom-search-box");
  if (!symptomSearchBox) {
    throw new Error("Failed to get element(1)");
  }
  symptomSearchBox.addEventListener("input", handleSearchBox);

  const availableSymptomsTable = document.getElementById(
    "available-symptoms-table-body"
  );
  if (!availableSymptomsTable) {
    throw new Error("Failed to get element(2)");
  }

  const activeSymptomsTable = document.getElementById(
    "active-symptoms-table-body"
  );
  if (!activeSymptomsTable) {
    throw new Error("Failed to get element(3)");
  }

  symptoms.forEach((value, key) => {
    const row = document.createElement("tr");
    const td = document.createElement("td");

    td.classList.add("symptom");
    td.innerText = key;
    td.id = "symptom-" + value;

    row.addEventListener("click", () => {
      if (row.parentElement == availableSymptomsTable) {
        activeSymptomsTable.appendChild(row);
      } else {
        availableSymptomsTable.appendChild(row);
      }
    });

    row.appendChild(td);
    availableSymptomsTable.appendChild(row);
  });
});
