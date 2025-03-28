import { Suspense } from "react";
import PrivateRoutes from "routes/PrivateRoutes"
import PublicRoutes from "routes/PublicRoutes"


function App() {
  return (
    <>
      <Suspense fallback={'Loading...'}>
        <PublicRoutes />
        <PrivateRoutes />
      </Suspense>
    </>
  );
}

export default App;
