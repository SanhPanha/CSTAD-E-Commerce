import {
    Footer,
    FooterCopyright,
    FooterDivider,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
  } from "flowbite-react";
  import { FaTelegram, FaYoutube } from "react-icons/fa6";
  
  export default function FooterComponent() {
    return (
      <div className=" bg-blue-800 p-4">
        <Footer className="container mx-auto bg-primary border-0">
          <div className="w-full">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div>
                <img
                  src="https://istad.co/resources/img/logo_md.png"
                  className="w-24"
                />
                <p className="text-white text-xl mt-2">
                  Start your IT career with CSTAD
                </p>
              </div>
  
              <div>
                <FooterTitle className="text-white" title="Learn more" />
                <FooterLinkGroup col className="text-white">
                  <FooterLink href="/course">Course</FooterLink>
                  <FooterLink href="/it-news">IT News</FooterLink>
                  <FooterLink href="/course">Job Opportunity</FooterLink>
                  <FooterLink href="#">Privacy Policy</FooterLink>
                  <FooterLink href="#">FAQ</FooterLink>
                </FooterLinkGroup>
              </div>
  
              <div>
                <FooterTitle className="text-white" title="Contact us" />
                <FooterLinkGroup col className="text-white">
                  <FooterLink href="#">(+855) 95-990-910</FooterLink>
                  <FooterLink href="#">(+855) 93-990-910</FooterLink>
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <FaTelegram />
                      <span>Telegram</span>
                    </div>
                    <div className="flex items-center">
                      <FaYoutube />
                      <span>Youtube</span>
                    </div>
                  </div>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle className="text-white" title="Follow us" />
                <FooterLinkGroup col>
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fistad.co&amp;tabs&amp;width=255&amp;height=130&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=536767018150991"
                    width="255"
                    height="130"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </FooterLinkGroup>
              </div>
            </div>
            <FooterDivider />
            <div className="w-full grid place-content-center sm:items-center">
              <FooterCopyright
                className="text-white"
                by="Center of Science and Technology Advanced Development | All Rights Reserved™"
                year={2022}
              />
            </div>
          </div>
        </Footer>
      </div>
    );
  }
  