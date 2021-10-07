class EmployeePayrollData {
        
    //constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    //getter and setter
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(name))
        this._name = name;
        else throw 'Name is incorrect!';
    }
    get id() { return this._id; }
    set id(id) {
        this._id = id;
    }
    get salary() { return this._salary; }
    set salary(salary) {
        let salaryRegex = RegExp('^[1-9][0-9]*$');
        if(salaryRegex.test(salary))
        this._salary = salary;
        else throw 'salary is incorrect';
    }
    get gender() { return this._gender; }
    set gender(gender) {
        let genderRegex = RegExp('^M|F?$');
        if(genderRegex.test(gender))
        this._gender = gender;
        else throw 'invalid gender';
    }
    get startDate() { return this._startDate; }
    set startDate(startDate) {
        let dateRegex = RegExp('^[a-z]*[A-Z]*/[1-9]{2}/[1-9]{4}$');
        if(dateRegex.test(startDate))
        this._startDate = startDate;
        else throw 'invalid date';
    }

    //method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", options);
        return "id="+ this.id +", name="+ this.name +", salary="+ this.salary+", gender="+ this.gender+", start date="+ empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 20000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 0;
try {
employeePayrollData.name = "john";
console.log(employeePayrollData.toString());
}
catch(e) {
    console.error(e);
}
try {
let newEmployeePayrollData = new EmployeePayrollData(2, "Terry", 7000,"M", new Date());
console.log(newEmployeePayrollData.toString());
}
catch(e) {
    console.error(e);
}