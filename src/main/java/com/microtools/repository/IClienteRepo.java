package com.microtools.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microtools.model.Cliente;

public interface IClienteRepo extends JpaRepository<Cliente, Integer>{

}
