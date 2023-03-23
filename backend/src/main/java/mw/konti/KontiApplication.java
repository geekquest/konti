package mw.konti;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import mw.konti.modules.contribution.Contribution;

@SpringBootApplication
@RestController
public class KontiApplication {

	public static void main(String[] args) {
		SpringApplication.run(KontiApplication.class, args);
	}

	@GetMapping("/rest")
    public Contribution rest(@RequestParam(value = "name", defaultValue = "World") String name) {
      return new Contribution(1,"Some other TEXT");
    }

}
