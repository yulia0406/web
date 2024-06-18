package com.ssau.employeeAccounting.controller;

import com.ssau.employeeAccounting.pojo.PojoDepartment;
import com.ssau.employeeAccounting.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/departments")
public class DepartmentController {
    @Autowired
    private DepartmentService departmentService;

    @GetMapping
    public List<PojoDepartment> findAll() { return departmentService.findAll(); }

    @GetMapping("/{id}")
    public Optional<PojoDepartment> findById(@PathVariable long id) { return departmentService.findById(id); }

    @PostMapping("/add")
    public Optional<PojoDepartment> add(@RequestBody PojoDepartment department) { return departmentService.add(department); }

    @PostMapping("/update")
    public Optional<PojoDepartment> update(@RequestBody PojoDepartment department) { return departmentService.update(department); }

    @DeleteMapping("/delete/{id}")
    public boolean delete(@PathVariable long id) {return departmentService.delete(id); }
}
