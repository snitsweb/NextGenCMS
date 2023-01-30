export class CreatePageDto {
	name: string
	status: 'active' | 'inactive'
	path: string
	alias: string
	title: string
	description: string
	value: object

}
