import AppRoutes from "./routes/AppRoutes"
import SiteLauncher from "./components/site-launcher/SiteLauncher"
import ScrollToTop from "./components/routing/ScrollToTop"

function App() {
  return (
    <>
      <SiteLauncher />
      <ScrollToTop />
      <AppRoutes />
    </>
  )
}

export default App
