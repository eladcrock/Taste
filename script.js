// Menu items (from the list you provided)
const menuItems = [
    { name: "Pesce Crudo (A.Q.)", price: 44.00, type: "Antipasti" },
    { name: "Burrata (Seasonal)", price: 23.00, type: "Antipasti" },
    { name: "‘Hail” Insalata Caesar Nero", price: 18.00, type: "Antipasti" },
    { name: "Insalatina di Cavoletti di Bruxelles", price: 18.00, type: "Antipasti" },
    { name: "Insalata di Pere", price: 18.00, type: "Antipasti" },
    { name: "Polpo alla Griglia", price: 23.00, type: "Antipasti" },
    { name: "Calamari Fritti", price: 19.00, type: "Antipasti" },
    { name: "Zuppa di Cipolle", price: 18.00, type: "Antipasti" },
    { name: "Supplì 3 pc", price: 20.00, type: "Antipasti" },
    { name: "Supplì 5 pc", price: 25.00, type: "Antipasti" },
    { name: "Suppli add 1", price: 5.00, type: "Antipasti" },
    { name: "Pasta Fritta  5 pc", price: 23.00, type: "Antipasti" },
    { name: "Pasta Fritta  3 pc", price: 18.00, type: "Antipasti" },
    { name: "Pasta Fritta add 1", price: 5.00, type: "Antipasti" },
    { name: "Tagliere di Formaggi e Salumi", price: 35.00, type: "Antipasti" },
    { name: "Arrosticini con Sotto’aceti", price: 24.00, type: "Antipasti" },
    { name: "Polenta sotto Vetro “Polenta Under Glass”", price: 18.00, type: "Antipasti" },
    { name: "Bruschetta", price: 18.00, type: "Antipasti" },
    { name: "Risotto del Giorno", price: 44.00, type: "Pasta" },
    { name: "Ricotta Gnocchi della Nonna", price: 28.00, type: "Pasta" },
    { name: "Tagliarini Bolognese", price: 28.00, type: "Pasta" },
    { name: "Carbonara al Carbone", price: 28.00, type: "Pasta" },
    { name: "Raviolo", price: 28.00, type: "Pasta" },
    { name: "Rigatoni al Coniglio", price: 32.00, type: "Pasta" },
    { name: "Solo Shrimp Pasta", price: 28.00, type: "Pasta" },
    { name: "Fusilli alla Michelangelo", price: 26.00, type: "Pasta" },
    { name: "Spaghetti alla Sophia Loren", price: 28.00, type: "Pasta" },
    { name: "Lasagnetta di Zucchine", price: 26.00, type: "Secondi" },
    { name: "Branzino alla Griglia", price: 39.00, type: "Secondi" },
    { name: "Bistecca alla Fiorentina", price: 165.00, type: "Secondi" },
    { name: "Brodetto ai Frutti di Mare", price: 49.00, type: "Secondi" },
    { name: "Conserva d’ Anatra", price: 47.00, type: "Secondi" },
    { name: "Tomahawk alla Griglia", price: 159.00, type: "Secondi" },
    { name: "Pollo alla Diavola", price: 35.00, type: "Secondi" },
    { name: "Costolette di Manzo", price: 44.00, type: "Secondi" },
    { name: "Cavoletti di Bruxelles Arrostiti", price: 18.00, type: "Contorni" },
    { name: "Polenta Antica ", price: 16.00, type: "Contorni" },
    { name: "Patatine Fritte e Tartufo Fire Time 5 Minutes", price: 16.00, type: "Contorni" },
    { name: "Biscotti", price: 10.00, type: "Dessert" },
    { name: "Chefs Sorbetti/Gelati", price: 14.00, type: "Dessert" },
    { name: "1 Scoop", price: 5.00, type: "Dessert" },
    { name: "Affogato", price: 14.00, type: "Dessert" },
    { name: "Tiramisu' alla 'Tra Vigne'", price: 14.00, type: "Dessert" },
    { name: "Zeppole", price: 14.00, type: "Dessert" },
    { name: "Zeppole add 1", price: 5.00, type: "Dessert" },
    { name: "Panna Cotta", price: 14.00, type: "Dessert" },
    { name: "Chocolate Lava Cake", price: 14.00, type: "Dessert" },
    { name: "Panettone Bread Pudding", price: 14.00, type: "Dessert" },
    { name: "Small dessert Board", price: 48.00, type: "Dessert" },
    { name: "Large dessert Board", price: 75.00, type: "Dessert" }
];

