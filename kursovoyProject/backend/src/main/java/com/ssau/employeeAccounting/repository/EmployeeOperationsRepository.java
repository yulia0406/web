package com.ssau.employeeAccounting.repository;

import com.ssau.employeeAccounting.entity.EmployeeOperation;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EmployeeOperationsRepository extends CrudRepository<EmployeeOperation, Long> {

    public List<EmployeeOperation> findByEmployeeId (long id);

    public List<EmployeeOperation> findByOperationId (long id);
}
