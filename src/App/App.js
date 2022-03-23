import Header from "../header/header";
import { filmContext, ThemContext } from "../context/film-conext";
import { ColorContext, themeContext } from "../context/theme-context";
import {
  DescriptionContext,
  informationContext,
} from "../context/description-contex";

function App() {
  return (
    <div>
      <DescriptionContext.Provider value={informationContext}>
        <ColorContext.Provider value={themeContext}>
          <ThemContext.Provider value={filmContext}>
            <Header />
          </ThemContext.Provider>
        </ColorContext.Provider>
      </DescriptionContext.Provider>
    </div>
  );
}

export default App;
