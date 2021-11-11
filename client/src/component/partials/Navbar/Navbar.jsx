import { NavLinks } from "./navLinks";
import { ulStyling, liStyling, aStyling } from "./styles";

const Navbar = () => {
  return (
    <nav>
      <ul style={ulStyling}>
        {NavLinks.map((link) => {
          return (
            <li style={liStyling}>
              <a href={link.href} style={aStyling}>
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
