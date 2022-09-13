package com.genration.jimg;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/index")

public class HolaMundo {
	@GetMapping("/")
	public String hola() {
		return "hola mundo desde Spring";
	}
	
}
