package com.example.websocketExample.Controller;

import com.example.websocketExample.DTO.Greeting;
import com.example.websocketExample.DTO.HelloMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class GreetingController {


@MessageMapping("/hello") // akan memanggil method greetings
@SendTo("/topic/greetings") // pesan akan di kirim ke ke semua klient yang berlangganan
    public Greeting greeting(HelloMessage message) throws Exception{

    System.out.println("cek " + message);
        return  new Greeting("Hello " + message.getName());
    }

}

// Klien mengirim pesan ke destinasi /hello
