package com.ssau.employeeAccounting.repository;

import com.ssau.employeeAccounting.entity.Operation;
import org.springframework.data.repository.CrudRepository;

public interface OperationRepository extends CrudRepository<Operation, Long> {
}
