import { Navbar } from "./components/organisms";
import { About, Home } from "./sections";

export default function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}
