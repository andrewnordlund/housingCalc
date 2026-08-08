var calcBtn = null;
calcBtn = document.getElementById("calculateBtn");
if (calcBtn) {
	addListener ("click", calcBtn, calculate);
} else {
	console.log("Didn't get calcButon");
}

function calculate () {
	var B, c, L, n, dp, pr = null;

	B = document.getElementById("housePrice").value;
	c = (document.getElementById("interestRate").value/100)/12;
	dp = document.getElementById("downpayment").value;
	n = document.getElementById("amortRate").value;
	pr = document.getElementById("payRate").value;

	var interest = 0;
	var br = B - dp;

	var table = null;
	table = document.getElementById("mortTable");
	if (table && B && c && dp && n) {
		for (var i = 1; i <= n; i++) {
			var newTBody = document.createElement("tbody");
			for (j = 1; j <= 12; j++) {
				interest = br * c;
				br = br + interest - pr;
				var newTR = document.createElement("tr");
				var newYear=document.createElement("td");
				newYear.appendChild(document.createTextNode(i + " (" + j + ")"));
				newTR.appendChild(newYear);
			
				var newBalance=document.createElement("td");
				newBalance.appendChild(document.createTextNode(br.toFixed(2)));
				newTR.appendChild(newBalance);
			
				var newInterest=document.createElement("td");
				newInterest.appendChild(document.createTextNode(interest.toFixed(2)));
				newTR.appendChild(newInterest);

				var newPrincipal=document.createElement("td");
				newPrincipal.appendChild(document.createTextNode(br.toFixed(2)));
				newTR.appendChild(newPrincipal);

				newTBody.appendChild(newTR);
			}
			
			table.appendChild(newTBody);
		}
	} else {
		console.log("Couldn't get table, or something");
	}
}
