export class Product {
  constructor(
    public id: number,
    public title: string,
    public desc: string,
    public price: number,
    public qty: number,
    public imgUrls: string[]
  ) {}
}
