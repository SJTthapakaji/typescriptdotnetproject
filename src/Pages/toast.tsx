import toast, { Toaster } from 'react-hot-toast';
const notify = (message:any) => toast(message);
const notifySuccess = (message:any) => toast(message);
const notifyError = (message:any) => toast(message);
const notifyInfo = (message:any) => toast(message);

export {notify,notifySuccess,notifyError,notifyInfo};