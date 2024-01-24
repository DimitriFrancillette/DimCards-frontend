import Image from "next/image";
import styles from './Home.module.css';
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <h1>Hello World</h1>
    </div>
  );
}
