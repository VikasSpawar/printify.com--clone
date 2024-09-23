import React from "react";
import MobileNav from "./MobileNav";


const NavItem = ({ href, children }) => {
  return (
    <li className="menu-item  my-auto">
      <a href={href} className="block  py-2 text-gray-700 hover:text-gray-900 ">
        {children}
      </a>
    </li>
  );
};


const NavDropdown = ({ title, items }) => {
  return (
    <li className="menu-item menu-item-has-children group relative  ">
      <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:text-gray-900  h-[71px]">
        {title}
        <span className="ml-1 transform group-hover:rotate-[180deg] transition-transform duration-300">▼</span>
      </a>
      <ul className="sub-menu text-left  absolute  group-hover:block bg-white shadow-lg  rounded-lg w-[210px] px-4 py-3 text-nowrap opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-500">
        {items.map((item, index) => (
          <NavItem key={index} href={item.href}>
            {item.label}
          </NavItem>
        ))}
      </ul>
    </li>
  );
};


const Navbar = () => {
  return (
    <div className="bg-white shadow-md z-20 sticky top-0">
      <div className="flex items-center justify-between px-8">
        <div className="flex">
                  <div className=" md:hidden">

      <MobileNav/>
        </div>
        <img width={100} className="mx-2" src="https://printify.com/pfh/assets/logo-full.svg" alt="logo" />

        </div>

        <nav className="site-navigation  hidden md:block">
          <ul className="flex space-x-4">
            <NavItem href="/app/products">Catalog</NavItem>

            <NavDropdown
              title="How it works"
              items={[
                { href: "https://printify.com/how-it-works/", label: "How Printify Works" },
                { href: "https://printify.com/print-on-demand/", label: "Print On Demand" },
                { href: "https://printify.com/the-printify-quality-promise/", label: "Printify Quality Promise" },
                { href: "https://printify.com/profit-predictor/", label: "What to Sell?" },
              ]}
            />

            <NavItem href="https://printify.com/pricing/">Pricing</NavItem>
            <NavItem href="https://printify.com/blog/">Blog</NavItem>

            <NavDropdown
              title="Services"
              items={[
                { href: "https://printify.com/printify-studio/", label: "Printify Studio" },
                { href: "https://printify.com/printify-express-delivery/", label: "Printify Express Delivery" },
                { href: "https://printify.com/transfer-products-to-printify/", label: "Transfer Products" },
                { href: "https://printify.com/bulk-orders/", label: "Order In Bulk" },
                { href: "https://printify.com/experts-program/", label: "Experts Program" },
              ]}
            />

            <NavDropdown
              title="Use-cases"
              items={[
                { href: "https://printify.com/merchandise-for-your-fans/", label: "Merch for Fans" },
                { href: "https://printify.com/merchandise-for-ecommerce-entrepreneurs/", label: "Merch for eCommerce" },
                { href: "https://printify.com/merchandise-for-enterprises/", label: "Merch for Enterprises" },
                { href: "https://printify.com/boss-your-business/", label: "Grow Your Store" },
              ]}
            />

            <NavDropdown
              title="Need help?"
              items={[
                { href: "https://help.printify.com/hc/en-us", label: "Help Center" },
                { href: "https://printify.com/contacts/", label: "Contacts" },
                { href: "https://help.printify.com/hc/en-us/signin?return_to=https%3A%2F%2Fhelp.printify.com%2Fhc%2Fen-us%2Frequests", label: "My Requests" },
              ]}
            />
          </ul>
        </nav>

        <div className=" text-nowrap space-x-4">
          <a href="">
            <button className="px-4 py-2 border border-gray-500 w-[87px] hover:text-primary rounded">Log in</button>
          </a>
          <a href="">
            <button className="px-4 py-2 text-white  w-[87px]   bg-primary hover:bg-green-700 rounded">Sign up</button>
          </a>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
