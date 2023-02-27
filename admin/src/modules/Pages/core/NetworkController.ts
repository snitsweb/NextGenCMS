export class PagesNetworkController {
    static updatePage (alias: string, data: PageData) {
        return window.app.nc.http.patch(`/pages/${alias}`, data)
    }

    static createPage (data: PageData) {
        return window.app.nc.http.post(`/pages`, data)
    }

    static getPage (alias: string) {
        return window.app.nc.http.get(`/pages/${alias}`)
    }
}

type PageData = {
  path?: string,
  alias?: string,
  name?: string,
  status?: string,
  title?: string,
  description?: string,
  schema?: string,
  value?: object,
  config?: object
}
