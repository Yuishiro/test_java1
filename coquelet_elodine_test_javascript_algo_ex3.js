// Change if the table contains at least one error
var is_Correct = true;

// Create the content of the error table for the document
var html_table = "";

function display_error(error, row) {
	// The document contains at least one error
	is_Correct = false;
	
	// Get the length of the row
	const row_length = row.length;
	
	// Write the error into html_table
	html_table += "<tr>";
    html_table += "<td>" + error + "</td>";
	
	// Write the walue of the row into the table
	for (let i = 0; i < row_length; i++) 
	{
		html_table +="<td>" + row[i] + "</td>";
	}
	html_table += "</tr>";
}

function F31(to_check) {
	// Get the length of the array
	const to_check_length = to_check.length;
	
	for(let i = 0; i < to_check_length; i++) {
		// Check if the Line is valid
		if(!F21(to_check[i])){
			display_error(`Line ${i + 1} incorrect`, to_check[i]);
		}
	}
}

function F32(to_check) {
	// Get the length of the array
	const to_check_length = to_check.length;
	
	for (let i = 0; i < to_check_length; i++) {
		let col = new Array(9);
		for (let j = 0; j < to_check_length; j++) {
			col[j] = to_check[j][i];
		}
		// Check if the Column is valid
		if(!F21(col)){
			display_error(`Column ${i + 1} incorrect`, col);
		}
	}
}

// Return a row of dim 3 extract from the row of the table
function get_reg_row(row, start, end) {
	return row.slice(start, end)
}

function F33(to_check) {
	// Get the length of the array
	const to_check_length = to_check.length;
	
	// Keep tract of region we are in
	let region_number = 0;
	
	// For each 3 row (height of a region)
	for (let row = 0; row < to_check_length; row += 3) {
		// For each 3 columns of a region
	    for (let col = 0; col < 3; col++) {
			
			// Update the number of the region
			region_number++;
			// Create a new region
	        let reg = [];
			
			// For each row of the region
	        for (let i = 0; i < 3 ; i++) {
	            reg = reg.concat(get_reg_row(to_check[row + i], col * 3, col * 3 + 3));
	        }
			
			// Check if the Region is valid
			if(!F21(reg)){
				display_error(`Region ${region_number} incorrect`, reg);
			}
		}
	}
}
