export class Expense {
	public date: string;
	public category: string;
	public price: string;
	public location: string;

	constructor(date: string, category: string, price: string, location: string){
		this.date = date;
		this.category = category;
		this.price = price;
		this.location = location;
	}

}
