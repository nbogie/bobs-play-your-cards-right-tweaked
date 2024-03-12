import episodes from "../data/episodes.json";
import { Footer } from "./Footer";

function Greeting(props) {
    return <h2>Hello, {props.name}</h2>;
}

function Sum(props) {
    return (
        <p>
            {props.num1} + {props.num2}= {props.num1 + props.num2}
        </p>
    );
}

function TVEpisode(props) {
    return (
        <div>
            <h2>{props.episodeData.name}</h2>
        </div>
    );
}

function MyHeader() {
    return (
        <header>
            <h1>Welcome to my first React app</h1>
        </header>
    );
}

export default function App() {
    return (
        <div>
            <MyHeader />
            <Greeting name="Dani" />
            <Greeting name="Bob" />
            <Greeting name="Huss" />
            <Greeting name="Neill" />
            <Sum num1={100} num2={2010} />
            <Sum num1={39} num2={3} />
            <TVEpisode episodeData={episodes[0]} />
            <TVEpisode episodeData={episodes[1]} />
            <Footer />
        </div>
    );
}
