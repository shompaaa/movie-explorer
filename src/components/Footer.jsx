const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-[#0f1f35] text-base-content p-4" >
      <aside>
        <p className="text-white">
          Copyright © {new Date().getFullYear()}  Movie<span className="text-orange-500">Explorer</span> - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
