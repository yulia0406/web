package com.ssau.employeeAccounting.repository;

import com.ssau.employeeAccounting.entity.Department;
import org.springframework.data.repository.CrudRepository;

public interface DepartmentRepository extends CrudRepository<Department, Long> {
}

