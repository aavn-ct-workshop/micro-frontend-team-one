const fakeProducts = {	
    "rolex": { name: "Rolex", price: 150000, img: "rolex.jpg" },
    "ford-f-150": { name: "Ford F-150", price: 300000, img: "ford-f-150.jpg" },
    "tesla": { name: "Tesla", price: 750000, img: "tesla.jpg" },
    "monster-truck": { name: "Monster Truck", price: 1500000, img: "monster-truck.jpg" },
    "ferrari": { name: "Ferrari", price: 2500000, img: "ferrari.jpg" },
    "single-family-home": { name: "Single Family Home", price: 3000000, img: "single-family-home.jpg" }
}

// Init sandbox products
var pricingTables = document.getElementById("pricing-tables");
for (const key in fakeProducts) {
    if (fakeProducts.hasOwnProperty(key)) {
        const element = fakeProducts[key];
        pricingTables.innerHTML += `
            <div class="pure-u-1 pure-u-md-1-3">
                <div class="pricing-table dummy-product stripe">
                    <div class="pricing-table-header">
                        <span class="pricing-table-price">Fake ${element.name} ${element.price}$</span>
                    </div>
                    <div class="pricing-table-footer">
                        <button class="sell-button pure-button" data-product="${key}">Sell</button>
                        <button class="buy-button pure-button pure-button-primary" data-product="${key}" data-price="${element.price}">Buy</button>
                    </div>
                </div>
            </div>`;
    }
}

// Simulate case team 3 update receipt total
document.getElementsByClassName('dummy-total-1000000')[0]?.addEventListener("click", () => {
    this.dispatchEvent(
        new CustomEvent("team-three-update-total", {
            bubbles: true,
            detail: { 'amount': 1000000 }
        })
    );
});

document.getElementsByClassName('dummy-total-9999999')[0]?.addEventListener("click", () => {
    this.dispatchEvent(
        new CustomEvent("team-three-update-total", {
            bubbles: true,
            detail: { 'amount': 9999999 }
        })
    );
});

// Simulate case team 1 receive current amount
window.addEventListener("team-one-current-amount", (e) => {
    let buyButtons = document.getElementsByClassName('buy-button');
    for (var i = 0; i < buyButtons.length; i++) {
        if (buyButtons[i]?.getAttribute("data-price") > e.detail['amount']) {
            buyButtons[i]?.classList.add('button-disable');
        } else {
            buyButtons[i]?.classList.remove('button-disable');
        }
    }
});

