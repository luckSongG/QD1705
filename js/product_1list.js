console.log("载入成功");

require.config({
	paths:{
		"jquery":"jquery-1.11.3",
		"cookie":"jquery.cookie",
		"product_1list":"product_1list",
	},
	shim:{
		"jquery-cookie":"[jquery]"
	}
})


require(["productlist"],function(productlist){
	console.log(productlist.lu());
})

require(["product_2list"],function(product_2list){
	console.log(product_2list.product_2list());
})
require(["product_3list"],function(product_3list){
	console.log(product_3list.product_3list());
})