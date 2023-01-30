export abstract class Section {
	value: object
	static schema: object

	protected constructor(alias: string, value?: object) {
		this.value = value || {}
	}
}