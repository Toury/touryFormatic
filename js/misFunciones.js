$.validator.setDefaults({
	submitHandler: function() { alert("Enviado!!"); }
});

$().ready(function() {
	// validate the comment form when it is submitted
	$("#commentForm").validate();
	
	// validate signup form on keyup and submit
	$("#signupForm").validate({
		rules: {
			firstname: "required",
			lastname: "required",
			username: {
				required: true,
				minlength: 2
			},
			password: {
				required: true,
				minlength: 5
			},
			confirm_password: {
				required: true,
				minlength: 5,
				equalTo: "#password"
			},
			email: {
				required: true,
				email: true
			},
			topic: {
				required: "#newsletter:checked",
				minlength: 2
			},
			agree: "required"
		},
		messages: {
			firstname: "Por favor Introduce tu Nombre",
			lastname: "Por favor introduce tu Primer Apellido",
			username: {
				required: "Por favor introduce tu Segundo Apellido",
				minlength: "Tu Segundo Apellido debe contener al menos 2 caracteres"
			},
			password: {
				required: "Por favor introduce un Password",
				minlength: "Tu password debe tener al menos 5 caracteres de longitud"
			},
			confirm_password: {
				required: "Por favor introduce un Password",
				minlength: "Tu password debe tener al menos 5 caracteres de longitud",
				equalTo: "Por favor vuelve a introducir el mismo password"
			},
			email: "Por favor, introduce un email válido",
			agree: "Por favor, acepta nuestra política"
		}
	});
	
	// propose username by combining first- and lastname
	$("#username").focus(function() {
		var firstname = $("#firstname").val();
		var lastname = $("#lastname").val();
		if(firstname && lastname && !this.value) {
			this.value = firstname + "." + lastname;
		}
	});
	
	//code to hide topic selection, disable for demo
	var newsletter = $("#newsletter");
	// newsletter topics are optional, hide at first
	var inital = newsletter.is(":checked");
	var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
	var topicInputs = topics.find("input").attr("disabled", !inital);
	// show when newsletter is checked
	newsletter.click(function() {
		topics[this.checked ? "removeClass" : "addClass"]("gray");
		topicInputs.attr("disabled", !this.checked);
	});
});