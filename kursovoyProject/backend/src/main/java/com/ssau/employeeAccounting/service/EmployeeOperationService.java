package com.ssau.employeeAccounting.service;

import com.ssau.employeeAccounting.entity.EmployeeOperation;
import com.ssau.employeeAccounting.pojo.PojoEmployeeOperation;
import com.ssau.employeeAccounting.repository.EmployeeOperationsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmployeeOperationService {

    private final EmployeeOperationsRepository employeeOperationsRepository;

    public List<PojoEmployeeOperation> findAll () {
        List<EmployeeOperation> employeeOperations = (List<EmployeeOperation>) employeeOperationsRepository.findAll();
        return employeeOperations.stream().map(employeeOperation -> PojoEmployeeOperation.fromEntity(employeeOperation)).toList();
    }

    public Optional<PojoEmployeeOperation> findById (long id) {
        return employeeOperationsRepository.findById(id).map(employeeOperation -> PojoEmployeeOperation.fromEntity(employeeOperation));
    }

    public List<PojoEmployeeOperation> findByEmployeeId (long id) {
        List<EmployeeOperation> employeeOperations = (List<EmployeeOperation>) employeeOperationsRepository.findByEmployeeId(id);
        return employeeOperations.stream().map(employeeOperation -> PojoEmployeeOperation.fromEntity(employeeOperation)).toList();
    }
    public List<PojoEmployeeOperation> findByOperationId (long id) {
        List<EmployeeOperation> employeeOperations = (List<EmployeeOperation>) employeeOperationsRepository.findByOperationId(id);
        return employeeOperations.stream().map(employeeOperation -> PojoEmployeeOperation.fromEntity(employeeOperation)).toList();
    }

    public Optional<PojoEmployeeOperation> add (PojoEmployeeOperation pojoEmployeeOperation) {
        var createdEmployeeOperation = employeeOperationsRepository.save(PojoEmployeeOperation.toEntity(pojoEmployeeOperation));
        return employeeOperationsRepository.findById(createdEmployeeOperation.getId()).map(employeeOperation -> PojoEmployeeOperation.fromEntity(employeeOperation));
    }

    public Optional<PojoEmployeeOperation> update (PojoEmployeeOperation pojoEmployeeOperation) {
        var updateEmployeeOperation = employeeOperationsRepository.save(PojoEmployeeOperation.toEntity(pojoEmployeeOperation));
        return employeeOperationsRepository.findById(updateEmployeeOperation.getId()).map(employeeOperation -> PojoEmployeeOperation.fromEntity(employeeOperation));
    }

    public boolean delete (long id) {
        if (employeeOperationsRepository.existsById(id)) {
            employeeOperationsRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
