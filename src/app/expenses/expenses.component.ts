import { Component, OnInit } from '@angular/core';
import { Expense} from '../expense';

@Component({
	selector: 'app-expenses',
	templateUrl: './expenses.component.html',
	styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
	title = 'Expenses Log';
	expenses: Expense = {
		date: "12/12/2017",
		category: "Gas",
		price: "29.00",
		location: "United Oil"
	};

	constructor() { }

	// addExpense(){	
	// 	let price = "0.00";
	// 	let mm = 00;
	// 	let dd = 00;
	// 	let yyyy = 0000;
	// 	if($scope.price == null)
	// 		return;
	// 	if($scope.price.indexOf('.') == -1)
	// 		price = '$'+$scope.price + '.00';
	// 	else
	// 		price = '$'+$scope.price;

	// 	mm = $scope.date.getMonth()+1;
	// 	dd = $scope.date.getDate();
	// 	yyyy = $scope.date.getFullYear();


	// 	$scope.expenses.push({
	// 		date: mm+'/'+dd+'/'+yyyy,
	// 		category: $scope.category,
	// 		price: price,
	// 		location: $scope.location
	// 	});
	// 	$scope.date = '';
	// 	$scope.category = '';
	// 	$scope.price = 0.00;
	// 	$scope.location = '';
	// }

	ngOnInit() {

	}

}
