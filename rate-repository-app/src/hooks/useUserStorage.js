import { useContext } from "react";
import userStorageContext from "../contexts/userStorageContext";

const useUserStorage = () => {
  return useContext(userStorageContext);
};

export default useUserStorage;
