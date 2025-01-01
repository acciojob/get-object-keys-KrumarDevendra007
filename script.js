//your JS code here. If required

const student = {
    name: "John Doe",
    age: 30,
    city: "New York"
};

Object.prototype.getKeys() = function(){
	return Object.keys(this);
}



// Add the getKeys method to the Object prototype
Object.prototype.getKeys = function () {
    return Object.keys(this);
};
