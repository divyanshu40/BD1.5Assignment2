let express = require("express");
let cors = require("cors");
let app = express();
let PORT = 3000;
app.listen(PORT, () => {
  console.log("The server is running");
});
app.use(cors());
// Endpoint 1: Calculate the Returns of the Stocks added.
function calculateTotalReturnValue(boughtAt, marketPrice, quantity) {
  let returns = (marketPrice - boughtAt) * quantity;
  return returns;
}
app.get("/calculate-returns", (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseInt(req.query.quantity);
  res.send(
    calculateTotalReturnValue(boughtAt, marketPrice, quantity).toString(),
  );
});
// Endpoint 2: Calculate the Total Returns.
function calculateTotalReturns(stock1, stock2, stock3, stock4) {
  let totalReturns = stock1 + stock2 + stock3 + stock4;
  return totalReturns;
}
app.get("/total-returns", (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  res.send(calculateTotalReturns(stock1, stock2, stock3, stock4).toString());
});
// Endpoint 3: Calculate the Return Percentage.
function calculateReturnPercentage(boughtAt, returns) {
  let returnPercentage = (returns / boughtAt) * 100;
  return returnPercentage;
}
app.get("/calculate-return-percentage", (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  res.send(calculateReturnPercentage(boughtAt, returns).toString());
});
// Endpoint 4: Calculate the Total Return Percentage
function calculateTotalReturnPercentage(stock1, stock2, stock3, stock4) {
  let totalReturnPercentage = stock1 + stock2 + stock3 + stock4;
  return totalReturnPercentage;
}
app.get("/total-return-percentage", (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  res.send(
    calculateTotalReturnPercentage(stock1, stock2, stock3, stock4).toString(),
  );
});
// Endpoint 5: Identify the Status of Stocks based on their Return Value
function IdentifyStatus(returnPercentage) {
  let status = "";
  if (returnPercentage > 0) {
    status = "Profit";
  } else {
    status = "Loss";
  }
  return status;
}
app.get("/status", (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  res.send(IdentifyStatus(returnPercentage).toString());
});
