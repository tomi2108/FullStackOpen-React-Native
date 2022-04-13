import AsyncStorage from "@react-native-async-storage/async-storage";

class UserStorage {
  constructor(namespace = "userStorage") {
    this.namespace = namespace;
  }

  async getToken() {
    const token = await AsyncStorage.getItem(`${this.namespace}:token`);
    return token ? JSON.parse(token) : "";
  }

  async setToken(token) {
    await AsyncStorage.setItem(
      `${this.namespace}:token`,
      JSON.stringify(token)
    );
  }
  async clearToken() {
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}
export default UserStorage;
