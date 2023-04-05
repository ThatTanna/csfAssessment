package ibf2022.batch1.csf.assessment.server.models;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonObjectBuilder;

// DO NOT MODIFY THIS CLASS
public class Review {
	// display_title
	private String title;
	// mpaa_rating
	private String rating;
	// byline
	private String byline;
	// headline
	private String headline;
	// summary_short
	private String summary;
	// link.url
	private String reviewURL;
	// multimedia.src
	private String image = null;

	private int commentCount = 0;

	public void setTitle(String title) {
		this.title = title;
	}

	public String getTitle() {
		return this.title;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public String getRating() {
		return this.rating;
	}

	public void setByline(String byline) {
		this.byline = byline;
	}

	public String getByline() {
		return this.byline;
	}

	public void setHeadline(String headline) {
		this.headline = headline;
	}

	public String getHeadline() {
		return this.headline;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public String getSummary() {
		return this.summary;
	}

	public void setReviewURL(String reviewURL) {
		this.reviewURL = reviewURL;
	}

	public String getReviewURL() {
		return this.reviewURL;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getImage() {
		return this.image;
	}

	public boolean hasImage() {
		return null != this.image;
	}

	public void setCommentCount(int commentCount) {
		this.commentCount = commentCount;
	};

	public int getCommentCount() {
		return this.commentCount;
	}

	public static Review toReview(JsonObject obj) {
		Review review = new Review();
		review.setTitle(obj.getString("display_title"));
		review.setRating(obj.getString("mpaa_rating"));
		review.setByline(obj.getString("byline"));
		review.setHeadline(obj.getString("headline"));
		review.setSummary(obj.getString("summary_short"));
		review.setReviewURL(obj.getJsonObject("link").getString("url"));
		if (!obj.isNull("multimedia")) {
			review.setImage(obj.getJsonObject("multimedia").getString("src"));
		} 
		return review;
	}

	public JsonObject toJson() {
		JsonObjectBuilder builder = Json.createObjectBuilder();

		builder.add("title", title);
		builder.add("rating", rating);
		builder.add("byline", byline);
		builder.add("headline", headline);
		builder.add("summary", summary);
		builder.add("reviewURL", reviewURL);
		if (hasImage()) {
			builder.add("image", image);
		}
		builder.add("commentCount", commentCount);

		return builder.build();
		
    }

	@Override
	public String toString() {
		return "Review{title:%s, rating:%s}".formatted(title, rating);
	}
}
