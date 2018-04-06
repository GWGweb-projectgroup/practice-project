<!-- Edit this file to make changes to nav in all pages -->

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">GwG MockStore</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link <?php echo $home_active;?>" href="index.html">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link<?php echo $sale_active;?>" href="onsale.html">On Sale</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Products
                </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item <?php echo $audio_active;?>" href="audio.html">Audio</a>
            <a class="dropdown-item <?php echo $gadgets_active;?>" href="onsale.html#tech_section">Tech &amp; Gadgets</a>
            <a class="dropdown-item <?php echo $comp_active;?>" href="computers.html">Computers</a>
            <a class="dropdown-item <?php echo $acc_active;?>" href="accessories.html">Accessories</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#"> <i class="fas fa-bookmark mr-2 text-info"></i>Saved Products</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Distributor's Account</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <!-- /.nav -->