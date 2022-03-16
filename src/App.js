import logo from './logo.svg';
import './App.css';
import {Navbar} from "./components/Navbar";
import {Paragraph} from "./components/Paragraph";
import {Input} from "./components/Input";
import { MySelf } from "./components/MySelf";
import {Counter} from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Paragraph />
      <Input />
      <MySelf name="Giphty" age={25} gender="female" />
      <MySelf name="Sonia" age={15} gender="female" />
      <MySelf name="Isaac" age={22} gender="male" />
      <MySelf name="Belinda" age={28} gender="female" />
      <MySelf name="Cindy" age={40} gender="female" />
      <MySelf name="Patoo" age={100} gender="male" />
      <Counter />
    </div>
  );
}

export default App;
