import { Formik } from "formik";
import { Pressable, View } from "react-native";
import * as yup from "yup";
import useReview from "../hooks/useReview";
import { styles } from "../styles/FormStyles";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number("Rating must be a numeric value")
    .required("Rating is required")
    .max(100, "Max rating is 100")
    .min(0, "Minimum rating is 0"),
  text: yup.string().optional(),
});

const parseStringToNumber = (string) => +string;

const CreateReview = () => {
  const createReview = useReview();

  const handleReviewCreation = async (review) => {
    review.rating = parseStringToNumber(review.rating);
    await createReview(review);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        handleReviewCreation(values);
        resetForm({ values: initialValues });
      }}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.container}>
            <FormikTextInput
              style={styles.input}
              name="ownerName"
              placeholder="Repository owner name"
            />
            <FormikTextInput
              style={styles.input}
              name="repositoryName"
              placeholder="Repository name"
            />
            <FormikTextInput
              style={styles.input}
              name="rating"
              placeholder="Rating between 0 and 100"
            />
            <FormikTextInput
              style={styles.input}
              name="text"
              placeholder="Review"
            />
            <Pressable onPress={handleSubmit} style={styles.button}>
              <Text color="tertiary">Create a review</Text>
            </Pressable>
          </View>
        );
      }}
    </Formik>
  );
};
export default CreateReview;
