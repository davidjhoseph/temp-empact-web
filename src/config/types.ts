export type HTMLInputTypeAttribute =
	| 'number'
	| 'search'
	| 'button'
	| 'time'
	| 'image'
	| 'text'
	| 'tel'
	| 'checkbox'
	| 'color'
	| 'date'
	| 'datetime-local'
	| 'email'
	| 'file'
	| 'hidden'
	| 'month'
	| 'password'
	| 'radio'
	| 'range';


	export enum StatusType {
		APPROVED = 'approved',
		PENDING = 'pending',
		REJECTED = 'rejected'
	}

	export type LayoutDirection = "rtl" | "ltr";

	export class UserModel {
		id: number;
		email: string;
		firstName: string;
		lastName: string;
		image: string;
	
		constructor(jsonData: Record<string | number, any>) {
			this.id = jsonData.id;
			this.email = jsonData.email;
			this.lastName = jsonData.lastName;
			this.firstName = jsonData.firstName;
			this.image = jsonData.user_image;
		}
	}
