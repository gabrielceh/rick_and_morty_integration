const validateLoginForm = (form) => {
	const errors = {};
	const emailPatron = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	const passwordPatron = /^(?=.*\d).+$/;

	if (!form.email.trim()) errors.email = 'Ingrese un email';
	else if (!emailPatron.test(form.email))
		errors.email = 'Ingrese un email valido';
	else if (form.email.length > 35)
		errors.email = 'El email no puede tener mas de 35 caracteres';

	if (!form.password.trim()) errors.password = 'Ingrese una contraseña';
	else if (!passwordPatron.test(form.password))
		errors.password = 'Al menos un numero y sin simbolos especiales';
	else if (form.password.length < 6 || form.password.length > 10)
		errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';

	return errors;
};

export { validateLoginForm };
