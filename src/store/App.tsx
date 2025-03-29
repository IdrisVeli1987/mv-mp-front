import { Suspense } from "react";
import PrivateRoutes from "../routes/PrivateRoutes";
import PublicRoutes from "../routes/PublicRoutes";
import Header from "features/Header";

function App() {
  return (
    <>
      <AppStules />
      <Header />
      <Suspense fallback={"Loading..."}>
        <PublicRoutes />
        <PrivateRoutes />
      </Suspense>

      <Footer>
        <div>&copy; Маркетплейс MW</div>
      </Footer>
    </>
  );
}


export default App;

//2 video 5 minute
