package com.ssau.employeeAccounting.service;

// import com.ssau.employeeAccounting.entity.EmployeeOperation;
import com.ssau.employeeAccounting.entity.Operation;
// import com.ssau.employeeAccounting.pojo.PojoEmployeeOperation;
import com.ssau.employeeAccounting.pojo.PojoOperation;
// import com.ssau.employeeAccounting.repository.EmployeeOperationsRepository;
import com.ssau.employeeAccounting.repository.OperationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OperationService {

    private final OperationRepository operationRepository;

    public List<PojoOperation> findAll () {
        List<Operation> operations = (List<Operation>) operationRepository.findAll();
        return operations.stream().map(operation -> PojoOperation.fromEntity(operation)).toList();
    }

    public Optional<PojoOperation> findById (long id) {
        return operationRepository.findById(id).map(operation -> PojoOperation.fromEntity(operation));
    }

    public Optional<PojoOperation> add (PojoOperation pojoOperation) {
        var createdOperation = operationRepository.save(PojoOperation.toEntity(pojoOperation));
        return operationRepository.findById(createdOperation.getId()).map(operation -> PojoOperation.fromEntity(operation));
    }

    public Optional<PojoOperation> update (PojoOperation pojoOperation) {
        var updateOperation = operationRepository.save(PojoOperation.toEntity(pojoOperation));
        return operationRepository.findById(updateOperation.getId()).map(operation -> PojoOperation.fromEntity(operation));
    }

    public boolean delete (long id) {
        if (operationRepository.existsById(id)) {
            operationRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
