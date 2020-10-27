interface flyable{
	abstract function fly():void;
}

abstract class Animal {
	function eat():void{
		log("animal is eating");
	}
	abstract function sound():void;
}

class Lion extends Animal {
	override function eat():void{
		log("lion is eating");
	}
	override function sound():void{
		log("lion roars");
	}
}

class Insects extends Animal implements flyable{
	override function fly():void{
		log("insects are flying!");
	}
	function sucks():void{
		log("insects sucks!");
	}
	override function sound():void {
		log("insects chik chik");
	}
}

class _Main{
	static function main(arg:string[]):void {
		var lion = new Lion();
		lion.eat();
		lion.sound();
		var insect=new Insects();
		insect.fly();
		insect.sucks();
		insect.eat();
		insect.sound();
	}
}