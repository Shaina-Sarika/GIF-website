class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        .footer_div {
            height: 100%;
            background-color: black;
          }
          .footer_div img {
            margin-top: 5%;
            width: 15%;
          }
          .footer1 {
            color: #FFDE59;
            font-size: 180%;
            font-family: 'League Spartan', sans-serif;
            font-weight: bold;
            padding: 4%;
            margin-left: 2%;
          }
          .container_footer {
            display: flex;
            justify-content: space-between;
            padding: 1.2% 4.8% 5% 4.8%;
            color: white;
          }
          .left-column {
            flex: 1;
          }
          .right-column {
            flex: 1;
          }
          .left-column a {
            display: block;
            margin-bottom: 10px;
            text-decoration: none;
            color: white;
            margin-left: 3%;
            font-size: 180%;
            font-family: 'Antonio', sans-serif;
            line-height: 100%;
          }
          .right-column h2 {
            margin-bottom: 10px;
            font-family: 'League Spartan', sans-serif;
            font-weight: bold;
          }
          .right-column a {
            color: white;
          }
          .social-logos img {
            width: 30px;
            margin-right: 10px;
          }
          .social-logos i {
           font-size: 300%;
           padding: 0.7%;
          }
          .fa-linkedin {
            color: #0277B5;
          }
          .fa-square-twitter {
            color: #1B9DF0;
          }
        </style>

        <footer>
        <!--footer-->
<div class="footer_div">
   <div>
      <img src="assets/images/logo (2).png" alt="logo">
   </div>
   <div class="footer1">
      <p>CONNECTING WORLD THROUGH ONE PLATFORM.</p>
   </div>
   <div class="container_footer">
      <div class="left-column">
         <a href="index.html">HOMEPAGE</a>
         <a href="whoweare.html">WHO WE ARE</a>
         <a href="whatweproduce.html">WHAT WE PRODUCE</a>
         <a href="membership.html">GIF MEMBERSHIP</a>
         <a href="contact.html">CONTACT US</a>
       </div>
       <div class="right-column">
         <h2>CONNECT WITH US</h2>
         <div class="social-logos">
            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            <a href="#"><i class="fa-regular fa-envelope"></i></a>
            <a href="#"><i class="fa-sharp fa-solid fa-m"></i></a>
            <a href="#"><i class="fa-brands fa-square-twitter"></i></a>
         </div>
       </div>
   </div>
</div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);