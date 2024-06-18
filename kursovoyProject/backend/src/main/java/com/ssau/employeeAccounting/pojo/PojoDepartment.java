package com.ssau.employeeAccounting.pojo;

import com.ssau.employeeAccounting.entity.Department;
// import com.ssau.employeeAccounting.entity.Job;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PojoDepartment {

    private long id;

    private String name;

    public static PojoDepartment fromEntity(Department department) {
        var pojo = new PojoDepartment();
        pojo.setId(department.getId());
        pojo.setName(department.getName());
        return pojo;
    }

    public static Department toEntity(PojoDepartment pojo) {
        var department = new Department();
        department.setId(pojo.getId());
        department.setName(pojo.getName());
        return department;
    }
}
