package com.ssau.employeeAccounting.service;

import com.ssau.employeeAccounting.entity.Job;
import com.ssau.employeeAccounting.pojo.PojoJob;
import com.ssau.employeeAccounting.repository.JobRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class JobService {
    private final JobRepository jobRepository;

    public List<PojoJob> findAll () {
        List<Job> jobs = (List<Job>) jobRepository.findAll();
        return jobs.stream().map(job -> PojoJob.fromEntity(job)).toList();
    }

    public Optional<PojoJob> findById (long id) {
        return jobRepository.findById(id).map(job -> PojoJob.fromEntity(job));
    }

    public Optional<PojoJob> add (PojoJob pojoJob) {
        var createdjob = jobRepository.save(PojoJob.toEntity(pojoJob));
        return jobRepository.findById(createdjob.getId()).map(job -> PojoJob.fromEntity(job));
    }

    public Optional<PojoJob> update (PojoJob pojoJob) {
        var updateJob = jobRepository.save(PojoJob.toEntity(pojoJob));
        return jobRepository.findById(updateJob.getId()).map(job -> PojoJob.fromEntity(job));
    }

    public boolean delete (long id) {
        if (jobRepository.existsById(id)) {
            jobRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
