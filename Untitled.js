<script type=“staff”>
	function isStaff(name) {
		return (name === "I");
	}

	function person(name) {
		if (isStaff()) {
			alert(`${name} can help.`);
		} else {
			alert(`${name} have questions.`);
 		}
    	}

	person("I");
	person("You");
</script>
