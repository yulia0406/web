package com.ssau.employeeAccounting.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
public class Operation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    private Date date;

    @ManyToOne
    @JoinColumn(name = "type_operation_id")
    private TypeOperation typeOperation;
}
