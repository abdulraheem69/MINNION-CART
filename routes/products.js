import express, { response } from "express";
import Product from "../modals/product.js";


const router = express.Router();

// Get product
router.get("/",function(req,res)
{
	Product.find({},function(err,data)
		{
			if(err)
				console.log(err);
			else
				res.render("admin",{Product:data});
		})
}); 



// Add Product
router.get("/add", async function (req, res, next) {
	res.render("add");
});

router.post("/add", async function (req, res, next) {
	let product = new Product(req.body);
	await product.save();
	res.redirect("/admin");
  });
 

  router.get("/delete/:id", async function (req, res, next) {
	console.log(req.params.id);
	let product = await Product.findByIdAndDelete(req.params.id);
	res.redirect("/admin");
	
  });

  

  export default router;