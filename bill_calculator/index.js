function calculateBill() {
    const units = parseFloat(document.getElementById('units').value);
    let rate = 0;
    let bill = 0;
    let cgst = 0;
    let totalBill = 0;

    if (units <= 100) {
        rate = 0.25;
    } else if (units <= 300) {
        rate = 3.25;
    } else if (units <= 500) {
        rate = 5.25;
    } else if (units <= 700) {
        rate = 7.25;
    } else if (units <= 1000) {
        rate = 9.25;
    } else if (units <= 2000) {
        rate = 18.50;
    } else if (units <= 4000) {
        rate = 22.50;
    } else if (units <= 5000) {
        rate = 25.50;
    } else {
        rate = 30.50;
    }

    bill = units * rate;
    cgst = bill * 0.08;

    totalBill = bill + cgst;

    document.getElementById('result').innerHTML = `
        <p>Units Consumed: ${units}</p>
        <p>Rate per Unit: ₹${rate.toFixed(2)}</p>
        <p>Bill Amount: ₹${bill.toFixed(2)}</p>
        <p>CGST (8%): ₹${cgst.toFixed(2)}</p>
        <p><strong>Total Bill: ₹${totalBill.toFixed(2)}</strong></p>
    `;
}
