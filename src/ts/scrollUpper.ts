import rafraf from "./rafraf";

const scrollUpper = () => {
  const btn = document.querySelector(".scroll-upper");
  const header = document.querySelector(".header");

  const intObsOptions = {
    rootMargin: "20% 0px 0px",
  };

  const io = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      btn.classList.remove("enter", "enter-active");
    } else {
      btn.classList.add("enter");
      rafraf(() => btn.classList.add("enter-active"));
    }
  }, intObsOptions);

  io.observe(header);

  btn.addEventListener("click", () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
};

export default scrollUpper;
