package com.microtools.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.microtools.model.Cliente;
import com.microtools.repository.IClienteRepo;

@RestController
@RequestMapping("/clientes")
public class RestClienteController {
	
	@Autowired
	private IClienteRepo repo;
	
	@GetMapping
	public List<Cliente> listar() {
		return repo.findAll();
	}
	
	@GetMapping(value = "/{id}")
	public Optional<Cliente> clientById(@PathVariable("id") Integer id) {
		return repo.findById(id);
	}
	
	@PostMapping
	public void insertar(@RequestBody Cliente cli) {
		repo.save(cli);
	}
	
	@PutMapping
	public void modificar(@RequestBody Cliente cli) {
		repo.save(cli);
	}
	
	@DeleteMapping(value = "/{id}")
	public void eliminar(@PathVariable("id") Integer id) {
		repo.deleteById(id);
	}

}
