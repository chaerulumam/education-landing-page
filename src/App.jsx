import { Navbar } from "./components/organisms";
import { About, Courses, Home } from "./sections";

export default function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <About />
      <Courses />
    </div>
  );
}
