var _Math = (function(){

	var distribution = (function(value, object){
		var div = [];
		switch(typeof object){
			case 'object':
				var percentSUM = 0;
				for(var x in object){
					percentSUM += parseFloat(object[x]);
					div.push(parseFloat(((value * object[x])/100).toFixed(2)));
				}
				if(percentSUM != 100){
					console.error("The sum of the percentages is not equal to 100%");
					console.error("A soma das porcentagens não é igual a 100%");
					return false;
				}
				return div;
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
		if(isNaN(sum)){
			console.error("An error has occurred when sum function was executed! Parameters types different!");
			console.error("Ocorreu um erro quando a função sum foi executada! Tipos de parametros diferentes!");
			return false;
		}
		return parseFloat(sum.toFixed(decP))	;
	});

	var callApplyDiscount = (function(value, discount){
		return parseFloat((value * ((100 - discount)/100)).toFixed(2));
	});

	var callDiscount = (function(value1, value2){
		return parseFloat((Math.abs(value1 - value2)/value1).toFixed(6));
	});

	var callFullValue = (function(currentValue, discount){
		return parseFloat(((currentValue * 100)/(100 - discount)).toFixed(2));
	});

	return {
		setDistribution: (function(value, params){
			return distribution(value, params);
		}),
		sum: (function(params, precision){
			return arrSum(params,precision);
		}),
		applyDiscount: (function(value, discount){
			return callApplyDiscount(value, discount);
		}),
		getDiscount: (function(oldValue, newValue){
			return callDiscount(oldValue, newValue);
		}),
		getFullValue: (function(currentValue, discount){
			return callFullValue(currentValue, discount);
		})
	}
})();