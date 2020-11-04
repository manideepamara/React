class Foo{
	*[Symbol.iterator](){
		yield 1;
		yield 2;
	}
}

class Another{
	*[Symbol.iterator](){
		yield 'a';
		yield 'b';
	}
}




function *fibonocci(){
	yield 0;
	yield 1;
	var a=0;
	var b=1;

	while(true){
		c=a+b;
		yield c;
		a=b;
		b=c;
	}
}


var gen=fibonocci();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)








// for(var i=0;i<10;i++)
// 	console.log(gen.next().value)