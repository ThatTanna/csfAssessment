package ibf2022.batch1.csf.assessment.server.controllers;

import java.util.List;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ch.qos.logback.classic.Logger;
import ibf2022.batch1.csf.assessment.server.models.Review;
import ibf2022.batch1.csf.assessment.server.services.MovieService;

public class MovieController {

	// TODO: Task 3, Task 4, Task 8
	@RestController
	@RequestMapping("/api")
	public class SearchController {

		private Logger logger = (Logger) LoggerFactory.getLogger(SearchController.class);

		// @Autowired
		// private MovieService movieService;

		@GetMapping("/search")
		public ResponseEntity<String> hello() {
			logger.info("AYOOOOOO");
			return ResponseEntity.ok("Hello World");
		}
	}
}
