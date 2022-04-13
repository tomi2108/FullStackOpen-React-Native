import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router-native";
import useSignOut from "../hooks/useSignOut";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e1e4e8",
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  const [, user] = useSignOut();

  let navigate = useNavigate();

  useEffect(() => {
    user ? navigate("/list") : navigate("/sign");
  }, [user]);

  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/sign" element={<SignIn />} />
        <Route path="/list" element={<RepositoryList />} />
        <Route path="*" element={<Navigate to="/sign" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
