function Logo() {
  return (
    <a href="#">
      <span className="sr-only">Home</span>
      <img
        className="m-auto max-sm:h-4 max-sm:w-14"
        src="/logo.svg"
        width={88}
        height={20}
        alt="Logo"
      />
    </a>
  );
}

export default Logo;
