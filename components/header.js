class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        .navbar {
          background-color: black !important; 
          font-family: 'Antonio', sans-serif;
        }
        .navbar-toggler {
          color: white !important;
        }
        #collapsibleNavbar {
          background-color: black; 
        }
        .navbar-nav .nav-link {
          color: white !important; /* Set the color of the links in the collapsed navbar to white */
        }
        .navbar-nav .nav-link:hover {
          color: gray !important; 
        }
        .navbar img {
          width: 130px;
          height: auto;
        }
        </style>

        <header>
        <!--navbar-->
        <nav class="navbar bg-dark navbar-dark">
         <!-- Brand -->
         <img src="assets/images/logo (2).png" alt="logo">
         <!-- Toggler/collapsibe Button -->
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
           <span class="navbar-toggler-icon"></span>
         </button>
         <!-- Navbar links -->
         <div class="collapse navbar-collapse" id="collapsibleNavbar">
           <ul class="navbar-nav">
             <li class="nav-item">
               <a class="nav-link" href="index.html">Home</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="whoweare.html">Who We Are</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#">What We Produce</a>
             </li>
           </ul>
         </div>
       </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);