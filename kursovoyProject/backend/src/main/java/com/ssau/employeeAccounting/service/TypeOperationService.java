package com.ssau.employeeAccounting.service;

// import com.ssau.employeeAccounting.entity.Job;
import com.ssau.employeeAccounting.entity.TypeOperation;
// import com.ssau.employeeAccounting.pojo.PojoJob;
import com.ssau.employeeAccounting.pojo.PojoTypeOperation;
// import com.ssau.employeeAccounting.repository.JobRepository;
import com.ssau.employeeAccounting.repository.TypeOperationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TypeOperationService {
    private final TypeOperationRepository typeOperationRepository;

    public List<PojoTypeOperation> findAll () {
        List<TypeOperation> jobs = (List<TypeOperation>) typeOperationRepository.findAll();
        return jobs.stream().map(typeOperation -> PojoTypeOperation.fromEntity(typeOperation)).toList();
    }

    public Optional<PojoTypeOperation> findById (long id) {
        return typeOperationRepository.findById(id).map(typeOperation -> PojoTypeOperation.fromEntity(typeOperation));
    }

    public Optional<PojoTypeOperation> add (PojoTypeOperation pojoTypeOperation) {
        var createdTypeOperation = typeOperationRepository.save(PojoTypeOperation.toEntity(pojoTypeOperation));
        return typeOperationRepository.findById(createdTypeOperation.getId()).map(typeOperation -> PojoTypeOperation.fromEntity(typeOperation));
    }

    public Optional<PojoTypeOperation> update (PojoTypeOperation pojoTypeOperation) {
        var updateTypeOperation = typeOperationRepository.save(PojoTypeOperation.toEntity(pojoTypeOperation));
        return typeOperationRepository.findById(updateTypeOperation.getId()).map(typeOperation -> PojoTypeOperation.fromEntity(typeOperation));
    }

    public boolean delete (long id) {
        if (typeOperationRepository.existsById(id)) {
            typeOperationRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
