import {
	ValidationArguments,
	ValidatorConstraint,
	ValidatorConstraintInterface
} from 'class-validator'
import { SendOtpRequest } from 'src/modules/auth/dto'

@ValidatorConstraint({ name: 'IdentifierValidator', async: false })
export class IdentifierValidator implements ValidatorConstraintInterface {
	public validate(value: string, args: ValidationArguments): boolean {
		const object = args.object as SendOtpRequest

		if (object.type === 'email') {
			return (
				typeof value === 'string' &&
				/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
			)
		} else if (object.type === 'phone') {
			return (
				typeof value === 'string' &&
				/^\+(?:[0-9]●?){6,14}[0-9]$/.test(value)
			)
		}

		return false
	}

	public defaultMessage(args: ValidationArguments): string {
		const object = args.object as SendOtpRequest

		if (object.type === 'email') return 'identifier must be a valid email'
		if (object.type === 'phone')
			return 'identifier must be a valid phone number'

		return 'Invalid identifier'
	}
}
