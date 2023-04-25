const validateLoginForm = (form) => {
	const errors = {};
	const emailPatron = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	const passwordPatron = /^(?=.*\d).+$/;

	if (!form.email.trim()) errors.email = 'Ingrese un email';
	else if (!emailPatron.test(form.email)) errors.email = 'Enter a valid Email';
	else if (form.email.length > 35)
		errors.email = "Email shouldn't have more than 35 characters";

	if (!form.password.trim()) errors.password = 'Enter a password';
	else if (!passwordPatron.test(form.password))
		errors.password = 'aA least one number and one special character';
	else if (form.password.length < 6 || form.password.length > 10)
		errors.password = 'Password must be between 6 and 10 characters';

	return errors;
};

export { validateLoginForm };