const wines = {
    sparkling: [
      { name: "NV Adami, Bosco Di Gica, Prosecco Superiore Brut", glassPrice: 15 },
      { name: "NV Contadi Castaldi, Brut Rosé", glassPrice: 18 },
      { name: "2021 Schramsberg, Brut Blanc de Blancs", glassPrice: 23 },
      { name: "NV Lanson, Le Black Label, Brut", glassPrice: 25 }
    ],
    white: [
      { name: "2023 Frog’s Leap, Sauvignon Blanc", glassPrice: 14, quartinoPrice: 18 },
      { name: "2022 Buzzinelli, Pinot Grigio", glassPrice: 15, quartinoPrice: 18 },
      { name: "2023 Massican, Gemina, Greco Fiano Falanghina Blend", glassPrice: 16, quartinoPrice: 22 },
      { name: "2022 Cornarea, Roero Arneis", glassPrice: 16, quartinoPrice: 22 },
      { name: "2023 Frank Family, Chardonnay", glassPrice: 17, quartinoPrice: 23 },
      { name: "2023 Spottswoode, Sauvignon Blanc", glassPrice: 18, quartinoPrice: 26 },
      { name: "2021 Antinori Napa Valley, A26, Chardonnay", glassPrice: 24, quartinoPrice: 40 }
    ],
    rose: [
      { name: "2022 Tormaresca, Calafuria, Negroamaro Rosé", glassPrice: 11, quartinoPrice: 15 },
      { name: "2022 Handwritten, Carignan Blend Rosé", glassPrice: 12, quartinoPrice: 16 }
    ],
    red: [
      { name: "2022 Villa Calcinaia, Cappone, Chianti Classico", glassPrice: 13, quartinoPrice: 18 },
      { name: "2022 Cline, Seven Ranchlands, Pinot Noir", glassPrice: 13, quartinoPrice: 18 },
      { name: "2021 Neyers, Vista Notre, Zinfandel", glassPrice: 16, quartinoPrice: 25 },
      { name: "2022 Clos du Val, Cabernet Sauvignon", glassPrice: 21, quartinoPrice: 33 },
      { name: "2019 David Arthur, Proprietary Red, Cab Sauvignon Blend", glassPrice: 21, quartinoPrice: 33 },
      { name: "2022 Flowers, Pinot Noir", glassPrice: 21, quartinoPrice: 33 },
      { name: "2019 Cavalier Bartolomeo, Barolo Altenasso", glassPrice: 22, quartinoPrice: 34 }
    ]
  };
  
  let totalPrice = 0;
  


// Dynamically add menu items to the table
window.onload = () => {
    const tableBody = document.getElementById("menuTable").getElementsByTagName("tbody")[0];
    menuItems.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td><input type="number" id="quantity-${index}" class="quantity" value="" min="0" inputmode="numeric" pattern="[0-9]*" /></td>

            <td id="subtotal-${index}">$0.00</td>
        `;
        tableBody.appendChild(row);

        // Add event listener to update subtotal dynamically
        const quantityInput = document.getElementById(`quantity-${index}`);
        quantityInput.addEventListener("input", () => updateLineItemSubtotal(item, index));
    });
};

// Update the subtotal for a specific line item
function updateLineItemSubtotal(item, index) {
    const quantity = parseInt(document.getElementById(`quantity-${index}`).value) || 0; // Default to 0
    const itemSubtotal = item.price * quantity;

    // Update the subtotal for the row
    document.getElementById(`subtotal-${index}`).innerText = `$${itemSubtotal.toFixed(2)}`;
}

// Calculate totals when "Calculate" button is clicked

function calculateTotal() {
    let subtotal = 0;

    // Get the added charges and number of guests
    const addedCharges = parseFloat(document.getElementById("addedCharges").value) || 0; // Default to 0
    const guestCount = parseInt(document.getElementById("guestInput").value) || 1; // Default to 1

    // Retrieve the selected menu items and their quantities
    const selectedMenuItems = [];
    menuItems.forEach((item, index) => {
        const quantityInput = document.getElementById(`quantity-${index}`);
        if (quantityInput) {
            const quantity = parseInt(quantityInput.value) || 0; // Default to 0
            if (quantity > 0) {
                subtotal += item.price * quantity;
                selectedMenuItems.push({
                    name: item.name,
                    price: item.price,
                    quantity: quantity,
                });
            }
        }
    });

    // Calculate the total and per person price
    const total = subtotal + addedCharges;
    const perPersonPrice = total / guestCount;

    // Update the UI
    document.getElementById("totalPrice").innerText = total.toFixed(2);
    document.getElementById("perPersonPrice").innerText = perPersonPrice.toFixed(2);

    // Update the table to show only selected items
    const tableBody = document.getElementById("menuTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = ""; // Clear the table body
    selectedMenuItems.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td><input type="number" value="${item.quantity}" min="0" id="quantity-${index}" class="quantity" /></td> <!-- Editable quantity -->
            <td id="subtotal-${index}">$${(item.price * item.quantity).toFixed(2)}</td> <!-- Display the subtotal -->
        `;
        tableBody.appendChild(row);

        // Add event listener to update subtotal dynamically
        const quantityInput = document.getElementById(`quantity-${index}`);
        quantityInput.addEventListener("input", () => {
            const newQuantity = parseInt(quantityInput.value) || 0;
            document.getElementById(`subtotal-${index}`).innerText = `$${(item.price * newQuantity).toFixed(2)}`;
        });
    });

    // Update the table header to reflect the new layout
    const tableHeader = document.getElementById("menuTable").getElementsByTagName("thead")[0];
    tableHeader.innerHTML = `
        <tr>
            <th>Item Name</th>
            <th>Quantity</th> <!-- Editable Quantity column -->
            <th>Subtotal</th>
        </tr>
    `;

    // Ensure the "Calculate" button remains visible
    const calculateButton = document.querySelector('button[onclick="calculateTotal()"]');
    if (calculateButton) {
        calculateButton.style.display = "inline-block"; // Keep the button visible
    }

    // Hide the "Go Back" button (if applicable)
    const makeChangesButton = document.getElementById("makeChangesBtn");
    if (makeChangesButton) {
        makeChangesButton.style.display = "none";
    }
}


