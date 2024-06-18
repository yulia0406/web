package com.ssau.employeeAccounting.controller;

import com.ssau.employeeAccounting.pojo.PojoEmployee;
// import com.ssau.employeeAccounting.pojo.PojoJob;
import com.ssau.employeeAccounting.service.EmployeeService;
// import com.ssau.employeeAccounting.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/employees")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public List<PojoEmployee> findAll() { return employeeService.findAll(); }

    @GetMapping("/{id}")
    public Optional<PojoEmployee> findById(@PathVariable long id) { return employeeService.findById(id); }

    @GetMapping("/department/{id}")
    public List<PojoEmployee> findByDepartmentId(@PathVariable long id) {
        return employeeService.findByDepartmentId(id);
    }

    @PostMapping("/add")
    public Optional<PojoEmployee> add(@RequestBody PojoEmployee pojoEmployee) { return employeeService.add(pojoEmployee); }

    @PostMapping("/update")
    public Optional<PojoEmployee> update(@RequestBody PojoEmployee pojoEmployee) { return employeeService.update(pojoEmployee); }

    @DeleteMapping("/delete/{id}")
    public boolean delete(@PathVariable long id) {return employeeService.delete(id); }
}
