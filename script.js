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
const wineItems = {
    sparkling: [
      { name: "Adami, Bosco Di Gica, Prosecco Superiore Brut", price5oz: 15 },
      { name: "Contadi Castaldi, Brut Rose’, Franciacorta", price5oz: 18 },
      { name: "Schramsberg, Brut Blanc de Blancs", price5oz: 23 },
      { name: "Lanson, Le Black Label, Brut, Champagne", price5oz: 25 }
    ],
    whiteRose: [
      { name: "Frog’s Leap, Sauvignon Blanc", price5oz: 14, priceQuartino: 18 },
      { name: "Buzzinelli, Pinot Grigio Collio", price5oz: 15, priceQuartino: 18 },
      { name: "Massican, Gemina, Greco Fiano Falanghina Blend", price5oz: 16, priceQuartino: 22 },
      { name: "Cornarea, Roero Arneis", price5oz: 16, priceQuartino: 22 },
      { name: "Frank Family, Chardonnay", price5oz: 17, priceQuartino: 23 },
      { name: "Spottswoode, Sauvignon Blanc", price5oz: 18, priceQuartino: 26 },
      { name: "Antinori Napa Valley, A26, Chardonnay", price5oz: 24, priceQuartino: 40 },
      { name: "Tormaresca, Calafuria, Negroamaro Rosé", price5oz: 11, priceQuartino: 15 },
      { name: "Handwritten, Carignan Blend Rosé", price5oz: 12, priceQuartino: 16 }
    ],
    red: [
      { name: "Villa Calcinaia, Cappone, Chianti Classico", price5oz: 13, priceQuartino: 18 },
      { name: "Cline, Seven Ranchlands, Pinot Noir", price5oz: 13, priceQuartino: 18 },
      { name: "Neyers, Vista Notre, Zinfandel", price5oz: 16, priceQuartino: 25 },
      { name: "Clos du Val, Cabernet Sauvignon", price5oz: 21, priceQuartino: 33 },
      { name: "David Arthur, Proprietary Red", price5oz: 21, priceQuartino: 33 },
      { name: "Flowers, Pinot Noir", price5oz: 21, priceQuartino: 33 },
      { name: "Cavalier Bartolomeo, Barolo Altenasso", price5oz: 22, priceQuartino: 34 }
    ],
    coravin: [
      { name: "Laurent-Perrier, Brut Rose’", price4oz: 40 },
      { name: "Realm, The Bard Riverbound Edition Sauvignon Blanc", price4oz: 25 },
      { name: "Fantesca, Chardonnay", price4oz: 30 },
      { name: "Williams Selyem, Pinot Noir", price4oz: 45 },
      { name: "San Filippo, Brunello di Montalcino", price4oz: 38 },
      { name: "Casa Piena, Cabernet Sauvignon", price4oz: 55 }
    ]
  };


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

    // Reset the table header to its initial state
    const tableHeader = document.getElementById("menuTable").getElementsByTagName("thead")[0];
    tableHeader.innerHTML = `
        <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
        </tr>
    `;

    // Clear the table body and repopulate it with all menu items
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
        quantityInput.addEventListener("input", () => updateLineItemSubtotal(item, index));
    });

    // Reset the menu summary
    const menuSummary = document.getElementById("menuSummary");
    if (menuSummary) {
        menuSummary.innerHTML = "";
    }

    // Show the "Calculate" button
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
        quantityInput.addEventListener("input", () => updateLineItemSubtotal(item, index));
    });
}
function updateSubtotal(item, index) {
    const quantityInput = document.getElementById(`quantity-${index}`);
    const quantity = parseInt(quantityInput.value) || 0; // Default to 0 if input is empty
    const subtotal = item.price * quantity;

    // Update the subtotal cell
    const subtotalCell = document.getElementById(`subtotal-${index}`);
    subtotalCell.innerText = `$${subtotal.toFixed(2)}`;
}
function populateWineTables() {
    const categories = {
        sparkling: "sparklingTable",
        whiteRose: "whiteRoseTable",
        red: "redTable",
        coravin: "coravinTable"
    };

    Object.keys(categories).forEach((category) => {
        const tableBody = document.getElementById(categories[category]).getElementsByTagName("tbody")[0];
        tableBody.innerHTML = ""; // Clear the table body

        wineItems[category].forEach((wine, index) => {
            let sizeColumn = "";

            // Handle fixed serving sizes for Sparkling and Coravin
            if (category === "sparkling") {
                sizeColumn = `<span>5 oz</span>`;
            } else if (category === "coravin") {
                sizeColumn = `<span>4 oz</span>`;
            } else {
                // For White, Rosé, and Red wines, allow dropdown for serving sizes
                const sizeOptions = wine.priceQuartino
                    ? `<option value="5 oz">5 oz</option><option value="Quartino">Quartino</option>`
                    : `<option value="5 oz">5 oz</option>`;
                sizeColumn = `
                    <select id="${category}-size-${index}" class="wine-size">
                        ${sizeOptions}
                    </select>
                `;
            }

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${wine.name}</td>
                <td>${sizeColumn}</td>
                <td><input type="number" id="${category}-quantity-${index}" class="wine-quantity" value=""    inputmode="numeric" 
                        pattern="[0-9]*"  min="0" /></td>
            `;
            tableBody.appendChild(row);

            // Add event listeners to handle user selections
            const quantityInput = document.getElementById(`${category}-quantity-${index}`);
            quantityInput.addEventListener("input", () => wineCalculate());

            if (category !== "sparkling" && category !== "coravin") {
                const sizeSelect = document.getElementById(`${category}-size-${index}`);
                sizeSelect.addEventListener("change", () => wineCalculate());
            }
        });
    });
}

  function updateWineSubtotal(category, wine, index) {
    const sizeSelect = document.getElementById(`${category}-size-${index}`);
    const quantityInput = document.getElementById(`${category}-quantity-${index}`);
    const quantity = parseInt(quantityInput.value) || 0;
  
    let price = 0;
    if (sizeSelect.value === "5 oz") price = wine.price5oz || 0;
    if (sizeSelect.value === "Quartino") price = wine.priceQuartino || 0;
    if (sizeSelect.value === "4 oz") price = wine.price4oz || 0;
  
    const subtotal = price * quantity;
  
    const subtotalCell = document.getElementById(`${category}-subtotal-${index}`);
    if (subtotalCell) {
      subtotalCell.innerText = `$${subtotal.toFixed(2)}`;
    }
  }
function wineCalculate() {
    console.log("wineCalculate function called"); // Debugging: Verify the function is called

    let wineSubtotal = 0;

    // Array to store selected wines
    const selectedWines = [];

    // Iterate through each wine category
    Object.keys(wineItems).forEach((category) => {
        wineItems[category].forEach((wine, index) => {
            const sizeSelect = document.getElementById(`${category}-size-${index}`);
            const quantityInput = document.getElementById(`${category}-quantity-${index}`);
            const quantity = parseInt(quantityInput?.value) || 0;

            let price = 0;

            // Determine the price based on the serving size
            if (sizeSelect && sizeSelect.value === "5 oz") price = wine.price5oz || 0;
            if (sizeSelect && sizeSelect.value === "Quartino") price = wine.priceQuartino || 0;
            if (!sizeSelect && category === "sparkling") price = wine.price5oz || 0; // Fixed 5 oz for Sparkling
            if (!sizeSelect && category === "coravin") price = wine.price4oz || 0; // Fixed 4 oz for Coravin

            // Add to the subtotal
            wineSubtotal += price * quantity;

            // If the wine has a quantity greater than 0, add it to the selected wines
            if (quantity > 0) {
                selectedWines.push({
                    name: wine.name,
                    size: sizeSelect ? sizeSelect.value : category === "sparkling" ? "5 oz" : "4 oz",
                    quantity: quantity,
                    price: price,
                    subtotal: price * quantity
                });
            }

            // Debugging: Log the calculations for each wine
            console.log(`Category: ${category}, Wine: ${wine.name}, Quantity: ${quantity}, Price: ${price}, Subtotal: ${wineSubtotal}`);
        });
    });

    // Get the number of guests for wine pairing
    const wineGuestCount = parseInt(document.getElementById("wineGuestInput")?.value) || 1; // Default to 1
    const winePerPerson = wineSubtotal / wineGuestCount;

    // Debugging: Log the final calculations
    console.log(`Total Wine Subtotal: ${wineSubtotal}, Guests: ${wineGuestCount}, Per Person: ${winePerPerson}`);

    // Update the UI
    document.getElementById("wineTotalPrice").innerText = wineSubtotal.toFixed(2);
    document.getElementById("winePerPersonPrice").innerText = winePerPerson.toFixed(2);

    // Dynamically render the table with only selected wines
function wineCalculate() {
    console.log("wineCalculate function called"); // Debugging: Verify the function is called

    let wineSubtotal = 0;

    // Array to store selected wines
    const selectedWines = [];

    // Iterate through each wine category
    Object.keys(wineItems).forEach((category) => {
        wineItems[category].forEach((wine, index) => {
            const sizeSelect = document.getElementById(`${category}-size-${index}`);
            const quantityInput = document.getElementById(`${category}-quantity-${index}`);
            const quantity = parseInt(quantityInput?.value) || 0;

            let price = 0;

            // Determine the price based on the serving size
            if (sizeSelect && sizeSelect.value === "5 oz") price = wine.price5oz || 0;
            if (sizeSelect && sizeSelect.value === "Quartino") price = wine.priceQuartino || 0;
            if (!sizeSelect && category === "sparkling") price = wine.price5oz || 0; // Fixed 5 oz for Sparkling
            if (!sizeSelect && category === "coravin") price = wine.price4oz || 0; // Fixed 4 oz for Coravin

            // Add to the subtotal
            wineSubtotal += price * quantity;

            // If the wine has a quantity greater than 0, add it to the selected wines
            if (quantity > 0) {
                selectedWines.push({
                    name: wine.name,
                    size: sizeSelect ? sizeSelect.value : category === "sparkling" ? "5 oz" : "4 oz",
                    quantity: quantity,
                    price: price,
                    subtotal: price * quantity
                });
            }

            // Debugging: Log the calculations for each wine
            console.log(`Category: ${category}, Wine: ${wine.name}, Quantity: ${quantity}, Price: ${price}, Subtotal: ${wineSubtotal}`);
        });
    });

    // Get the number of guests for wine pairing
    const wineGuestCount = parseInt(document.getElementById("wineGuestInput")?.value) || 1; // Default to 1
    const winePerPerson = wineSubtotal / wineGuestCount;

    // Debugging: Log the final calculations
    console.log(`Total Wine Subtotal: ${wineSubtotal}, Guests: ${wineGuestCount}, Per Person: ${winePerPerson}`);

    // Update the UI
    document.getElementById("wineTotalPrice").innerText = wineSubtotal.toFixed(2);
    document.getElementById("winePerPersonPrice").innerText = winePerPerson.toFixed(2);

    // Dynamically render the table with only selected wines
    renderSelectedWinesTable(selectedWines);
}}



  document.addEventListener("DOMContentLoaded", () => {
    const collapsibles = document.querySelectorAll(".collapsible");
    collapsibles.forEach((button) => {
        button.addEventListener("click", () => {
            button.classList.toggle("active");
            const content = button.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });

    // Populate wine tables on page load
    populateWineTables();
});
function updateWineQuantity(category, wine, index) {
    const quantityInput = document.getElementById(`${category}-quantity-${index}`);
    const quantity = parseInt(quantityInput.value) || 0;

    let price = 0;

    if (category === "sparkling") {
        price = wine.price5oz || 0; // Fixed 5 oz pour
    } else if (category === "coravin") {
        price = wine.price4oz || 0; // Fixed 4 oz pour
    } else {
        // For White, Rosé, and Red wines, get price based on selected size
        const sizeSelect = document.getElementById(`${category}-size-${index}`);
        if (sizeSelect.value === "5 oz") price = wine.price5oz || 0;
        if (sizeSelect.value === "Quartino") price = wine.priceQuartino || 0;
    }

    // Dynamically update the wine subtotal
    const subtotal = price * quantity;

    // Optional: Log or track the user selection for debugging
    console.log(`Category: ${category}, Wine: ${wine.name}, Quantity: ${quantity}, Price: $${price}, Subtotal: $${subtotal}`);

    // Update the wine total dynamically
    wineCalculate();
}
function resetWineSelections() {
    console.log("Resetting wine selections...");

    // Iterate through each wine category
    Object.keys(wineItems).forEach((category) => {
        wineItems[category].forEach((wine, index) => {
            // Reset quantity input fields
            const quantityInput = document.getElementById(`${category}-quantity-${index}`);
            if (quantityInput) {
                quantityInput.value = ""; // Clear the input field
            }

            // Reset dropdowns to their default values
            const sizeSelect = document.getElementById(`${category}-size-${index}`);
            if (sizeSelect) {
                sizeSelect.selectedIndex = 0; // Reset to the first option
            }
        });
    });

    // Reset the total wine cost and per-person price
    document.getElementById("wineTotalPrice").innerText = "0.00";
    document.getElementById("winePerPersonPrice").innerText = "0.00";

    console.log("Wine selections have been reset.");

    
}

