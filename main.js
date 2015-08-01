(function() {
	var jira_person_header_class_name = '.ghx-heading';
	
	// Removes spaces from a string
	function slugify (str) {
		return str.replace(/ /g, '');
	}
	
	Array.prototype.forEach.call(
		document.querySelectorAll(jira_person_header_class_name),
		function(element) {
			element.setAttribute('id', slugify(element.firstChild.textContent));
			console.log(element);
		}
	);
})();
