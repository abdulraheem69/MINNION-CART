import express from "express";
import Users from "../modals/user.js";
import Product from "../modals/product.js"


const router = express.Router();

// router.get("/", (req, res) => {
//     res.render("Store");
// })

router.get("/",function(req,res)
{
	Product.find({},function(err,data)
		{
			if(err)
				console.log(err);
			else
				res.render("Store",{Product:data});
		})
}); 


export default router;