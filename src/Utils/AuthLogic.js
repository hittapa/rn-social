import { StorageLogic } from "./StorageLogic";

class AuthLogic {
  static async IsLoggedIn() {
    var token = await StorageLogic.Load("token");
    var isLogout = (token === null || token === undefined || token === "");
    return !isLogout;
  }

  static async Logout() {
    await StorageLogic.Save("token", "");
  }

  static async SetLoggedIn(token) {
    await StorageLogic.Save("token", token);
  }

  static async SetUserFlowScreen(screen) {
    await StorageLogic.Save("isNewUserFlowScreen", screen);
  }

  static async SetUser(userId) {
    await StorageLogic.Save("userId", userId);
  }

  static async GetUser() {
    return await StorageLogic.Load("userId");
  }

  static async IsFlowPending() {
    var screen = await StorageLogic.Load("isNewUserFlowScreen");
    var screenFlag = (screen === null || screen === undefined || screen === "");
    return !screenFlag;
  }

  static async GetUserFlowScreen() {
    return await StorageLogic.Load("isNewUserFlowScreen");
  }

  static async RemoveUserFlowScreen() {
    await StorageLogic.Save("isNewUserFlowScreen", "");
  }

  static async GetToken() {
    return await StorageLogic.Load("token");
  }

  // static async GetInitData() {
  //   return await StorageLogic.Load(Consts.initData);
  // }
}

export default AuthLogic;
