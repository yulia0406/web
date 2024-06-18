package com.ssau.employeeAccounting.controller;

import com.ssau.employeeAccounting.pojo.PojoEmployeeOperation;
import com.ssau.employeeAccounting.service.EmployeeOperationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/employeeOperations")
public class EmployeeOperationController {
    @Autowired
    private EmployeeOperationService employeeOperationService;

    @GetMapping
    public List<PojoEmployeeOperation> findAll() { return employeeOperationService.findAll(); }

    @GetMapping("/{id}")
    public Optional<PojoEmployeeOperation> findById(@PathVariable long id) { return employeeOperationService.findById(id); }

    @GetMapping("/employee/{id}")
    public List<PojoEmployeeOperation> findByEmployeeId(@PathVariable long id) { return employeeOperationService.findByEmployeeId(id); }

    @GetMapping("/operation/{id}")
    public List<PojoEmployeeOperation> findByOperationId(@PathVariable long id) { return employeeOperationService.findByOperationId(id); }

    @PostMapping("/add")
    public Optional<PojoEmployeeOperation> add(@RequestBody PojoEmployeeOperation pojoEmployeeOperation) { return employeeOperationService.add(pojoEmployeeOperation); }

    @PostMapping("/update")
    public Optional<PojoEmployeeOperation> update(@RequestBody PojoEmployeeOperation pojoEmployeeOperation) { return employeeOperationService.update(pojoEmployeeOperation); }

    @DeleteMapping("/delete/{id}")
    public boolean delete(@PathVariable long id) {return employeeOperationService.delete(id); }
}
