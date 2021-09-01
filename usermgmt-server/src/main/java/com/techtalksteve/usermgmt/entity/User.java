package com.techtalksteve.usermgmt.entity;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name = "USER_MGMT")
@Getter
@Setter
@ToString(callSuper=true)
@NoArgsConstructor
@AllArgsConstructor
@SequenceGenerator(name=User.USER_SEQ, sequenceName = User.USER_SEQ, allocationSize = 1)
public class User implements Serializable {
    public static final String USER_SEQ = "USER_SEQ";

    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator=USER_SEQ)
    @Setter(AccessLevel.PRIVATE)
    private Long id;

    @NotNull
    @Column(name = "FIRSTNAME")
    protected String firstname;

    @NotNull
    @Column(name = "LASTNAME")
    protected String lastname;

    @NotNull
    @Column(name = "BIRTHDATE")
    private LocalDate birthdate;
}