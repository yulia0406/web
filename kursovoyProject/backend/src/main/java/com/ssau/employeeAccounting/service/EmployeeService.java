package com.ssau.employeeAccounting.service;

import com.ssau.employeeAccounting.entity.Employee;
// import com.ssau.employeeAccounting.entity.EmployeeOperation;
import com.ssau.employeeAccounting.pojo.PojoEmployee;
// import com.ssau.employeeAccounting.pojo.PojoEmployeeOperation;
// import com.ssau.employeeAccounting.repository.EmployeeOperationsRepository;
import com.ssau.employeeAccounting.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    public List<PojoEmployee> findAll () {
        List<Employee> employees = (List<Employee>) employeeRepository.findAll();
        return employees.stream().map(employee -> PojoEmployee.fromEntity(employee)).toList();
    }

    public Optional<PojoEmployee> findById (long id) {
        return employeeRepository.findById(id).map(employee -> PojoEmployee.fromEntity(employee));
    }

    public List<PojoEmployee> findByDepartmentId (long id) {
        List<Employee> employees = (List<Employee>) employeeRepository.findByDepartmentId(id);
        return employees.stream().map(employee -> PojoEmployee.fromEntity(employee)).toList();
    }

    public Optional<PojoEmployee> add (PojoEmployee pojoEmployee) {
        var createdEmployee = employeeRepository.save(PojoEmployee.toEntity(pojoEmployee));
        return employeeRepository.findById(createdEmployee.getId()).map(employee -> PojoEmployee.fromEntity(employee));
    }

    public Optional<PojoEmployee> update (PojoEmployee pojoEmployee) {
        var updateEmployee = employeeRepository.save(PojoEmployee.toEntity(pojoEmployee));
        return employeeRepository.findById(updateEmployee.getId()).map(employee -> PojoEmployee.fromEntity(employee));
    }

    public boolean delete (long id) {
        if (employeeRepository.existsById(id)) {
            employeeRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
