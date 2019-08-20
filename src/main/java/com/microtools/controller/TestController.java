package com.microtools.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TestController {
	@RequestMapping("/")
	public String start() {
		return "index";
	}
	
	@RequestMapping("/test")
	public String test() {
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
}
