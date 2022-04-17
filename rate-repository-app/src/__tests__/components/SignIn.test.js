import { fireEvent, render, waitFor } from "@testing-library/react-native";
import SignIn from "../../components/SignIn";

describe("SignIn", () => {
  it("submit function works", async () => {
    const onSubmit = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <SignIn onSubmit={onSubmit} />
    );

    const usernameInput = getByPlaceholderText("Username");
    const passwordInput = getByPlaceholderText("Password");
    const submitButton = getByText("Sign in");

    fireEvent.changeText(usernameInput, "kalle");
    fireEvent.changeText(passwordInput, "password");
    fireEvent.press(submitButton);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);

      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: "kalle",
        password: "password",
      });
    });
  });
});
