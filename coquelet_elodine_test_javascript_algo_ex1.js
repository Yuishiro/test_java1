// Create an array of dim 9 to be filled with multiple array of dim 9
let to_verify = new Array(9);

function F11(table_digits, to_check) {
	// Get the length of the array
	const table_length = table_digits.length;
	
	for(let i = 0; i < table_length; i++) {
		// Create a table based on the row i
		to_check[i] = table_digits[i].split(" ");
	}
}

function F12(to_be_verify) {
	// Create the table in the html document
	document.write("<table border=on>");
	
	// Get the length of the array
	const verify_length = to_be_verify.length;
	
	for (let i = 0; i < verify_length; i++) 
	{
		// Write each row in the document
		document.write("<tr>");
		// Write each item in the document
		for (let j = 0; j < verify_length; j++) {
			document.write("<td>" + to_be_verify[i][j] + "</td>");
		}
		document.write("</tr>");
	}
	
	document.write("</table>");
}