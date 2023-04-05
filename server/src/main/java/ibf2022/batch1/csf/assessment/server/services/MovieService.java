package ibf2022.batch1.csf.assessment.server.services;

import java.io.StringReader;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import ibf2022.batch1.csf.assessment.server.models.Review;
import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;;

@Service
public class MovieService {

	public static final String MOVIE_API = "https://api.nytimes.com/svc/movies/v2/reviews";

	@Value("${movie.key}")
	private String movieKey;

	// Example ->
	// https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=yourkey
	// TODO: Task 4
	// DO NOT CHANGE THE METHOD'S SIGNATURE
	public List<Review> searchReviews(String query) {

		String url = UriComponentsBuilder.fromUriString(MOVIE_API)
				.path("/search.json")
				.queryParam("query", query)
				.queryParam("api-key", movieKey)
				.toUriString();

		RequestEntity<Void> request = RequestEntity.get(url)
		.accept(MediaType.APPLICATION_JSON)
		.build();

		RestTemplate restTemplate = new RestTemplate();

		ResponseEntity<String> response = null;

		try {
			response = restTemplate.exchange(request, String.class);
		} catch (RestClientException e) {
			e.printStackTrace();
			// return Collections.EMPTY_LIST;
		}

		String payload = response.getBody();
		JsonReader reader = Json.createReader(new StringReader(payload));
		JsonObject json = reader.readObject();
		JsonArray jsonArray = json.getJsonArray("results");

		return jsonArray.stream()
			.map(v -> v.asJsonObject())
			.map(Review::toReview)
			.toList();
	}

}
