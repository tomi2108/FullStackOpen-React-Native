import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router-native";
import useLogin from "../hooks/useLogin";
import CreateReview from "../Pages/CreateReview";
import LogIn from "../Pages/LogIn";
import Profile from "../Pages/Profile";
import RepositoryDetails from "../Pages/RepositoryDetails";
import RepositoryList from "../Pages/RepositoryList";
import SignUp from "../Pages/SignUp";
import AppBar from "./AppBar";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e1e4e8",
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  const { signIn, signOut, user } = useLogin({});
  let navigate = useNavigate();

  const handleSignOut = async ({ username, password }) => {
    try {
      await signOut(username, password);
      navigate("/sign");
    } catch (e) {
      console.log(e);
    }
  };

  const handleSignIn = async ({ username, password }) => {
    try {
      await signIn(username, password);
      navigate("/list");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    user ? navigate("/list") : navigate("/sign");
  }, [user]);

  return (
    <View style={styles.container}>
      <AppBar onSignOut={handleSignOut} user={user} />
      <Routes>
        <Route path="/sign" element={<LogIn submit={handleSignIn} />} />
        <Route path="/list" element={<RepositoryList />} />
        <Route path="/create" element={<CreateReview />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/repo/:id" element={<RepositoryDetails />} />
        <Route path="*" element={<Navigate to="/sign" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
