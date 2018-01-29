console.log("首页模块载入");
require.config({
	paths:{
		"jquery":"jquery-1.11.3",
		"cookie":"jquery.cookie",
		"index":"index",
		"parabola":"parabola",
	},
	shim:{
		
		"parabola":{
			exports:"_"
		},
		
		"jquery-cookie":"[jquery]",
		"parabola":["jquery"]
	}
})


require(["particulars1"],function(particulars1){
	console.log(particulars1.particulars1());
})
require(["particulars2"],function(particulars2){
	console.log(particulars2.particulars2())
})
