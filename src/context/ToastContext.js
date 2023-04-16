import { createContext, useEffect, useState } from 'react';

export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
	const [toastList, setToastList] = useState([]);

	const addToast = (toast) => {
		toast.id = crypto.randomUUID();
		setToastList([...toastList, toast]);
	};

	const deleteToast = (id) => {
		const filter = toastList.filter((toast) => toast.id !== id);
		setToastList([...filter]);
	};

	const data = { toastList, addToast, deleteToast };

	return <ToastContext.Provider value={data}>{children}</ToastContext.Provider>;
};

export default ToastProvider;
