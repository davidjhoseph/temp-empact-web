import { clearToasts, createToast, ToastContent, ToastOptions } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

class Toast {
	info(content: ToastContent): void {
		this.display(content, {
			type: 'info',
		});
	}

	error(content: ToastContent): void {
		this.display(content, {
			type: 'danger',
		});
	}

	success(content: ToastContent): void {
		this.display(content, {
			type: 'success',
		});
	}

	warn(content: ToastContent): void {
		this.display(content, {
			type: 'warning',
		});
	}

	display(content: ToastContent, options?: ToastOptions | undefined): void {
		const opts = Object.assign({
			position: 'top-right',
		}, options);
		createToast(content, { ...opts, showIcon: true });
	}

	clearAll() {
		clearToasts();
	}
}

export default new Toast();
