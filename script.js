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
    { name: "Supplì all‘Amatriciana 3 pc", price: 20.00, type: "Antipasti" },
    { name: "Supplì all‘Amatriciana 5 pc", price: 25.00, type: "Antipasti" },
    { name: "Suppli add 1", price: 5.00, type: "Antipasti" },
    { name: "Pasta Fritta con Prosciutto 5 pc", price: 23.00, type: "Antipasti" },
    { name: "Pasta Fritta con Prosciutto 3 pc", price: 18.00, type: "Antipasti" },
    { name: "Pasta Fritta add 1", price: 5.00, type: "Antipasti" },
    { name: "Tagliere di Formaggi e Salumi", price: 35.00, type: "Antipasti" },
    { name: "Arrosticini con Sotto’aceti", price: 24.00, type: "Antipasti" },
    { name: "Polenta sotto Vetro “Polenta Under Glass”", price: 18.00, type: "Antipasti" },
    { name: "Bruschetta con Crema di Carciofi", price: 18.00, type: "Antipasti" },
    { name: "Risotto del Giorno", price: 44.00, type: "Pasta" },
    { name: "Ricotta Gnocchi della Nonna", price: 28.00, type: "Pasta" },
    { name: "Tagliarini Bolognese al Centro", price: 28.00, type: "Pasta" },
    { name: "Carbonara al Carbone", price: 28.00, type: "Pasta" },
    { name: "Raviolo", price: 28.00, type: "Pasta" },
    { name: "Rigatoni al Coniglio", price: 32.00, type: "Pasta" },
    { name: "Solo Shrimp Pasta", price: 28.00, type: "Pasta" },
    { name: "Fusilli alla Michelangelo", price: 26.00, type: "Pasta" },
    { name: "Spaghetti alla Sophia Loren", price: 28.00, type: "Pasta" },
    { name: "Lasagnetta di Zucchine Fire Time 5 Minutes", price: 26.00, type: "Secondi" },
    { name: "Branzino alla Griglia", price: 39.00, type: "Secondi" },
    { name: "Bistecca alla Fiorentina", price: 165.00, type: "Secondi" },
    { name: "Brodetto ai Frutti di Mare", price: 49.00, type: "Secondi" },
    { name: "Conserva d’ Anatra", price: 47.00, type: "Secondi" },
    { name: "Tomahawk alla Griglia", price: 159.00, type: "Secondi" },
    { name: "Pollo alla Diavola", price: 35.00, type: "Secondi" },
    { name: "Costolette di Manzo", price: 44.00, type: "Secondi" },
    { name: "Cavoletti di Bruxelles Arrostiti Fire Time 8 Minutes", price: 18.00, type: "Contorni" },
    { name: "Polenta Antica Fire Time <3 Minutes", price: 16.00, type: "Contorni" },
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
  // Dynamically add menu items to the table
window.onload = () => {
    const tableBody = document.getElementById("menuTable").getElementsByTagName("tbody")[0];
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
    const selectedItems = {};
  
    // Get the added charges and number of guests
    const addedCharges = parseFloat(document.getElementById("addedCharges").value) || 0; // Default to 0
    const guestCount = parseInt(document.getElementById("guestInput").value) || 1; // Default to 1
  
    // Filter out unselected items and calculate the subtotal
    const selectedMenuItems = menuItems.filter((item, index) => {
      const quantity = parseInt(document.getElementById(`quantity-${index}`).value) || 0; // Default to 0
      if (quantity > 0) {
        subtotal += item.price * quantity;
  
        // Add the quantity to the item object
        item.quantity = quantity;
  
        // Group selected items by category
        if (!selectedItems[item.type]) {
          selectedItems[item.type] = [];
        }
        selectedItems[item.type].push(`${quantity} ${item.name}`);
        return true; // Keep this item in the filtered list
      }
      return false; // Remove this item from the filtered list
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
    selectedMenuItems.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>${item.quantity}</td>
        <td>$${(item.price * item.quantity).toFixed(2)}</td>
      `;
      tableBody.appendChild(row);
    });
  
    // Print the selected menu items
    const menuSummary = document.getElementById("menuSummary");
    menuSummary.innerHTML = "<h3>Here is your menu:</h3>";
    for (const category in selectedItems) {
      menuSummary.innerHTML += `<p><strong>${category}:</strong> ${selectedItems[category].join(", ")}</p>`;
    }
    menuSummary.innerHTML += `<p><strong>Per Person Price:</strong> $${perPersonPrice.toFixed(2)}</p>`;
  }
  
  // Reset all values to default
  function resetTable() {
    const confirmReset = confirm("Are you sure you want to reset?");
    if (!confirmReset) return;
  
    // Clear added charges and guest input
    document.getElementById("addedCharges").value = "";
    document.getElementById("guestInput").value = "";
  
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
  
    // Reset totals
    document.getElementById("totalPrice").innerText = "0.00";
    document.getElementById("perPersonPrice").innerText = "0.00";
  
    // Clear the menu summary
    document.getElementById("menuSummary").innerHTML = "";
  }
  function calculateTotal() {
    let subtotal = 0;
    const selectedItems = {};
  
    // Get the added charges and number of guests
    const addedCharges = parseFloat(document.getElementById("addedCharges").value) || 0; // Default to 0
    const guestCount = parseInt(document.getElementById("guestInput").value) || 1; // Default to 1
  
    // Filter out unselected items and calculate the subtotal
    const selectedMenuItems = menuItems.filter((item, index) => {
      const quantity = parseInt(document.getElementById(`quantity-${index}`).value) || 0; // Default to 0
      if (quantity > 0) {
        subtotal += item.price * quantity;
  
        // Add the quantity to the item object
        item.quantity = quantity;
  
        // Group selected items by category
        if (!selectedItems[item.type]) {
          selectedItems[item.type] = [];
        }
        selectedItems[item.type].push(`${quantity} ${item.name}`);
        return true; // Keep this item in the filtered list
      }
      return false; // Remove this item from the filtered list
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
    selectedMenuItems.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>${item.quantity}</td>
        <td>$${(item.price * item.quantity).toFixed(2)}</td>
      `;
      tableBody.appendChild(row);
    });
  
    // Print the selected menu items
    const menuSummary = document.getElementById("menuSummary");
    menuSummary.innerHTML = "<h3>Here is your menu:</h3>";
    for (const category in selectedItems) {
      menuSummary.innerHTML += `<p><strong>${category}:</strong> ${selectedItems[category].join(", ")}</p>`;
    }
    menuSummary.innerHTML += `<p><strong>Per Person Price:</strong> $${perPersonPrice.toFixed(2)}</p>`;
  
    // Show the "Make Changes" button
    document.getElementById("makeChangesBtn").style.display = "inline-block";
  }
  
  function makeChanges() {
    // Repopulate the table with all menu items and their input fields
    const tableBody = document.getElementById("menuTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = ""; // Clear the table body
    menuItems.forEach((item, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td><input type="number" id="quantity-${index}" class="quantity" value="${item.quantity || 0}" min="0" /></td>
        <td id="subtotal-${index}">$${(item.price * (item.quantity || 0)).toFixed(2)}</td>
      `;
      tableBody.appendChild(row);
  
      // Add event listener to update subtotal dynamically
      const quantityInput = document.getElementById(`quantity-${index}`);
      quantityInput.addEventListener("input", () => updateLineItemSubtotal(item, index));
    });
  
    // Hide the "Make Changes" button
    document.getElementById("makeChangesBtn").style.display = "none";
  
    // Clear the menu summary
    document.getElementById("menuSummary").innerHTML = "";
  }