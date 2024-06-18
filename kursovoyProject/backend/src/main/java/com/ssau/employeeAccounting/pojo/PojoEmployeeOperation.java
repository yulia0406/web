package com.ssau.employeeAccounting.pojo;

import com.ssau.employeeAccounting.entity.Employee;
import com.ssau.employeeAccounting.entity.EmployeeOperation;
// import com.ssau.employeeAccounting.entity.Job;
import com.ssau.employeeAccounting.entity.Operation;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PojoEmployeeOperation {
    private long id;

    private Employee employee;

    private Operation operation;

    public static PojoEmployeeOperation fromEntity(EmployeeOperation employeeOperation) {
        var pojo = new PojoEmployeeOperation();
        pojo.setId(employeeOperation.getId());
        pojo.setEmployee(employeeOperation.getEmployee());
        pojo.setOperation(employeeOperation.getOperation());
        return pojo;
    }

    public static EmployeeOperation toEntity(PojoEmployeeOperation pojo) {
        var employeeOperation = new EmployeeOperation();
        employeeOperation.setId(pojo.getId());
        employeeOperation.setEmployee(pojo.getEmployee());
        employeeOperation.setOperation(pojo.getOperation());
        return employeeOperation;
    }
}
