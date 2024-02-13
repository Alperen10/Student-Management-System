package net.alperen.springboot;

import net.alperen.springboot.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private StudentRepository studentRepository;

	@Override
	public void run(String... args) throws Exception {
		//Student student = new Student();
		//student.setFirstName("Elon");
		//student.setLastName("Musk");
		//student.setNote("elonmusk@gmail.com");
		//studentRepository.save(student);

	}
}
