export class Product {
    constructor(
        id, 
        categoryId, 
        title, 
        image,
        price
    ){
        this.id         = id;
        this.categoryId = categoryId;
        this.title      = title;
        this.image      = image;
        this.price      = price
    }
} 

export class Category {
    constructor(
        id,
        title,
        image
    ){
        this.id    = id;
        this.title = title;
        this.image = image;
    }
}