function resetTable() {
    const confirmReset = confirm("Are you sure you want to reset?");
    if (!confirmReset) return;

    // Clear added charges and guest input
    document.getElementById("addedCharges").value = "";
    document.getElementById("guestInput").value = "";

    // Reset totals
    document.getElementById("totalPrice").innerText = "0.00";
    document.getElementById("perPersonPrice").innerText = "0.00";

    // Clear the table body and repopulate it with all menu items
    populateTable();

    // Ensure the "Calculate" button remains visible
    const calculateButton = document.querySelector('button[onclick="calculateTotal()"]');
    if (calculateButton) {
        calculateButton.style.display = "inline-block";
    }

    // Hide the "Go Back" button
    const makeChangesButton = document.getElementById("makeChangesBtn");
    if (makeChangesButton) {
        makeChangesButton.style.display = "none";
    }

    // Ensure the "Reset" button remains visible
    const resetButton = document.querySelector('button[onclick="resetTable()"]');
    if (resetButton) {
        resetButton.style.display = "inline-block";
    }
}
function populateTable() {
    const tableBody = document.getElementById("menuTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = ""; // Clear the table body

    menuItems.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td><input type="number" id="quantity-${index}" class="quantity" value="0" min="0" /></td>
            <td id="subtotal-${index}">$0.00</td>
        `;
        tableBody.appendChild(row);

        // Add event listener to update subtotal dynamically
        const quantityInput = document.getElementById(`quantity-${index}`);
        quantityInput.addEventListener("input", () => updateSubtotal(item, index));
    });
}


function updateSubtotal(item, index) {
    const quantityInput = document.getElementById(`quantity-${index}`);
    const quantity = parseInt(quantityInput.value) || 0; // Default to 0 if input is empty
    const subtotal = item.price * quantity;

    // Update the subtotal cell
    const subtotalCell = document.getElementById(`subtotal-${index}`);
    if (subtotalCell) {
        subtotalCell.innerText = `$${subtotal.toFixed(2)}`;
    }
}






















function renderWineOptions() {
  // Select DOM elements to insert wine options
  const sparklingSelect = document.getElementById("sparklingWines");
  const whiteSelect = document.getElementById("whiteWines");
  const roseSelect = document.getElementById("roseWines");
  const redSelect = document.getElementById("redWines");

  // Helper function to populate wine options (with glass and quartino prices)
  function populateWineSelect(wineType, wineSelectElement) {
    const winesArray = wines[wineType];

    winesArray.forEach(wine => {
      const optionGlass = document.createElement("option");
      optionGlass.value = wine.glassPrice;
      optionGlass.textContent = `${wine.name} - Glass: $${wine.glassPrice}`;
      wineSelectElement.appendChild(optionGlass);

      // Check if Quartino price exists for this wine
      if (wine.quartinoPrice) {
        const optionQuartino = document.createElement("option");
        optionQuartino.value = wine.quartinoPrice;
        optionQuartino.textContent = `${wine.name} - Quartino: $${wine.quartinoPrice}`;
        wineSelectElement.appendChild(optionQuartino);
      }
    });
  }

  // Populate each wine category
  populateWineSelect("sparkling", sparklingSelect); // Only glass prices for sparkling
  populateWineSelect("white", whiteSelect);
  populateWineSelect("rose", roseSelect);
  populateWineSelect("red", redSelect);
}

// Call the function to render wine options when the page loads
window.onload = renderWineOptions;
