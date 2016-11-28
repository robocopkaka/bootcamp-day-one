module.exports = {
	getPrimes: function(number){
		if(number < 0){
			return "Please enter a positive number"
		}
		if(typeof(number) === 'number'){
			var root = Math.ceil(Math.pow(number, 0.5))
			var array = new Array(number + 1).fill(true)

			for(var count = 2; count <= root; count++){
				if(array[count] === true){
					count_square = count * count
					var i = 0
					for(var j = count_square; j<=number;j = (count_square) + (count*i)){
						array[j] = false;
						i++
					}// end inner for
				}// end if block
			}// end outer for
			var primes = []
			for(var k = 2; k< array.length;k++){
				if(array[k] === true){
					primes.push(k)
				}
			}
			return primes
		}
		else if(typeof(number) === 'string' || typeof(number === 'object')){
			return "Please enter a number"
		}
	}
}
