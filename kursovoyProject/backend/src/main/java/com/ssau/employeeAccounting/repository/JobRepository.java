package com.ssau.employeeAccounting.repository;

import com.ssau.employeeAccounting.entity.Job;
import org.springframework.data.repository.CrudRepository;

public interface JobRepository extends CrudRepository<Job, Long> {
}
