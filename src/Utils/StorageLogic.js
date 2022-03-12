import AsyncStorage from '@react-native-community/async-storage';

export const StorageObjectKeys = {
    InitData: "InitData",
    DisplayName: "DisplayName",
    AuthorityName: "AuthorityName",
    IsLoggedIn: "IsLoggedIn",
    LastCheckVersionDate: "LastCheckVersionDate",
    ServerCodeVersion: "ServerCodeVersion",
    Temp: "Temp",

}

export class StorageLogic {
    // static Save(key, value) {
    // AsyncStorage.setItem(key, JSON.stringify(value));
    // }
    // static Load(key) {
        // return JSON.parse(AsyncStorage.getItem(key));
    // }
    static SaveObject = async (key, obj) => {
        try {
          await AsyncStorage.setItem(key, JSON.stringify(obj))
        } catch (e) {
          console.log(e);
        }
      }

      static LoadObject = async (key) => {
        try {
          var value = await AsyncStorage.getItem(key)
            return JSON.parse(value);
          } catch(e) {
              return null;
          }
        }


    static Save = async (key, value) => {
        try {
          await AsyncStorage.setItem(key, value)
        } catch (e) {
          console.log(e);
        }
      }


      static Load = async (key) => {
        try {
          return await AsyncStorage.getItem(key)
        } catch(e) {
          console.log(e);
        }
      }

    static LoadWithKey(storageObjectKeys)
    {
        return this.Load(storageObjectKeys.toString());
    }

    static SaveWithKey(storageObjectKeys, value)
    {
        this.Save(storageObjectKeys.toString(), value);
    }

}

//export default StorageLogic;
