/*opens new window with order details*/
function openShopOrderDetails() {
	window.open('shopOrderDetails.html','Order Details','toolbar=no, status=yes, menubar=no, resizable=yes, scrollbars=no, width=400, height=300');
}

function ValidationEvent(){
	var name = document.getElementById("orderForm").fname.value;
	var surname = document.getElementById("orderForm").surname.value;
	var email = document.getElementById("orderForm").email.value;
	var line1 = document.getElementById("orderForm").line1.value;
	var line2 = document.getElementById("orderForm").line2.value;
	var line3 = document.getElementById("orderForm").line3.value;
	var mobile = document.getElementById("orderForm").mobile.value;

	var form = document.getElementById("orderForm").elements;
    var i=0;
	console.log(form.length);
	var fullName = name.concat(" ", surname); //function for a String - concat() joins two or more of them
	//loop with 9 elements 
	while (i < form.length)
	{
		if( form[i].value==""||form[i].value==null)
		{
			alert('Please fill in the form.');
			return false;
			i++;
		}
		else{
		return true;
		}
	}
	
	var details = confirm("Confirm your details:"+"\n"+fullName+"\n"+email+"\n"+line1+"\n"+line2+"\n"+mobile);
			
/*	for (i = 0; i < form.length; i++) {
		//if statement checking if the fields are left empty 
      if( form[i].value==""||form[i].value==null)
		{
			alert('Please fill in the form.');
			return false;
		}
	 	else
		{
			var details = confirm("Confirm your details:"+"\n"+fullName+"\n"+email+"\n"+line1+"\n"+line2+"\n"+mobile);
			return true;
		}	
    }  
*/	
}
function estimateTotal(event)
{
	event.preventDefault();
	if (document.getElementById('s-country').value === '')
	{
		alert('Please choose your shipping country.');
		document.getElementById('s-country').focus();
	}	
	// || 0 if empty
	var yerba1 = parseInt(document.getElementById('txt-q-yerba1').value, 10)||0,
		yerba2 = parseInt(document.getElementById('txt-q-yerba2').value, 10)||0,
		mate = parseInt(document.getElementById('txt-q-mate').value, 10)||0,
		country = document.getElementById('s-country').value;
	var shippingMethod;	
	var	methods = document.getElementById('shop-tea').r_method;
				
	for(var i=0; i<methods.length; i++)
	{
		if(methods[i].checked == true)
		{
			shippingMethod = methods[i].value;
		}		
	}	
	var taxFactor=1;
	if (country==='US')
	{
		taxFactor= 1.065; //tax is 6.5% in USA
	}	
	//pickup, post, express
	var shippingCostPer = 0;
	//switch- different way of if statements
	switch (shippingMethod)
	{
		case 'pickup':
			shippingCostPer = 0;
			break;
		case 'post':
			shippingCostPer = 2;
			break;
		case 'post-express':
			shippingCostPer = 5;
			break;
	}
	// , at the end - multiple assignments
	var totalItems = yerba1 + yerba2 + mate;
	//shippingCost = totalItems + shippingCostPer;
	var subtotal = ((yerba1*10)+(yerba2*12)+(mate*15)) * taxFactor; 
	// .toFixed - to show 2.00
	var estimate = (subtotal + shippingCostPer).toFixed(2);	
	document.getElementById('txt-estimate').value = estimate;	
	document.getElementById('results').innerHTML= 'Total items: ' + totalItems + '<br>';
	document.getElementById('results').innerHTML= 'Tax: ' + ((taxFactor-1)*100).toFixed(2)+ '% ('+country+')'+ '<br>';
}

function tabsOnclick(content){
	if (content == 'content1')
	{
		document.getElementById('content1').className = "ready";
		document.getElementById('content2').className = "hidden";
		document.getElementById('content3').className = "hidden";
		document.getElementById('content4').className = "hidden";		
	}
	else if (content == 'content2')
	{
		document.getElementById('content2').className = "ready";
		document.getElementById('content1').className = "hidden";
		document.getElementById('content4').className = "hidden";
		document.getElementById('content3').className = "hidden";
	}
	else if (content == 'content3')
	{
		document.getElementById('content3').className = "ready";
		document.getElementById('content1').className = "hidden";
		document.getElementById('content2').className = "hidden";
		document.getElementById('content4').className = "hidden";
	}
	else
	{
		document.getElementById('content4').className = "ready";
		document.getElementById('content1').className = "hidden";
		document.getElementById('content2').className = "hidden";
		document.getElementById('content3').className = "hidden";
	}
}	

function timeChanges()
{
	var d = new Date();
	var n = d.getHours();
	if ( n <= 8)
	{	
		document.getElementById('time-nine').className = "displayNone";
		document.getElementById('time-twelve').className = "displayNone";
		document.getElementById('time-three').className = "displayNone";
		document.getElementById('time-sixpm').className = "displayNone";	
	}	
	else if ( n <= 11)
	{
		document.getElementById('time-twelve').className = "displayNone";
		document.getElementById('time-three').className = "displayNone";
		document.getElementById('time-sixpm').className = "displayNone";	
	}
	else if ( n <= 14)
	{
		document.getElementById('time-three').className = "displayNone";
		document.getElementById('time-sixpm').className = "displayNone";	
	}
	else if ( n <= 17)
	{
		document.getElementById('time-sixpm').className = "displayNone";	
	}
}		

	
	
	
