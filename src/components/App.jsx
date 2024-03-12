import { CardGame } from "./CardGame";
import { Footer } from "./Footer";

export default function App() {
  return (
    <div>
      <h1> Welcome to Play Your Cards Right! </h1>
      <CardGame />
      <div>
        <hr />
        <Footer />
      </div>
    </div>
  );
}
