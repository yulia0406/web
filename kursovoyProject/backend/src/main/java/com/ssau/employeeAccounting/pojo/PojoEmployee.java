package com.ssau.employeeAccounting.pojo;

import com.ssau.employeeAccounting.entity.Department;
import com.ssau.employeeAccounting.entity.Employee;
import com.ssau.employeeAccounting.entity.Job;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.lang.String;

@Getter
@Setter
public class PojoEmployee {
    private long id;
    private String name;
    private String gender;
    private Date birthdate;
    private int number;
    private Department department;
    private Job job;

    public static PojoEmployee fromEntity(Employee employee) {
        var pojo = new PojoEmployee();
        pojo.setId(employee.getId());
        pojo.setName(employee.getName());
        pojo.setGender(employee.getGender());
        pojo.setBirthdate(employee.getBirthdate());
        pojo.setNumber(employee.getNumber());
        pojo.setDepartment(employee.getDepartment());
        pojo.setJob(employee.getJob());
        return pojo;
    }

    public static Employee toEntity(PojoEmployee pojo) {
        var employee = new Employee();
        employee.setId(pojo.getId());
        employee.setName(pojo.getName());
        employee.setGender(pojo.getGender());
        employee.setBirthdate(pojo.getBirthdate());
        employee.setNumber(pojo.getNumber());
        employee.setDepartment(pojo.getDepartment());
        employee.setJob(pojo.getJob());
        return employee;
    }
}
