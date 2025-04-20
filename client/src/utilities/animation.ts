

const scrollToSection = (id: string, onScroll?: () => void) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    onScroll?.();
  }
};

export {scrollToSection};
