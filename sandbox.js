const fakeProducts = {	
    airpods: { name: "Airpods", price: "199000", img: "airpods.jpg" },	
    shoe: { name: "Air Jordans", price: "125000", img: "air-jordans.jpg" },	
    iphone: { name: "Smartphone", price: "699000", img: "smartphone.jpg" },	
    book: { name: "Book", price: "15000", img: "book.jpg" },	
    bike: { name: "Bike", price: "800000", img: "bike.jpg" },	
    videoGame: { name: "Gaming Console", price: "299000", img: "video-game.jpg" }	
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

