
function calculateMoney(ticketSales) {
    if (typeof ticketSales !== "number" || ticketSales <= 0) {
      return "Invalid Number";
    } else {
      const perTicketPrice = 120;
      const dailyCost = 500 + (50 * 8);
  
      const totalAmount = ticketSales * perTicketPrice;
  
      const afterDailyStay = totalAmount - dailyCost;
  
      return afterDailyStay;
    }
  }
const result = calculateMoney(-130);
console.log(result);