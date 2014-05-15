var _Math = (function(){

	var distribution = (function(value, object){
		var div = [];
		switch(typeof object){
			case 'object':
				console.info("Comming Soon");
				break;
			case 'integer':
			case 'number':
				var decpoint = 0;
				if(value.toString().indexOf(".") != -1){
					decpoint = (value.toString().length-1)-value.toString().indexOf('.');
				}
				var diff = (value * Math.pow(10,decpoint)) % object;
				for(var i = 0; i < object ; i++){
					var result = value * Math.pow(10,decpoint);
					if(diff != 0){
						var calculo = Math.ceil(result/object);
						div.push((calculo /  Math.pow(10,decpoint)));
						diff -= 1;
					}else{
						var calculo = Math.floor(result/object);
						div.push((calculo /  Math.pow(10,decpoint)));
					}
				}
				break;
		}
		return div;
	});

	var arrSum = (function(params,precision){
		var sum = 0;
		var autoDetermine = false;
		var decP;
		if(precision == null){
			decP = 0
			autoDetermine = true;
		}else{
			decP = precision;
		}
		if(typeof params.length == "undefined"){
			for(var x in params){
				if(params[x].toString().indexOf(".") != -1 && autoDetermine){
					decpoint = (params[x].toString().length-1)-params[x].toString().indexOf('.');
					if(decpoint > decP){
						decP = decpoint	
					}
				}
				sum += parseFloat(params[x]);
			}
		}else{
			for(var x in params){
				if(params[x].toString().indexOf(".") != -1 && autoDetermine){
					decpoint = (params[x].toString().length-1)-params[x].toString().indexOf('.');
					if(decpoint > decP){
						decP = decpoint	
					}
				}
				sum += parseFloat(params[x]);
			}
		}
		return parseFloat(sum.toFixed(decP))	;
	});

	return {
		setDistribution: (function(value, params){
			return distribution(value, params);
		}),
		sum: (function(params, precision){
			return arrSum(params,precision);
		})
	}
})();