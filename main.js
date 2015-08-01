(function() {
	var jira_person_header_class_name = '.ghx-heading';
	var person_headers;
	
	// Removes spaces from a string
	function slugify (str) {
		return str.replace(/ /g, '');
	}
	
	function do_when (when, action) {
		var timeout;
		
		window.clearTimeout(timeout);
		
		if (when()) {
			action();
		}
		else {
			timeout = window.setTimeout(function() {
				do_when(when, action)
			}, 500);
		}
	}
	
	do_when(
		function() {
			person_headers = document.querySelectorAll(jira_person_header_class_name);
			return person_headers.length;
		},
		function () {
			Array.prototype.forEach.call(
				person_headers,
				function(element) {
					element.setAttribute('id', slugify(element.firstChild.textContent));
				}
			);
		}
	);
})();
