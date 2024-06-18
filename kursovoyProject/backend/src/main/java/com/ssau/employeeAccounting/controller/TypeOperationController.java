package com.ssau.employeeAccounting.controller;

import com.ssau.employeeAccounting.pojo.PojoTypeOperation;
import com.ssau.employeeAccounting.service.TypeOperationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/typeOperations")
public class TypeOperationController {
    @Autowired
    private TypeOperationService typeOperationService;

    @GetMapping
    public List<PojoTypeOperation> findAll() { return typeOperationService.findAll(); }

    @GetMapping("/{id}")
    public Optional<PojoTypeOperation> findById(@PathVariable long id) { return typeOperationService.findById(id); }

    @PostMapping("/add")
    public Optional<PojoTypeOperation> add(@RequestBody PojoTypeOperation typeOperation) { return typeOperationService.add(typeOperation); }

    @PostMapping("/update")
    public Optional<PojoTypeOperation> update(@RequestBody PojoTypeOperation typeOperation) { return typeOperationService.update(typeOperation); }

    @DeleteMapping("/delete/{id}")
    public boolean delete(@PathVariable long id) {return typeOperationService.delete(id); }
}
