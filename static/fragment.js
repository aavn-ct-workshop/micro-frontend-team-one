class OneWallet extends HTMLElement {
  total = 10_000_000;

  connectedCallback() {
    this.remain = this.total;
    window.addEventListener("team-three-update-total", (e) => {
      var amount = e.detail.amount;
      this.remain = this.total - amount;
      this.render();
      this.notifyCurrentAmount(this.remain);
    });
    this.render();
  }
  render() {
    let formatRemainingAmount = parseInt(this.remain).toLocaleString(); 
    this.innerHTML = `<div class="current-amount"> $${formatRemainingAmount} </div>`;
  }

  notifyCurrentAmount(remain) {
    this.dispatchEvent(
      new CustomEvent("team-one-current-amount", {
          bubbles: true,
          detail: { 'amount': this.remain }
      })
    )
  }

}
window.customElements.define("one-wallet", OneWallet);

class OneBanner extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `<div class="banner stripe">
    <img alt="Image of Bill Gates"
      src="https://aspenideasfestival.imgix.net/null1f7090e6-c2b5-4d8d-b979-da4658c431b2/Gates_Bill_AIF2020.jpg?auto=compress%2Cformat&fit=min&fm=jpg&h=290&q=80&rect=0%2C0%2C1000%2C1000&w=290"
      class="banner-image center">
      <h3 class="banner-head">
        Spend Bill Gates's Money
          </h3>
      </div>`;
  }
}
window.customElements.define("one-banner", OneBanner);