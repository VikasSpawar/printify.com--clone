const WrapperContents = ({ title }) => {
  return (
    <div className=" w-full text-left p-4">
      <h4 className="content-title font-bold mx-2 py-4"> {title} </h4>
      <div className=" w-full  cursor-pointer ">
        <div className="m-2 space-y-4 ">
          {["shopify", "Etsy", "eBay", "Amazon", "Wix", "TikTok Shop"].map(
            (el) => (
              <p key={el} className="hover:text-primary">
                {el}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};
const FooterComponent = () => {
  return (
    <div>
      <footer className="mx-20">
        <div className="footer__social flex justify-between  ">
          <img
            src="https://printify.com/pfh/assets/logo-full.svg"
            rel="home"
            title="Logo"
            width={150}
          />
          <div className="site-social-links-menu flex space-x-4">
            <a
              href="https://www.facebook.com/Printify/"
              title="Facebook"
              target="_blank"
              rel="noopener"
            >
              <img
                width="32"
                height="32"
                alt="Facebook"
                loading="lazy"
                src="https://printify.com/wp-content/uploads/2019/07/facebook-icon.svg"
              />
            </a>
            <a
              href="https://www.instagram.com/printify/"
              title="Instagram"
              target="_blank"
              rel="noopener"
            >
              <img
                width="32"
                height="32"
                alt="Instagram"
                loading="lazy"
                src="https://printify.com/wp-content/uploads/2019/01/instagram-icon.svg"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/printify/"
              title="Linkedin"
              target="_blank"
              rel="noopener"
            >
              <img
                width="32"
                height="32"
                alt="Linkedin"
                loading="lazy"
                src="https://printify.com/wp-content/uploads/2019/01/linkedin-icon.svg"
              />
            </a>
            <a
              href="https://twitter.com/printify"
              title="Twitter"
              target="_blank"
              rel="noopener"
            >
              <img
                width="32"
                height="32"
                alt="Twitter"
                loading="lazy"
                src="https://printify.com/wp-content/uploads/2023/09/X-Logo-Green.svg"
              />
            </a>
            <a
              href="https://www.youtube.com/c/printify"
              title="Youtube"
              target="_blank"
              rel="noopener"
            >
              <img
                width="32"
                height="32"
                src="https://printify.com/wp-content/uploads/2019/01/youtube-icon.svg"
                alt="Youtube"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.tiktok.com/@printifyofficial?lang=en"
              title="Tiktok"
              target="_blank"
              rel="noopener"
            >
              <img
                width="32"
                height="32"
                src="https://printify.com/wp-content/uploads/2023/02/Tiktok-1.svg"
                alt="Tiktok"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.reddit.com/r/Printify/"
              title="Reddit"
              target="_blank"
              rel="noopener"
            >
              <img
                width="32"
                height="32"
                src="https://printify.com/wp-content/uploads/2019/01/reddit-icon.svg"
                alt="Reddit"
                loading="lazy"
              />
            </a>
          </div>
        </div>
        <div className=" columns-2 lg:columns-4">
          <WrapperContents title="Integrations" />
          <WrapperContents title="Discover" />
          <WrapperContents title="Start Selling" />
          <WrapperContents title="Printify" />
        </div>
      </footer>
      <div className="bg-[rgb(247,247,247)] p-4">
        <div className="site-info__bg full-width-bg"></div>
        <div className="site-info__content">
          <div className="site-info__links text-sm  text-gray-400 space-x-6 flex flex-wrap justify-center">
            <a
             
              href="https://printify.com/intellectual-property-policy/"
            >
              
              Intellectual Property Policy
            </a>
            <a
             
              href="https://printify.com/terms-of-service/"
            >
              
              Terms of Service
            </a>
            <a
             
              href="https://printify.com/privacy-policy/"
            >
           
              Privacy Policy
            </a>
            <a
             
              href="https://printify.com/security/"
            >
           
              Security
            </a>
          </div>
          <p className="site-info__copy small-text">
            © 2024 Printify, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
