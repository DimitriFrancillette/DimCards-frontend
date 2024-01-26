import Image from "next/image";
import styles from './Home.module.css';
import Header from "./components/Header";
import Link from "next/link";

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
      <div className="flex justify-center my-10 space-x-5">
        <Link href="/builder">
          <button className="btn btn-secondary px-8">Build your Deck</button>
        </Link>
        <p className="mt-2 font-semibold">OR</p>
        <Link href='/library'>
          <button className="btn btn-success px-10">Find a Deck</button>
        </Link>
      </div>
    </div>
  );
}
