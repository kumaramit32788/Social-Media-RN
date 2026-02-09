import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/Navigation/RootNavigator";
import { Provider } from "react-redux";
import { store, persistor } from "./src/Store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App;