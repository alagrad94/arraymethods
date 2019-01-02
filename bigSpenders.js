const outEl = document.querySelector("#output")

const bigSpenders = businesses.filter(business => business.orders.some(x => x >= 9000))

outEl.innerHTML = "<h1>Big Spenders</h1>"

bigSpenders.forEach(business => {
    let zip = "addressZipCode";

  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
    <section>
      ${business.addressCity}, ${business["addressStateCode"]} ${business[zip]}
    </section>
  `
  outEl.innerHTML += "<hr/>"
});