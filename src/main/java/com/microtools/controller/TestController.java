package com.microtools.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TestController {
	
	@Autowired
	Environment env;
	
	@RequestMapping("/")
	public String start() {
		return "index";
	}
	
	@RequestMapping("/test")
	public String test() {
		//${@environment.getProperty("spring.datasource.username")};
		
		//@Autowired
		//Environment env;
		System.out.println("spring.datasource.username = "+env.getProperty("spring.datasource.username"));
		return "test";
	}
	
	@RequestMapping("/jquery")
	public String jqueryrestclient() {
		return "jqueryrestclient";
	}
	
	@RequestMapping("/jquery2")
	public String jqueryrestclient2() {
		return "jqueryrestclient2";
	}
	
	@RequestMapping("/angular")
	public String angularrestclient() {
		return "angularrestclient";
	}
	
	@RequestMapping("/angular2")
	public String angularrestclient2() {
		return "angularrestclient2";
	}
	
	@RequestMapping("/jqueryinsert")
	public String jqueryinsert() {
		return "jqueryinsert";
	}
	
	@RequestMapping("/angularinsert")
	public String angularinsert() {
		return "angularinsert";
	}
	
	@RequestMapping("/angulargetall")
	public String angulargetall() {
		return "angulargetall";
	}
	
	@RequestMapping("/angulargetcliente")
	public String angulargetcliente() {
		return "angulargetcliente";
	}
	
	@RequestMapping("/angulardelete")
	public String angulardelete() {
		return "angulardelete";
	}
	
	@RequestMapping("/angularmodify")
	public String angularmodify() {
		return "angularmodify";
	}
	
	@RequestMapping("/jquerygetcliente")
	public String jquerygetcliente() {
		return "jquerygetcliente";
	}
}
