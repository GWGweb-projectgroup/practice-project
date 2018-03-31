<!-- Verify and include all variables -->

<!-- Titles -->
<?php $home_active="active"; $title = "Grow with Google | eCommerce project";?>
<?php $sale_active="active"; $title = "Grow with Google | On Sale";?>
 <!-- Category Pages -->
<?php $audio_active="active"; $title = "Grow with Google | Audio";?>
<!-- Single Product -->
<?php $product_active="active"; $title = "Grow with Google | $product_name";?>

<!-- Header and Nav for entire site -->
<?php require_once $_SERVER["DOCUMENT_ROOT"] . '/inc/header.php';?>
<?php require_once $_SERVER["DOCUMENT_ROOT"] . '/inc/nav.php';?>

<!-- Body of current page -->
<?php require_once $_SERVER["DOCUMENT_ROOT"] . '/product.php';?>

<!-- Footer -->
<?php require_once $_SERVER["DOCUMENT_ROOT"] . '/inc/footer.php';?>
