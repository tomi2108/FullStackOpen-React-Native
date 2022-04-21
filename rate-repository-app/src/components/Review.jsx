import { useState } from "react";
import { Alert, Pressable, View } from "react-native";
import { useNavigate } from "react-router-native";
import useReview from "../hooks/useReview";
import styles from "../styles/styles";
import Text from "./Text";

const Review = ({ review, showActions = false }) => {
  const { id } = review.repository;
  const { deleteReview } = useReview();
  const [deleted, setDeleted] = useState(false);

  let navigate = useNavigate();

  const showDeleteAlert = () => {
    Alert.alert(
      "Delete Review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "CANCEL",
        },
        {
          text: "DELETE",
          onPress: () => {
            deleteReview(review.id);
            setDeleted(true);
          },
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  return (
    <View
      style={{ display: deleted ? "none" : "flex", ...styles.review.container }}
    >
      <View style={styles.review.info}>
        <View style={{ flexGrow: 0, marginEnd: 10 }}>
          <View style={styles.review.rating}>
            <Text style={{ color: "#0165d4", fontWeight: "bold" }}>
              {review.rating}
            </Text>
          </View>
        </View>
        <View style={styles.review.reviewDetails}>
          <Text fontWeight="bold">{review.user.username}</Text>
          <Text style={{ marginTop: 5, fontWeight: "bold" }} color="secondary">
            {review.createdAt}
          </Text>
          <Text style={{ marginTop: 5, color: "#000000" }}>{review.text}</Text>
        </View>
      </View>
      {showActions && (
        <View>
          <Pressable
            onPress={() => navigate(`/repo/${id}`)}
            style={styles.form.button}
          >
            <Text color="tertiary">View repository</Text>
          </Pressable>
          <Pressable onPress={showDeleteAlert} style={styles.form.redButton}>
            <Text color="tertiary">Delete review</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Review;
