const Footer = () => {
  return (
    <footer className={"mt-20 text-center md:mt-20"}>
      <div className={"mx-auto font-medium"}>
        Fait avec amour par{" "}
        <a
          className={"ml-1 underline hover:text-slate-700"}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/alexandre-mace"
        >
          alexandre-mace
        </a>
      </div>
    </footer>
  );
};

export default Footer;
