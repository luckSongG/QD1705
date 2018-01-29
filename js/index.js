console.log("首页模块载入");
require.config({
	paths:{
		"jquery":"jquery-1.11.3",
		"cookie":"jquery.cookie",
		"index":"index",
	},
	shim:{
		"jquery-cookie":"[jquery]"
	}
})

require(["subject"],function(subject){
	console.log(subject.subject());
})

require(["carousel"],function(carousel){
	console.log(carousel.carousel());
})

require(["carousel1"],function(carousel1){
	console.log(carousel1.carousel1());
})

require(["carousel2"],function(carousel2){
	console.log(carousel2.carousel2());
})

require(["carousel3"],function(carousel3){
	console.log(carousel3.carousel3());
})
