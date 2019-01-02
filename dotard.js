// Lightning exercises


// const outEl = document.querySelector("#output")

// outEl.innerHTML = "<h1>Active Businesses</h1>"

// businesses.forEach(business => {
//     let zip = "addressZipCode";

//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//       ${business.addressCity}, ${business["addressStateCode"]} ${business[zip]}
//     </section>
//   `
//   outEl.innerHTML += "<hr/>"
// });

// const newYorkBusinesses = businesses.filter(business => {
//     let inNewYork = false

//     if (business.addressStateCode === "NY") {
//         inNewYork = true
//     }

//     return inNewYork
//   });

// const newYorkBusinesses = businesses.filter(business => business.addressStateCode === "NY")
// This is the one line version.  Everything following the => must return a boolean.  Can string multiple conditions with &&, ||, etc...

// outEl.innerHTML = "<h1>New York Businesses</h1>"

// newYorkBusinesses.forEach(business => {
//     let zip = "addressZipCode";

//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//       ${business.addressCity}, ${business["addressStateCode"]} ${business[zip]}
//     </section>
//   `
//   outEl.innerHTML += "<hr/>"
// });

// const manufacturingBusinesses = businesses.filter(business => business.companyIndustry === "Manufacturing")

// outEl.innerHTML = "<h1>Manufacturing Businesses</h1>"

// manufacturingBusinesses.forEach(business => {
//     let zip = "addressZipCode";

//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//       ${business.addressCity}, ${business["addressStateCode"]} ${business[zip]}
//     </section>
//   `
//   outEl.innerHTML += "<hr/>"
// });

// outEl.innerHTML += "<h1>Purchasing Agents</h1>";

// const agents = businesses.map(business => {
//     let agent = {

//         "fullName": `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
//         "company": business.companyName,
//         "phoneNumber": business.phoneWork
//     }

//     return agent
// })

// console.table(agents)

// agents.forEach(agent => {
//     // let name = agent.fullName;
//     // let company = agent.company;
//     // let phone = agent.phoneNumber;

//   outEl.innerHTML += `<h2>${agent.fullName}</h2>
//   <h3>${agent.company}</h3>
//   <h3>${agent.phoneNumber}</h3>`;
//   outEl.innerHTML += "<hr/>";
// });

// document
// .querySelector("#companySearch")
// .addEventListener("keypress", keyPressEvent => {
//     if (keyPressEvent.charCode === 13) {
//         /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//         const foundBusiness = businesses.find(
//             business =>
//                 business.companyName.includes(keyPressEvent.target.value)
//         );

//         outEl.innerHTML = `
//             <h2>
//             ${foundBusiness.companyName}
//             </h2>
//             <section>
//             ${foundBusiness.addressFullStreet}

//             </section>
//             <section>
//             ${foundBusiness.addressCity},
//             ${foundBusiness.addressStateCode}
//             ${foundBusiness.addressZipCode}
//             </section>
//         `;
//     }
// });
// document
//     .querySelector("#agentSearch")
//     .addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//             /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//             const foundBusiness = businesses.find(
//                 business =>
//                     business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value) || business.purchasingAgent.nameLast.includes(keyPressEvent.target.value)
//             );

//             outEl.innerHTML = `
//                 <h2>
//                 ${foundBusiness.purchasingAgent.nameFirst} ${foundBusiness.purchasingAgent.nameLast}
//                 </h2>
//                 <p>${foundBusiness.phoneWork}</p>`;
//         }
//     });

// businesses.forEach(business => {

//     /* CALCULATE ORDER SUMMARY */

//     let totalOrders = business.orders.reduce(
//         (currentTotal, nextValue) => currentTotal += nextValue,
//         0).toFixed(2);

//     outEl.innerHTML += `
//         <h2>
//             ${business.companyName}
//             ($${totalOrders})
//         </h2>
//         <section>
//             ${business.addressFullStreet}
//         </section>
//         <section>
//             ${business.addressCity},
//             ${business.addressStateCode}
//             ${business.addressZipCode}
//         </section>
//     `;
//     outEl.innerHTML += "<hr/>";
// });
// const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

// const totalRainfall = monthlyRainfall.reduce((currentRainfall, next)=> currentRainfall + next);

// console.log(`Total Rainfall = ${totalRainfall}`)

// const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

// const wholeSentence = words.reduce((currentSentence, next)=> currentSentence +` ${next}`);
// console.log(`The whole sentence = ${wholeSentence}`)


