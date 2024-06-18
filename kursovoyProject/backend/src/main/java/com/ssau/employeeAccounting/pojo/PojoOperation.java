package com.ssau.employeeAccounting.pojo;

import com.ssau.employeeAccounting.entity.Operation;
// import com.ssau.employeeAccounting.entity.TypeOperation;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class PojoOperation {
    private long id;
    private String name;
    private Date date;
    private PojoTypeOperation typeOperation;

    public static PojoOperation fromEntity(Operation operation) {
        var pojo = new PojoOperation();
        pojo.setId(operation.getId());
        pojo.setName(operation.getName());
        pojo.setDate(operation.getDate());
        pojo.setTypeOperation(PojoTypeOperation.fromEntity(operation.getTypeOperation()));
        return pojo;
    }

    public static Operation toEntity(PojoOperation pojo) {
        var operation = new Operation();
        operation.setId(pojo.getId());
        operation.setName(pojo.getName());
        operation.setDate(pojo.getDate());
        operation.setTypeOperation(PojoTypeOperation.toEntity(pojo.getTypeOperation()));
        return operation;
    }
}
