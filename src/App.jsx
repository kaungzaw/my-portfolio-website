import { chakra, Text } from "@chakra-ui/react";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <chakra.section id="section1" height="100vh" padding="4">
        <Text fontSize="4xl">Hello, I am Kaung Zaw</Text>
        <Text fontSize="3xl">I am a Programmer</Text>
      </chakra.section>
      <chakra.section id="section2" height="100vh" padding="4">
        Experience
      </chakra.section>
    </>
  );
}
