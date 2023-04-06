package ibf2022.batch1.csf.assessment.server.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import ibf2022.batch1.csf.assessment.server.models.Comment;

@Repository
public class MovieRepository {

	@Autowired
	private MongoTemplate mongoTemplate;

	// TODO: Task 5
	// You may modify the parameter but not the return type
	// Write the native mongo database query in the comment below
	//
	public int countComments(String movieName) {
		// count the number of comments in the comments collection
		Query query = new Query(Criteria.where("movieName").is(movieName));
		return (int) mongoTemplate.count(query, "comments");
	}

	// TODO: Task 8
	// Write a method to insert movie comments comments collection
	// Write the native mongo database query in the comment below
	//
	public void insertComment(Comment comment) {
		// Write your code here
		mongoTemplate.insert(comment, "comments");

	}

}
