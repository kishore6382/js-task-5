



var n=[1,2,3,4,5,6,7,8,9,10];
	 document.write('array loop:');
	 for (i=0;i<n.length;i++){
		
		document.write(n[i])
	 }	
	document.write("<br>");
	// add num 
	 var a=[1,2,3,4,5,6,7,8,9,10];
	 document.write('even num loop:');
	 for (i=1;i<=a.length;i++){
		if (i%2==0){
		document.write(i);
		}	
	 }
	 document.write("<br>");
	
	 var b=[1,2,3,4,5,6,7,8,9,10];
	 document.write('odd num loop:');
	 for (i=0;i<b.length;i++){
		if (i%2!==0){
		
		document.write(i);
		}
	 
	 }
	 
	  document.write("<br>");
	 
	 var array=[1,4,8,12,16,20,24,28,32,36]
	 function MinNum(){
	 let min=array[2];
	 for(var i=0;i<array.length;i++){
	 if(array[i]<min){
	 min=array[i];} 
	 }
	 return min;
	 }
	 document.write(MinNum());
	 
	 
	 
	 
	 document.write("<br>");
	 
	 var array=[1,4,8,12,16,20,24,28,32,36]
	 function MaxNum(){
	 let max=array[2];
	 for(var i=0;i<array.length;i++){
	 if(array[i]<max){
	 max=array[i];} 
	 }
	 return max;
	 }
	 document.write(MaxNum());
	 