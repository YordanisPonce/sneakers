export class Product {
    private name: string;
    private price: number;
    private photo: string;
    private amount: number;

    constructor(name: string, price: number, photo: string, amount: number) {
        this.name = name;
        this.price = price;
        this.photo = photo;
        this.amount = amount;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
    getPhoto() {
        return this.photo;
    }

    getAmount() {
        return this.amount;
    }

    getTotal() {
        return this.amount * this.price;
    }
}