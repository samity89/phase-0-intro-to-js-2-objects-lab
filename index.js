const employee = {
    name: "Ludwig",
    streetAddress: "the moon",
};

function updateEmployeeWithKeyAndValue(){
    return {
        ...employee,
        name: "Sam",
        streetAddress: "11 Broadway"
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(){
    let newEmployee = {...employee}
    delete newEmployee.name;   
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(){
    let newEmployee = employee
    delete newEmployee.name;
    return newEmployee;
}