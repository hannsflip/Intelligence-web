
class myHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
        <header id="header">
            <div class="container">
            <!-- partial:partials/_navbar.html -->
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="d-flex justify-content-between align-items-center navbar-top">
                <ul class="navbar-left">
                    <li class="day_time">time     
                    </li>
                    <li class="temperature">temperature</li>
                </ul>
                <div>
                    <a class="navbar-brand" href="#"
                    ><img src="assets/images/logo.svg" alt=""
                    /></a>
                </div>
                <div class="d-flex">
                    <ul class="navbar-right">
                    
                    </ul>
                    <ul class="social-media">
                    <li>
                        <a href="#">
                        <i class="mdi mdi-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i class="mdi mdi-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i class="mdi mdi-youtube"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i class="mdi mdi-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i class="mdi mdi-twitter"></i>
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
                <div class="navbar-bottom-menu">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div
                    class="navbar-collapse justify-content-center collapse"
                    id="navbarSupportedContent"
                >
                    <ul
                    class="navbar-nav d-lg-flex justify-content-between align-items-center"
                    >
                    
                    <li class="">
                        <h1 class="title_web " href="./cia/index.html">Declassified CIA</h1>
                    </li>
                    
                    
                    </ul>
                </div>
                </div>
            </nav>

            <!-- partial -->
            </div>
        </header>
        `
    }
}

customElements.define('my-Header', myHeader)



class myFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
        <!-- partial:partials/_footer.html -->
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="border-top"></div>
              </div>
              <div class="col-sm-3 col-lg-3">
                <ul class="footer-vertical-nav">
                  <li class="menu-title"><a href="pages/news-post.html">News</a></li>
                  <li><a href="index.html">Home</a></li>

                </ul>
              </div>
              <div class="col-sm-3 col-lg-3">
                <ul class="footer-vertical-nav">
                  <li class="menu-title"><a href="pages/world.html">World</a></li>
               
                </ul>
              </div>
              <div class="col-sm-3 col-lg-3">
                <ul class="footer-vertical-nav">
                  <li class="menu-title"><a href="#">Features</a></li>

                </ul>
              </div>
              <div class="col-sm-3 col-lg-3">
                <ul class="footer-vertical-nav">
                  <li class="menu-title"><a href="#">More</a></li>
                  <li><a href="#">RSS</a></li>
                  <li><a href="#">RSS</a></li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="d-flex justify-content-between">
                  <img src="assets/images/logo.svg" class="footer-logo" alt="" />

                  <div class="d-flex justify-content-end footer-social">
                    <h5 class="m-0 font-weight-600 mr-3 d-none d-lg-flex">Follow me</h5>
                    <ul class="social-media">
                      <li>
                        <a href="#">
                          <i class="mdi mdi-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="mdi mdi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="mdi mdi-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="mdi mdi-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="mdi mdi-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div
                  class="d-lg-flex justify-content-between align-items-center border-top mt-5 footer-bottom"
                >
                  <ul class="footer-horizontal-menu">
                    <li><a href="Information about this project.html">Information about this project.html.</a></li>      
                  </ul>
                  <p class="font-weight-medium">
                    <a href="#" target="_blank" class="text-dark">Development by Josh</a> 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <!-- partial -->
      </div>
    </div>
    
        `
    }
}

customElements.define('my_Footer', myFooter)