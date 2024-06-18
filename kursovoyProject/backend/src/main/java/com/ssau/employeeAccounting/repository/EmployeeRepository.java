package com.ssau.employeeAccounting.repository;

import com.ssau.employeeAccounting.entity.Employee;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
    public List<Employee> findByDepartmentId(long id);
}
