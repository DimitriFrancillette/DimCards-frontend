import Image from "next/image";
import styles from './Home.module.css';
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex justify-center mt-12">
        <h1 className="text-5xl">Build your LoR Decks</h1>
      </div>
      <div className="flex justify-center mt-6">
        <p className="font-semibold">Build you decks and craft your victory !</p>
      </div>
    </div>
  );
}
