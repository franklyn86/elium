function zipObject(keys, values) {

	var object = {}

	if(keys === undefined && values === undefined) return object

	if(values === undefined) {
		for (var key in keys) {
			object[key] = undefined
		}
		return object
	}

  if (typeof(keys[0]) === 'string' && typeof(keys[1]) === 'string') {
  	for (var key in keys) {
  		for (var value in values) {
  			object[key] = value
  		}
  	}
  	return object
  }

  var object1 = {}
  var object2 = {}

  keys.forEach((element,index) => {
  	object1[element] = keys[index+1]
  })

  values.forEach((element,index) => {
  	object2[element] = values[index+1]
  })

  for (var key in object1) {
  	object[key] = object1[key]
  }

  for (var key in object2) {
  	object[key] = object2[key]
  }
  return object
}