import React, { useState } from 'react';

const MovieReviewsList = ({ movieReviews }) => {
    const [expanded, toggleClass] = useState(false);
    const toggledClass = expanded ? 'expanded' : 'collapsed';
    return (
        <div className="review-container" >
            <h3>Reviews</h3>
            <div className="review-component">
                {movieReviews ? movieReviews.map(review => {
                    return (
                        <div key={review.id}>
                            <div className={`paragraph-content ${toggledClass}`}>{review.content}</div>
                            <span className="read-more" onClick={() => toggleClass(!expanded)}>
                                {expanded ? 'View Less' : 'View More'}
                            </span>
                            <p>
                                <small>{review.author}</small>
                            </p>
                            <hr />
                        </div>
                    )
                }) : null}
            </div>
        </div>
    );
}

export default MovieReviewsList;