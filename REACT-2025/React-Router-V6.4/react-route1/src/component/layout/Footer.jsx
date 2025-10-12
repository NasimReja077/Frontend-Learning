import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="footer-container container">
        <div className="content_1">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFBUlEQVR4Ae2VBazjWBJFz61nJ804zMwzy8yM4uUVLJNomUmMK1wWLzMzMzPDYNLDTL8T269qfuynr3xN1COm6RMdVQR23dyXxNzrOYwO7D7+8d61T5MZgSMnYKFxwjnHv1N//GPLEp/av+M1x2Q7A4gA2QL3cKCqx9991PXXf4clpvtPOD5m7RsoGOFgckKq7ReVe3eKuvxGyAg2iOji6qtu+iBwBYUPHb3jqDtm8/fhoy0CFAAZBwQE8/3ApgCsNS+U59dRCICyy6z6iYVV/YKIIEfQhTNnXYVu72YnsYSa5sWdYgsBAmyTQsG53I14ASsIcePa0Tu/a91Ik7KQmTkHUzC3dVPQzfNGgM9BsuDlFtBpWGhSPxOLCfI4+3PPfnaiMNl74gW4X8QKZOmLZ1588dyuPePEA3Ojm1nQiN450bewpnwyhbV925+QIk5PiA7HHBSDFBWx89Sf/WzjGuazFwBiFTb6VD8e/utfH2xS3DiXM7PMTJn5YprT0Z1AIbm/KoVIiBZQ0YqptOFN0x/De8FwnscqpOmv73jYLyjXMrO4orHhGBqcRtE7I07p69+///gqeGYtow7RKVBZ2Cux0Ubn5wO8eOdxD1P4qawgkn32OXw+bwRoxWRO0BDlCKCJxfQTAap88KUJ6oSoJBxhZaGgzNKGrA+g3D6fFUSAV9WnKQwNKCaNoC2ffC5nbs6MOPFz5503SqGX1QFVxLrCCQQkYKOFUDHO+8MDHlCH+7NZgar0r1NuverPFCqALtnlXW5xQQDOMCN8157rr31B53FiRpjACRx6U4jhBSAYgpw9vvTAUxr8KAtIlCNiIEyfBmJTgBl5kg0iSgBFP4OQN7P31iGSwENkooQQiYToGWYAOXZ25m/LClICK82lAJOcbaNPcwdsCuDjNGnbliDI5aAcqIGtzskZMMCHm+BAiNaCmijLiWFKtF3zcDQ0ZApyeZ9Mvz3juuklLGEAtmv7pJVHo2B90pa5OxJViJp1AyqKAaPR+AMWQVJgWkywhUT/aoafc/leQX/vyj7NJkqAv/3nyptbxe0tTkfQliaOzDU16q3YCEJt6Z/jLfWHBfQG5exACykLyxd6EaaxaLst+tzKAO8Fz9K0BQaD/V6xFWPkidqNKhaqt7b00YvOOusSk60pwIoJYX1IKz/phd6/bxM/uvC6665dFaCnE5NOQe6Fk7oRtUMFjELrWm9NunPnrl0f109+0iXZ/1Jseh70jgKyREvQqrRRV5+isDpAxLQ0yS5PHJ3TsNhFBUP1iLFVn71oMrm5XPxPAbbcgkPlIiJoSpudcWe9d+9XDhlApisonJZHJNlQd8AoD0FqJ8bbt32YQgr9K/mwWFFmuWmFhvoVtEnffOjFF9/GCioKgU0h90tP7EYAG4/biMAjMEt/Ov2a6e8peNK/rAOxGUOMw2iVyQGk6pOwGqOQjL6BE3LNCLGMpL6RUTX6CEtoy45/GjAoUtEktoZogU66sd5zxHfvMcB423ha6mcl4tY7x7s+wxKnnX/SZUlpTWWpigDb3GjD6RJffPrFF8/vMcDx9ZFX7fOq3eMVqwhLnzznhv/ezhKLXwJJ/y9LN7EtjNx/++vPcgiMwiLlOb7tOrGSsFH9UVYh/ZMVJMRWpemORz/5pxyCiiWO0fhdVLHL6RGFMG475ZYr/8oKsvGBhP0Go8fLdQaxN8b/ffrnP585BIc5zF1p8IytMfCKJgAAAABJRU5ErkJggg==" alt="logo" />
          <p>
            Welcome to WoWFlix, your ultimate destination for
            cutting-edge gadgets!
          </p>
          <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
        </div>
        <div className="content_3">
          <h4>Experience</h4>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
        <div className="content_4">
          <h4>NEWSLETTER</h4>
          <p>
            Be the first to know about new
            <br />
            arrivals, sales & promos!
          </p>
          <div className="f-mail">
            <input type="email" placeholder="Your Email" />
            <i className="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
      <div className="f-design">
        <div className="f-design-txt">
          <p>Design and Code by Reja Technical</p>
        </div>
      </div>
    </footer>
  );
};