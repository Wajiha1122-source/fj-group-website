import AppRoutes from "./routes/AppRoutes"
import EnergyCursor from "./components/cursor/EnergyCursor"
import SiteLauncher from "./components/site-launcher/SiteLauncher"
import ScrollToTop from "./components/routing/ScrollToTop"

function App() {
  return (
    <>
      <EnergyCursor />
      <SiteLauncher />
      <ScrollToTop />
      <AppRoutes />
    </>
  )
}

export default App
