/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <div className="copyright text-black" id="copyright">
          Developed by{" "}
          <a
            href="https://www.maastrichtuniversity.nl/about-um/faculties/law/research/law-and-tech-lab"
            target="_blank"
          >
           Maastricht Law & Tech Lab
          </a>
          {" "}at{" "}
          <a
            href="https://www.maastrichtuniversity.nl"
            target="_blank"
          >
            Maastricht University
          </a>
          .

          {/*With the support of{" "}*/}
          {/*<a*/}
              {/*href="https://www.maastrichtuniversity.nl/ap.vandermei"*/}
              {/*target="_blank"*/}
          {/*>*/}
            {/*Mr. Anne van der Mei*/}
          {/*</a>*/}
          {/*{" "}and{" "}*/}
          {/*<a*/}
              {/*href="https://www.creative-tim.com?ref=nukr-transparent-footer"*/}
              {/*target="_blank"*/}
          {/*>*/}
            {/*Prof. Marjon Weerepas*/}
          {/*</a>*/}
          {/*.*/}
        </div>


      </Container>
    </footer>
  );
}

export default TransparentFooter;
