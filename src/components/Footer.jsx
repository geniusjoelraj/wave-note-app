const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <div className="footer">
      <p>Copyright &copy; {year}</p>
    </div>
  );
}

export default Footer;
