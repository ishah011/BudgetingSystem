export class Budget {
	public name: string;
	public amount: string;
	public recurring: string;
	public frequency: string;

	constructor(name: string, amount: string, recurring: string, frequency: string){
		this.name = name;
		this.amount = amount;
		this.recurring = recurring;
		this.frequency = frequency;
	}

}
