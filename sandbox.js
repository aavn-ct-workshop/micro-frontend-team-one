const fakeProducts = {	
    airpods: { name: "Airpods", price: "199", img: "airpods.jpg" },	
    shoe: { name: "Air Jordans", price: "125", img: "air-jordans.jpg" },	
    iphone: { name: "Smartphone", price: "699", img: "smartphone.jpg" },	
    book: { name: "Book", price: "15", img: "book.jpg" },	
    bike: { name: "Bike", price: "800", img: "bike.jpg" },	
    videoGame: { name: "Gaming Console", price: "299", img: "video-game.jpg" }	
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
                        <button class="buy-button pure-button pure-button-primary" data-product="${key}">Buy</button>
                    </div>
                </div>
            </div>`;
    }
}

