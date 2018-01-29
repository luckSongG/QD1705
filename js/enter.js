console.log("添加成功");

require.config({
	paths:{	
		"jquery":"jquery-1.11.3",
		"cookie":"jquery.cookie",
		"enter":"enter",
	},
	shim:{
		"jquery-cookie":"[jquery]"
	}
})

require(["enter1"],function(enter1){
	console.log(enter1.enroll());
})
