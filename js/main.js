console.log("载入成功");

require.config({
	paths:{
		"jquery":"jquery-1.11.3",
		"cookie":"jquery.cookie",
		"productlist":"productlist",
	},
	shim:{
		"jquery-cookie":"[jquery]"
	}
})


require(["register"],function(register){
	console.log(register.main());
})
