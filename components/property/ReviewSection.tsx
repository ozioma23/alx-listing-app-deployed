import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: string;
  comment: string;
  rating?: number;
  reviewer?: string;
}

interface ReviewSectionProps {
  propertyId: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     const fetchReviews = async () => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      const response = await axios.get(`${baseUrl}/properties/${propertyId}/reviews`);
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) return <p>Loading reviews...</p>;
  if (!reviews.length) return <p>No reviews yet.</p>;

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id} className="border p-2 rounded mb-2">
          {review.reviewer && <p className="font-bold">{review.reviewer}</p>}
          {review.rating !== undefined && <p>Rating: {review.rating}</p>}
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
