import { createError } from '@directus/errors';
import { defineHook } from '@directus/extensions-sdk';

interface ValidationError {
	code: string;
	field: string;
	type: string;
	message: string;
}

const ValidationError = createError<ValidationError>('FAILED_VALIDATION', 'Validation failed', 400);

export default defineHook(({ filter, action }, { logger }) => {
	filter('teste.items.update', () => {
		logger.info('Updating Item!');

		throw new ValidationError({
			code: 'FAILED_VALIDATION',
			field: 'Qualifications_Upload',
			type: 'custom',
			message: 'Qualifications must EEEEEEE',
		});
	});

	filter('items.create', () => {
		logger.info('Creating Item!');
	});

	action('items.create', () => {
		logger.info('Item created!');
	});
});
