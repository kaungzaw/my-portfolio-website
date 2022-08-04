import { animateScroll } from "./animateScroll";

export const scrollToId = (id, duration = 3000) => {
  const initialPosition = window.scrollY;

  const element = document.getElementById(id);
  const header = document.getElementsByTagName("header")[0];

  animateScroll({
    targetPosition: element.offsetTop - header.offsetHeight,
    initialPosition,
    duration,
  });
};
