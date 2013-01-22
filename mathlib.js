function polynomial(poly) {
	this.poly = poly;
	this.degree = this.poly.length - 1;
	// function getstring(){
	// degree.
	// }
}

function multpoly(poly1,poly2) {
	var newpoly = [];
	for (i=0;i<=poly1.degree;i++) {
		for (n=0;n<=poly2.degree;n++) {
			if (newpoly[i+n] != undefined) {
				newpoly[i+n] = newpoly[i+n] + poly1.poly[i]*poly2.poly[n]; //>newpoly[i+n] dis guy
			}
			else {
				newpoly[i+n] = poly1.poly[i]*poly2.poly[n]; //>newpoly[i+n] dis guy
			}
		}
	}
	return new polynomial(newpoly);
}

function addpoly(poly1,poly2) {
	var newpoly = poly2.poly;
	for (i=0;i<=poly1.degree;i++) {
		if(newpoly[i] != undefined) {
			newpoly[i] = newpoly[i] + poly1.poly[i];
		}
		else {
			newpoly[i] = poly1.poly[i];
		}
	}
	return new polynomial(newpoly);
}

function subpoly(poly1,poly2) {
	var newpoly = poly1.poly;
	for (i=0;i<=poly2.degree;i++) {
		if(newpoly[i] != undefined) {
			newpoly[i] = newpoly[i] - poly2.poly[i];
		}
		else {
			newpoly[i] = poly2.poly[i]*-1;
		}
	}
	return new polynomial(newpoly);
}

function genimags(A,B) {
	self.imag = new polynomial([B*B]);
	self.foo = new polynomial([1,-1*A]);
	self.bar = new multpoly(self.foo,self.foo);
	self.newpoly = new addpoly(self.bar,self.imag);
	return self.newpoly;
}
var bar = new polynomial([1,2]);
var foo = new polynomial([1,3]);

console.log(addpoly(bar,foo).poly);
console.log(multpoly(bar,foo).poly);
console.log(genimags(1,2).poly);

function generatepolynomial(degree) {
	var poley = new polynomial([1]);
	var answer = '';
	for (i=0;i<=degree) {
		isneg = 0;
		first = Math.floor(Math.random()*10);
		zeroth = Math.floor(Math.random()*10);
		tempoly = new polynomial([first,zeroth]);
		if (Math.floor(math.random()*11)>=5) {
			zeroth = -1*zeroth;
			isneg = 1;
		}
		poley[1] = first;
		poley[0] = zeroth;
		if (isneg == 1) {
			answer = answer + '(' + poley[1] + 'x ' + poley[2] + ')';
		}
		else {
			answer = answer + '(' + poley[1] + 'x + ' + poley[2] + ')'; //umwutlol
		}
		answer = new multpoly([answer,tempoly]);
		console.log(answer.poly);
	}
	console.log(answer.poley)
}

generatepolynomial(4);