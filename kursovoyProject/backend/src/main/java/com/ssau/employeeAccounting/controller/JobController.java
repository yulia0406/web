package com.ssau.employeeAccounting.controller;

// import com.ssau.employeeAccounting.pojo.PojoDepartment;
import com.ssau.employeeAccounting.pojo.PojoJob;
import com.ssau.employeeAccounting.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/jobs")
public class JobController {
    @Autowired
    private JobService jobService;

    @GetMapping
    public List<PojoJob> findAll() { return jobService.findAll(); }

    @GetMapping("/{id}")
    public Optional<PojoJob> findById(@PathVariable long id) { return jobService.findById(id); }

    @PostMapping("/add")
    public Optional<PojoJob> add(@RequestBody PojoJob job) { return jobService.add(job); }

    @PostMapping("/update")
    public Optional<PojoJob> update(@RequestBody PojoJob job) { return jobService.update(job); }

    @DeleteMapping("/delete/{id}")
    public boolean delete(@PathVariable long id) {return jobService.delete(id); }
}
