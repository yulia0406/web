package com.ssau.employeeAccounting.service;

import com.ssau.employeeAccounting.entity.Department;
import com.ssau.employeeAccounting.pojo.PojoDepartment;
import com.ssau.employeeAccounting.repository.DepartmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DepartmentService {

    private final DepartmentRepository departmentRepository;

    public List<PojoDepartment> findAll () {
        List<Department> departments = (List<Department>) departmentRepository.findAll();
        return departments.stream().map(department -> PojoDepartment.fromEntity(department)).toList();
    }

    public Optional<PojoDepartment> findById (long id) {
        return departmentRepository.findById(id).map(department -> PojoDepartment.fromEntity(department));
    }

    public Optional<PojoDepartment> add (PojoDepartment pojoDepartment) {
        var createdDepartment = departmentRepository.save(PojoDepartment.toEntity(pojoDepartment));
        return departmentRepository.findById(createdDepartment.getId()).map(department -> PojoDepartment.fromEntity(department));
    }

    public Optional<PojoDepartment> update (PojoDepartment pojoDepartment) {
        var updateDepartment = departmentRepository.save(PojoDepartment.toEntity(pojoDepartment));
        return departmentRepository.findById(updateDepartment.getId()).map(department -> PojoDepartment.fromEntity(department));
    }

    public boolean delete (long id) {
        if (departmentRepository.existsById(id)) {
            departmentRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
