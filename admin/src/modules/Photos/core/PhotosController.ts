import {Controller} from 'common/core/Module/Controller'

export interface IControllerLoadedPhoto {
	path: string,
	name: string
}

export class PhotosController extends Controller{
	static controllerName = 'controller'

	init() {
		super.init()
		window.photosController = this
	}

	getLoadedPhotos () :IControllerLoadedPhoto[] {
		// this.axios.get()
		const photos = [
			{
				path: 'https://i.ibb.co/R3JhM0J/Group-1-min.jpg',
				name: 'Group-1'
			},
			{
				path: 'https://i.ibb.co/VDnKX0R/Group-3-min.jpg',
				name: 'Group-2'
			},
			{
				path: 'https://i.ibb.co/zrQR45k/Group-8-min.jpg',
				name: 'Group-3'
			},
			{
				path: 'https://i.ibb.co/9vqcJK3/Group-4-min.jpg',
				name: 'Group-4'
			},
			{
				path: 'https://i.ibb.co/KL295kL/Group-7-min.jpg',
				name: 'Group-5'
			},
			{
				path: 'https://i.ibb.co/c6Kpn9Z/Group-5-min.jpg',
				name: 'Group-6'
			},
			{
				path: 'https://i.ibb.co/vJzpDGF/Group-6-min.jpg',
				name: 'Group-7'
			}
		]

		return photos
	}
}