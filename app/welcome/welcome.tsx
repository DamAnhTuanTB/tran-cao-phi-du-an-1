import { Link } from "react-router";
import "./index.css";

// Image imports
import anhMoi from "./images/anh-moi.png";
import anhAlptop3 from "./images/anh_alptop_3.png";
import anhLaptop1 from "./images/anh_laptop_1.png";
import anhLaptop2 from "./images/anh_laptop_2.png";
import anhNguoiCongNghe from "./images/anh_nguoi_cong_nghe.png";
import anhTo from "./images/anh_to.png";
import icon1Fooder from "./images/icon-1-fooder.png";
import icon2Fooder from "./images/icon-2-fooder.png";
import icon3Fooder from "./images/icon-3-fooder.png";
import iconBanTay from "./images/icon-ban-tay.png";
import iconContent7 from "./images/icon-content-7.png";
import iconLogo from "./images/icon-logo.png";
import iconMayBay from "./images/icon-may-bay.png";
import iconNgoiNha from "./images/icon-ngoi-nha.png";
import iconNguoi from "./images/icon-nguoi.png";
import iconNhoContent5 from "./images/icon-nho-content-5.png";
import icon2Nguoi from "./images/icon_2_nguoi.png";
import icon3BanTay from "./images/icon_3_ban_tay.png";
import iconHopTaiNghe from "./images/icon_hop_tai_nghe.png";
import iconNgonTay from "./images/icon_ngon_tay.png";
import logo1 from "./images/logo-1.png";
import logo2 from "./images/logo-2.png";
import logo3 from "./images/logo-3.png";
import logo4 from "./images/logo-4.png";
import logo5 from "./images/logo-5.png";
import logo6 from "./images/logo-6.png";
import logoCo from "./images/logo-co.png";
import logoIpsum from "./images/logo-ipsum.png";
import logoMat from "./images/logo-mat.png";
import logoQuat from "./images/logo-quat.png";
import logoVong from "./images/logo-vong.png";
import logoXoan from "./images/logo-xoan.png";
import logo from "./images/logo.png";
import manDangNhap from "./images/man-dang-nhap.png";

