export class Product {
  public id: number;
  public title: string;
  public description: string;
  public imgPath: string;
  public price: number;

  constructor(
    id: number,
    title: string,
    desc: string,
    imgPath: string,
    price: number
  ) {
    this.id = id;
    this.title = title;
    this.description = desc;
    this.imgPath = imgPath;
    this.price = price;
  }
}
