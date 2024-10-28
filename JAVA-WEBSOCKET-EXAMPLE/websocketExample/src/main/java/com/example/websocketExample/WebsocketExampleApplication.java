package com.example.websocketExample;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WebsocketExampleApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebsocketExampleApplication.class, args);
		System.out.println("Running in Server 8080");
	}

}
