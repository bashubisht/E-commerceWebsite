const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails, createProductReview, getProductReviews, deleteReview, getAdminProducts } = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/admin/products/new").post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router.route("/admin/products").get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);
router.route("/admin/product/:id").put(isAuthenticatedUser, updateProduct).delete(isAuthenticatedUser, deleteProduct, authorizeRoles("admin"));
router.route("/product/:id").get(getProductDetails);
router.route("/review").put(isAuthenticatedUser, createProductReview);
router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

module.exports = router

//Configuring the Routing
