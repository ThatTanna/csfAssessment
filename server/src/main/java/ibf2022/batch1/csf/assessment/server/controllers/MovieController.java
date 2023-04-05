package ibf2022.batch1.csf.assessment.server.controllers;

import java.util.List;

// import javax.print.attribute.standard.Media;
// import org.springframework.http.MediaType;
// import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// import ch.qos.logback.classic.Logger;
import ibf2022.batch1.csf.assessment.server.models.Review;
import ibf2022.batch1.csf.assessment.server.services.MovieService;
import jakarta.json.Json;
// import jakarta.json.JsonArray;
import jakarta.json.JsonArrayBuilder;

@RestController
// Using proxy for now, will change to actual domain later
// @CrossOrigin(origins = "*")
@RequestMapping("/api")
public class MovieController {

	// TODO: Task 3, Task 4, Task 8

	@Autowired
	private MovieService movieService;

	@GetMapping("/search")
	public ResponseEntity<String> searchReviews(@RequestParam String query) {

		List<Review> reviews = movieService.searchReviews(query);

		JsonArrayBuilder arrayBuilder = Json.createArrayBuilder();
		reviews.stream()
				.forEach(review -> {
					arrayBuilder.add(review.toJson());
				});

		return ResponseEntity.ok(arrayBuilder.build().toString());

	}

}
