package com.ssau.employeeAccounting.controller;

import com.ssau.employeeAccounting.pojo.PojoOperation;
import com.ssau.employeeAccounting.service.OperationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/operations")
public class OperationController {
    @Autowired
    private OperationService operationService;

    @GetMapping
    public List<PojoOperation> findAll() { return operationService.findAll(); }

    @GetMapping("/{id}")
    public Optional<PojoOperation> findById(@PathVariable long id) { return operationService.findById(id); }

    @PostMapping("/add")
    public Optional<PojoOperation> add(@RequestBody PojoOperation PojoOperation) { return operationService.add(PojoOperation); }

    @PostMapping("/update")
    public Optional<PojoOperation> update(@RequestBody PojoOperation PojoOperation) { return operationService.update(PojoOperation); }

    @DeleteMapping("/delete/{id}")
    public boolean delete(@PathVariable long id) {return operationService.delete(id); }
}
