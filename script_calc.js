$(document).ready(function(){
  var disp='';
  var c=0;
  var prevOp=null;
  var equalPressed=0;
  var stack=[];
  var lastPressed;
  var k=0;
   var prevActive;
  function calculator(){
    function evaluate(){
		  if(prevOp=="+")
		  {
			  stack[0]+=stack[1];
        if(equalPressed==0)
        {stack.pop();}
			  $("#display").val(stack[0]);
		  }
		  if(prevOp=="-")
		  {
			  stack[0]-=stack[1];
			  if(equalPressed==0)
        {stack.pop();}
			  $("#display").val(stack[0]);
		  }
		  if(prevOp=="*")
		  {
			  stack[0]*=stack[1];
			  if(equalPressed==0)
        {stack.pop();}
			  $("#display").val(stack[0]);
		  }
		  if((prevOp=="/"))
		  {
        if(stack[1]==0)
        $("#display").val("Infinity");
			  stack[0]/=stack[1];
			  if(equalPressed==0)
        {stack.pop();}
			 		 $("#display").val(stack[0]);  
      
      }
      if(!prevOp){
         $("#display").val(stack[0]);
        equalPressed=0;
       lastPressed="digit";
        //k=1;
      }
      
	}
 
$(".digit").on('click',function(){
  if(equalPressed!=0){
  c=0;
  stack=[];
  equalPressed=0;
  disp='';
    
}
    var num=$(this).val();
  disp+=num;
	 $("#display").val(disp);
  lastPressed="digit";
  prevActive="d";
 $("#output").val(stack.values());
 });
    $(".operator").on('click',function(){
      if(lastPressed=="digit"){
      if(equalPressed!=0)
        {
          stack.pop();
         
        }
    
stack.push(Number(disp));
     
      disp='';
      
      
	  if((c>0)&&(equalPressed==0)){
		
     evaluate();
		  
	  }
      
       equalPressed=0;    
	 if(($(this).attr("id"))=="addButton"){
        prevOp="+";
      }
	  if(($(this).attr("id"))=="subtractButton"){
        prevOp="-";
      }
	  if(($(this).attr("id"))=="multiplyButton"){
        prevOp="*";
      }
	  if(($(this).attr("id"))=="divideButton"){
        prevOp="/";
      }
        
   //k=0;
	  c++;}
      if(lastPressed=="eq"){
        if(equalPressed!=0)
        {
          stack.pop();
          equalPressed=0;    
	 if(($(this).attr("id"))=="addButton"){
        prevOp="+";
      }
	  if(($(this).attr("id"))=="subtractButton"){
        prevOp="-";
      }
	  if(($(this).attr("id"))=="multiplyButton"){
        prevOp="*";
      }
	  if(($(this).attr("id"))=="divideButton"){
        prevOp="/";
      }
	  c++;
        }
      }
      prevActive="o";
     $("#output").val(stack.values());
    });
 $("#equalsButton").click(function()
	{
     
	   if(((stack.length)&&(prevActive=="d"))){
		   if(equalPressed==0)
     stack.push(Number(disp));
       disp='';
	  equalPressed++;
		evaluate();
		lastPressed="eq";
      $("#output").val(stack.values());
	}}
	);
    $("#clearButton").click(function(){
      disp='';
      $("#display").val(disp);
      c=0;
      k=0;
      equalPressed=0;
      stack=[];
      $("#output").val(stack.values());
    });
  }
   
  calculator();
  });
