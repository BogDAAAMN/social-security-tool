/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer position-relative">
      <Container>
        <div className="text-black">
          All the information on this website is published in good faith and for general information purpose only. This website does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website is strictly at your own risk. No liability is accepted for any losses and/or damages in connection with the use of this tool. No personal data are stored, processed, or shared with third parties.
        </div>

        <div className="text-black">
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
        </div>

        {/* <div className="text-black">
          With the support of{" "}
          <a
              href="https://www.maastrichtuniversity.nl/ap.vandermei"
              target="_blank"
          >
            Prof. Anne van der Mei
          </a>
          {" "}and{" "}
          <a
              href="https://www.creative-tim.com?ref=nukr-transparent-footer"
              target="_blank"
          >
            Prof. Marjon Weerepas
          </a>
          .
        </div> */}


      </Container>
    </footer>
  );
}

export default TransparentFooter;
