function F21(positions) {
	// Check if position in an Array and if its length is the right size
	if (!Array.isArray(positions) || positions.length != 9) {
		return false;
	}
	// Get the length of the array
	const position_length = positions.length;

	// For each value
	for(let i = 0; i < position_length; i++) {
		// Convert the element into Integer to check its value
		pos_int = parseInt(positions[i])
		if (pos_int < 1 || pos_int > 9 || positions[i] < "1" || positions[i] > "9") {
			return false;
		}
		
		// Check the unicity of the element
		if (positions.indexOf(positions[i]) !== positions.lastIndexOf(positions[i])) {
				return false;
		}	
	}
	
	return true;
}