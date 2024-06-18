package com.ssau.employeeAccounting.pojo;

import com.ssau.employeeAccounting.entity.TypeOperation;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PojoTypeOperation {

    private long id;

    private String name;

    public static PojoTypeOperation fromEntity(TypeOperation typeOperation) {
        var pojo = new PojoTypeOperation();
        pojo.setId(typeOperation.getId());
        pojo.setName(typeOperation.getName());
        return pojo;
    }

    public static TypeOperation toEntity(PojoTypeOperation pojo) {
        var typeOperation = new TypeOperation();
        typeOperation.setId(pojo.getId());
        typeOperation.setName(pojo.getName());
        return typeOperation;
    }
}
