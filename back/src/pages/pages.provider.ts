import { Page } from './entities/page.entity'

export const pagesProviders = [
	{
		provide: 'PAGES_REPOSITORY',
		useValue: Page,
	},
]
