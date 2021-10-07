class EmployeePayrollData {
    

    constructor(id,name,salary) {
        this.id = id;
        this.name =name;
        this.salary = salary;
    }

    //getters
    get id() {
        return this._id;
    }
    get salary() {
        return this._salary;
    }
    get name() {
        return this._name;
    }

    //setters
    set id(id) {
        this._id = id;
    }
    set salary(salary) {
        this._salary = salary;
    }
    set name(name) {
        this._name = name;
    }

    toString() {
        return "id= " +this.id+ ", name= " +this.name + ", salary=" +this.salary;

    }
}
let employeePayrollData = new EmployeePayrollData(1,"Mark",3000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "john";
console.log(employeePayrollData.toString());