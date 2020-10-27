
class Employee {
	var empid:number;
	var name:string;
	var salary:number;
	function constructor(){
		log("empty constructor called!");
		this.empid=0;
		this.name="";
		this.salary=0;
	}
	function constructor(id:number,name:string,sal:number){
		log("parameterised constructor called!");
		this.empid=id;
		this.name=name;
		this.salary=sal;
	}
	function showDetails():void {
		log("employee detaisl are "+this.empid+" "+this.name+" "+this.salary);
	}
}





class _Main {
	static function main(args: string[]) :void {

		log "Hello, World";
		//var emp = new Employee(12,"mani",1234);
		//emp.showDetails();

		var l=[1,2,3,4,5];
		const res=l.map((number)=>{
		return "<li key="+number+">"+number+"</li>";
		});
		log(res);


	}
}