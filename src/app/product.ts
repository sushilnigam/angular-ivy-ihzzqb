export class Product {
  productName: string = ''
  productDesc: string = ''
    productPrice: number = 0
    quantity?: number = 0
    storehouse?: any = null
    backorderLimit?: number = 0
    backordered? = false
    image?: string = ''
    productId: number = 0

    /*constructor(id, data) {
        console.log('id: ', typeof id)
        this.id = id
        this.name = data.name
        this.description = data.description
        this.price = data.price
        this.quantity = data.quantity
        this.storehouse = data.storehouse
        this.backorderLimit = data.backorderLimit
        this.backordered = data.backordered
        this.image = data.image || ''
    }*/
}