import Head from "next/head";
import { Heading } from "../components/heading/heading";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div>Index page works</div>
      <Heading />
    </div>
  );
}