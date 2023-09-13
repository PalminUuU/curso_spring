package com.newpr.newpr.models;


import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
@Entity
@Table(name = "usuarios")
@ToString @EqualsAndHashCode
public class Usuario {

   @Getter @Setter @Column(name = "id")
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter @Setter @Column(name = "nombre")
    private String nombre;

    @Getter @Setter @Column(name = "apellidos")
    private String apellidos;

    @Getter @Setter @Column(name = "telefono")
    private String telefono;

    @Getter @Setter @Column(name = "password")
    private String password;

    @Getter @Setter @Column(name = "email")
    private String email;

}
