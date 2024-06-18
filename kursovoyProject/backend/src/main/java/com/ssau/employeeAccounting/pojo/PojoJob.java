package com.ssau.employeeAccounting.pojo;

import com.ssau.employeeAccounting.entity.Job;
// import com.ssau.employeeAccounting.entity.TypeOperation;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PojoJob {

    private long id;

    private String name;

    public static PojoJob fromEntity(Job job) {
        var pojo = new PojoJob();
        pojo.setId(job.getId());
        pojo.setName(job.getName());
        return pojo;
    }

    public static Job toEntity(PojoJob pojo) {
        var job = new Job();
        job.setId(pojo.getId());
        job.setName(pojo.getName());
        return job;
    }
}
