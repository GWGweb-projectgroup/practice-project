<?php
  /* TODO:
   * Verify and include all variables
   *
   */
  //Titles
  $home_active="active"; $title = "Grow with Google | eCommerce project";
  $sale_active="active"; $title = "Grow with Google | On Sale";

  // Category Pages
  $audio_active="active"; $title = "Grow with Google | "; //. $category;

  // Single Product
  $product_active="active"; $title = "Grow with Google | "; // . $product_name;
?>

<!-- Header and Nav -->
<?php require_once $_SERVER["DOCUMENT_ROOT"] . '/inc/header.php';?>
<?php require_once $_SERVER["DOCUMENT_ROOT"] . '/inc/nav.php';?>

<!-- Body of current page -->
<?php require_once $_SERVER["DOCUMENT_ROOT"] . '/product.php';?>

<!-- Footer -->
<?php require_once $_SERVER["DOCUMENT_ROOT"] . '/inc/footer.php';?>
