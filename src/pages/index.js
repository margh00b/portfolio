import About from "@/components/About";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="sections">
        <Landing />
        <About />
        <Form />
      </div>
    </div>
  );
}
