import { useRef, useState, useEffect } from "react";
import { Box, Flex, HStack, Link, chakra } from "@chakra-ui/react";
import { useScroll } from "framer-motion";
import { scrollToId } from "../../utils/scrollToId";

export default function Header() {
  const ref = useRef();
  const [y, setY] = useState(0);
  const [active, setActive] = useState("section1");
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};
  const { scrollY } = useScroll();

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const header = document.getElementsByTagName("header")[0];

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        header.offsetHeight +
          (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleClick(id) {
    scrollToId(id, 1000);
  }

  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  useEffect(() => {
    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");

    const handleScroll = () => {
      if (isInViewport(section1)) {
        setActive("section1");
      }
      if (isInViewport(section2)) {
        setActive("section2");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <chakra.header
      id="header"
      ref={ref}
      bg="white"
      shadow={y > height ? "md" : undefined}
      transition="box-shadow 0.2s, background-color 0.2s"
      pos="sticky"
      top="0"
      left="0"
      right="0"
    >
      <Flex w="100%" h="100%" px="5" justifyContent="center">
        <HStack
          spacing="5"
          display={{ base: "none", md: "flex" }}
          color="gray.400"
          fontSize="large"
        >
          <Link
            display="block"
            transition="color 0.2s"
            _hover={{ color: "gray.800" }}
            color={active === "section1" && "gray.800"}
            py="3"
            onClick={() => handleClick("section1")}
          >
            About Me
          </Link>
          <Link
            display="block"
            transition="color 0.2s"
            _hover={{ color: "gray.800" }}
            color={active === "section2" && "gray.800"}
            py="3"
            onClick={() => handleClick("section2")}
          >
            Experience
          </Link>
          <Link
            href="https://github.com/kaungzaw"
            isExternal
            display="block"
            transition="color 0.2s"
            _hover={{ color: "gray.800" }}
            py="3"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/kaung-zaw-b232901a5"
            isExternal
            display="block"
            transition="color 0.2s"
            _hover={{ color: "gray.800" }}
            py="3"
          >
            LinkedIn
          </Link>
        </HStack>
      </Flex>
    </chakra.header>
  );
}