export function Welcome() {
  return (
    <>
      {/* HEADER */}
      <div className="header">
        <div className="logo-header">
          <img src={iconLogo} alt="" />
          <div>Nexcent</div>
        </div>

        <div className="menu-header">
          <div>Home</div>
          <div>Service</div>
          <div>Feature</div>
          <div>Product</div>
          <div>Testimonial</div>
          <div>FAQ</div>
        </div>

        <div className="button-header">
          <div className="button-one-header">Login</div>
          <Link to="/sign-up" className="button-two-header">
            Sign up
          </Link>
        </div>
      </div>

      {/* INTRODUCE */}
      <div className="introduce">
        <div className="title-introduce">
          <div className="title-1-introduce">
            <span>Lessons and insights</span>
            <span>from 8 years</span>
          </div>
          <div>
            Where to grow your business as a photographer: site or social media?
          </div>
          <div className="button-introduce">Register</div>
        </div>
        <div className="image-introduce">
          <img src={anhNguoiCongNghe} alt="" />
        </div>
      </div>

      <div className="charater">
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* CONTENT-1 */}
      <div className="content-1">
        <div className="title-content-1">Our Clients</div>
        <div>We have been working with some Fortune 500+ clients</div>
        <div className="logo-content-1">
          <img src={logo} alt="" />
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
        </div>
      </div>

      {/* CONTENT-2 */}
      <div className="content-2">
        <div className="title-content-2">
          Manage your entire community in a single system
        </div>
        <div>Who is Nextcent suitable for?</div>
        <div className="menu-content-2">
          <div className="child-1-content-2">
            <img src={iconNguoi} alt="" />
            <div>Membership Organisations</div>
            <div>
              Our membership management software provides full automation of
              membership renewals and payments
            </div>
          </div>
          <div className="child-1-content-2">
            <img src={iconNgoiNha} alt="" />
            <div>National Associations</div>
            <div>
              Our membership management software provides full automation of
              membership renewals and payments
            </div>
          </div>
          <div className="child-1-content-2">
            <img src={iconBanTay} alt="" />
            <div>Clubs And Groups</div>
            <div>
              Our membership management software provides full automation of
              membership renewals and payments
            </div>
          </div>
        </div>
      </div>

      {/* Content-3 child-1 */}
      <div className="content-3">
        <div className="image-content-3">
          <img src={manDangNhap} alt="" />
        </div>
        <div className="child-1-content-3">
          <div className="title-content-3">
            The unseen of spending three years at Pixelgrade
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </div>
          <div className="button-content-3">Learn More</div>
        </div>
      </div>

      {/* Content-4 */}
      <div className="content-4">
        <div className="title-content-4">
          <div className="title-small-content-4">
            <span>Helping a local</span>
            <span>business reinvent itself</span>
          </div>
          <div>We reached here with our hard work and dedication</div>
        </div>
        <div className="child-2-content-4">
          <div className="image-content-4">
            <img src={icon2Nguoi} alt="" />
            <div className="data">
              <div>2,245,341</div>
              <div>Members</div>
            </div>
          </div>
          <div className="image-content-4">
            <img src={icon3BanTay} alt="" />
            <div className="data">
              <div>46,328</div>
              <div>Clubs</div>
            </div>
          </div>
          <div className="image-content-4">
            <img src={iconNgonTay} alt="" />
            <div className="data">
              <div>828,867</div>
              <div>Event Bookings</div>
            </div>
          </div>
          <div className="image-content-4">
            <img src={iconHopTaiNghe} alt="" />
            <div className="data">
              <div>1,926,436</div>
              <div>Payments</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content-3 child-2 */}
      <div className="content-3">
        <div className="image-content-3">
          <img src={anhMoi} alt="" />
        </div>
        <div className="child-1-content-3">
          <div className="title-content-3">
            How to design your site footer like we did
          </div>
          <div>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </div>
          <div className="button-content-3">Learn More</div>
        </div>
      </div>

      {/* Content-5 */}
      <div className="content-5">
        <div className="image-content-5">
          <img src={anhTo} alt="" />
        </div>
        <div className="child-2-content-5">
          <div>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </div>
          <div>Tim Smith</div>
          <div>British Dragon Boat Racing Association</div>
          <div className="logo-content-5">
            <img src={logoQuat} alt="" />
            <img src={logoMat} alt="" />
            <img src={logoCo} alt="" />
            <img src={logoIpsum} alt="" />
            <img src={logoVong} alt="" />
            <img src={logoXoan} alt="" />
            <div className="link">
              <div>Meet all customers</div>
              <img src={iconNhoContent5} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT-6 */}
      <div className="content-6">
        <div className="title-content-6">Caring is the new marketing</div>
        <div>
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </div>
        <div className="menu-content-6">
          <div className="child-1-content-6">
            <img src={anhLaptop1} alt="" />
            <div className="content-image">
              <div>Creating Streamlined Safeguarding Processes with OneRen</div>
              <div className="link">
                <div>Readmore</div>
                <img src={iconNhoContent5} alt="" />
              </div>
            </div>
          </div>

          <div className="child-1-content-6">
            <img src={anhLaptop2} alt="" />
            <div className="content-image">
              <div>
                What are your safeguarding responsibilities and how can you
                manage them?
              </div>
              <div className="link">
                <div>Readmore</div>
                <img src={iconNhoContent5} alt="" />
              </div>
            </div>
          </div>

          <div className="child-1-content-6">
            <img src={anhAlptop3} alt="" />
            <div className="content-image">
              <div>Revamping the Membership Model with Triathlon Australia</div>
              <div className="link">
                <div>Readmore</div>
                <img src={iconNhoContent5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT-7 */}
      <div className="content-7">
        <div className="title-content-7">
          Pellentesque suscipit fringilla libero eu.
        </div>
        <div className="button-content-7">
          <div>Get a Demo</div>
          <img src={iconContent7} alt="" />
        </div>
      </div>

      {/* FOODER */}
      <div className="fooder">
        <div className="child-1-fooder">
          <div className="logo-fooder">
            <img src={iconLogo} alt="" />
            <div>Nexcent</div>
          </div>
          <div>
            <div>Copyright © 2020 Nexcent ltd.</div>
            <div>All rights reserved</div>
          </div>
          <div className="icon-fooder">
            <img src={icon1Fooder} alt="" />
            <img src={icon2Fooder} alt="" />
            <img src={icon3Fooder} alt="" />
            <img src={icon1Fooder} alt="" />
          </div>
        </div>
        <div className="child-2-fooder">
          <div className="menu-fooder">
            <div>Company</div>
            <div>About us</div>
            <div>Blog</div>
            <div>Contact us</div>
            <div>Pricing</div>
            <div>Testimonials</div>
          </div>
          <div className="menu-fooder">
            <div>Support</div>
            <div>Help center</div>
            <div>Terms of service</div>
            <div>Legal</div>
            <div>Privacy policy</div>
            <div>Status</div>
          </div>
          <div className="menu-fooder">
            <div>Stay up to date</div>
            <div className="input-fooder">
              <input
                type="email"
                placeholder="Your email address"
                className="input-text"
              />
              <img src={iconMayBay} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
