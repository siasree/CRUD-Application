// Create a Model

var app = angular.module("myApp", []);

// Create a Controller

app.controller("crudCtrl", function ($scope) {


    $scope.Emplist = [];//empty array of Employees

    $scope.AddData = function () {//add data to the table or array

        var emp = {//ANn Object
            Id: $scope.Emplist.length + 1,
            Name: $scope.Name,
            Salary: $scope.Salary
        };
        $scope.Emplist.push(emp);//push the emp object to array
        ClearModel();
    };
    // function to Delete the Data

    $scope.DeleteData = function (emp) {

        var index = $scope.Emplist.indexOf(emp);//whta index we want to delete in the array
        $scope.Emplist.splice(index, 1);
    };

    //function  to be bind the data tothe input fields
    $scope.BindSelectedData = function (emp) {
        $scope.Id = emp.Id;
        $scope.Name = emp.Name;
        $scope.Salary = emp.Salary;
    };

    //Update Data
    $scope.UpdateData = function () {
        $scope.grep($scope.Emplist, function (e) {
            if (e.Id == $scope.Id) {
                e.Name = $scope.Name;
                e.Salary = $scope.Salary;
            }
        });
    };

    //Clear the Data

    function ClearModel() {
        $scope.Id = 0;
        $scope.Name = '';
        $scope.Salary = 0;
    };

});






