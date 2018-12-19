// Total profit for 2017

let totalProfit = salesInfo.map(y => y.gross_profit).reduce((x , next) => x + next);
console.log (`Total Profit for 2017 was $${totalProfit}`)
console.log (`--------------------------------------------`)

// In which month did they sell the most cars?
let monthNum = salesInfo.map(x => (`${x.purchase_date.charAt(5)}${x.purchase_date.charAt(6)}`))
let countByMonth = monthNum.reduce(function (acc, curr) {
    if (typeof acc[curr] == 'undefined') {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});

let highestMonth = Object.keys(countByMonth).reduce((a, b) => countByMonth[a] > countByMonth[b] ? a : b);

    switch (highestMonth) {
    case "01":
        console.log("The highest number of sales occured in January")
        break;
    case "02":
        console.log("The highest number of sales occured in February")
        break;
    case "03":
        console.log("The highest number of sales occured in March")
        break;
    case "04":
        console.log("The highest number of sales occured in April")
        break;
    case "05":
        console.log("The highest number of sales occured in May")
        break;
    case "06":
        console.log("The highest number of sales occured in June")
        break;
    case "07":
        console.log("The highest number of sales occured in July")
        break;
    case "08":
        console.log("The highest number of sales occured in August")
        break;
    case "09":
        console.log("The highest number of sales occured in September")
        break;
    case "10":
        console.log("The highest number of sales occured in October")
        break;
    case "11":
        console.log("The highest number of sales occured in November")
        break;
    case "12":
        console.log("The highest number of sales occured in December")
        break;
    default:
        break;
    }
    console.log (`--------------------------------------------`)

// Which salesperson sold the most cars?
let salesPerson = salesInfo.map(x => (`${x.sales_agent.first_name} ${x.sales_agent.last_name}`))
let countBySalesPerson = salesPerson.reduce(function (acc, curr) {
    if (typeof acc[curr] == 'undefined') {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});

let highestSeller = Object.keys(countBySalesPerson).reduce((a, b) => countBySalesPerson[a] > countBySalesPerson[b] ? a : b);

console.log(`${highestSeller} sold the most cars.`)
console.log (`--------------------------------------------`)
// Which salesperson made the most profit?
let salesPersonProfit = salesInfo.map(x => ({agent : `${x.sales_agent.first_name} ${x.sales_agent.last_name}`, profit: parseInt(`${x.gross_profit}` , 10)}))

let profitBySalesPerson = salesPersonProfit.reduce(function (acc, curr) {
    if (typeof acc[curr.agent] == 'undefined') {

        acc[curr.agent] = curr.profit;

    } else {

        acc[curr.agent] += curr.profit;

    }
    return acc;
  });
// console.log(profitBySalesPerson)
let profitSeller = Object.keys(profitBySalesPerson).reduce((a, b) => profitBySalesPerson[a] > profitBySalesPerson[b] ? a : b);

console.log(`${profitSeller} had the highest profit.`)
console.log (`--------------------------------------------`)
// Which model was the most popular?

let soldModel = salesInfo.map(x => (`${x.vehicle.model}`))
let countByModel = soldModel.reduce(function (acc, curr) {
    if (typeof acc[curr] == 'undefined') {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});
let bestSeller = Object.keys(countByModel).reduce((a, b) => countByModel[a] > countByModel[b] ? a : b);

console.log(`${bestSeller} was the best selling model.`)
console.log (`--------------------------------------------`)
// Which bank provided the most loans to our customers?

let bankUsed = salesInfo.map(x => (`${x.credit.credit_provider}`))
let countByBank = bankUsed.reduce(function (acc, curr) {
    if (typeof acc[curr] == 'undefined') {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});
let mostUsed = Object.keys(countByBank).reduce((a, b) => countByBank[a] > countByBank[b] ? a : b);

console.log(`${mostUsed} was the bank used by the most customers.`)
console.log (`--------------------------------------------`)