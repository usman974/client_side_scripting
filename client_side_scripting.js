// Copyright (c) 2023, usman and contributors
// For license information, please see license.txt




froggy.ui.form.on('Client Side Scripting', {

	////////   set_df_property  //////////
	// enable:function(frm){
	// 	frm.set_df_property('first_name','reqd',1)
	// 	// frm.refresh_field('first_name')

	// 	// frm.set_df_property('middle_name', 'read_only',1)
	// 	// frm.refresh_field('middle_name')

	// 	// frameElement.toggle_reqd('age', true)

	}




	//////////      FRM.SET_VALUE 	/////////////////
	// validate:function(frm){
	// 	// frm.set_value('full_name',frm.doc.first_name +""+frm.doc.middle_name+""+frm.doc.last_name)


	// 	let row = frm.add_child('family_members',{
	// 		name1: 'ali',
	// 		relation: 'Father',
	// 		age: 56,
	// 	})
	// }




	///////////////  set_intro and is_new ///////////

	// refresh:function(frm){
 
	// 	// frm.set_intro('Now  YOU CAN CREATE A NEW CLIENT  SIDE SCRIPT  DOCTYPE')	
		
	// if(frm.is_new()){
	// 	frm.set_intro('Now  YOU CAN CREATE A NEW CLIENT  SIDE SCRIPT  DOCTYPE')
	// }
	// }


////////////////////////////////////      VALUE FETCHING      ///////////////////////


	// after_save:function(frm){
	// 	froggy.msgprint(__(" full name is '{0}'",
	// 	        [frm.doc.first_name + " "+ frm.doc.middle_name + " "+ frm.doc.last_name]))
		
	
	// }


// 	refresh: function(frm) {

// 		froggy.msgprint("hello Dummy")

// 		froggy.throw("This is an error.")
// }
    

///////////////////////////////      Event     ///////////////////////////////

	// onload: function(frm){
	// 	froggy.msgprint("Hello dummy from onload event.")
	// }// ye srf load hona pr msg show krwa ga

    
	// validate: function(frm){
	// 		froggy.throw("hello dummy from validate event")
	// 	}


	// before_save: function(frm){
	// 		froggy.throw("hello dummy from before_save event")
	// 	}

    
// after_save: function(frm){
// 	froggy.throw("hello dummy from after_save event")
// }



// enable: function(frm){
// 	froggy.msgprint("enable fieldname event")
// }    // jb enable karo yeh unenable tb he show hoga 


	// age:function(frm){
	// 	froggy.msgprint("Child DocType 'age' fieldname event")
	// } 



// family_members_on_form_rendered: function(frm){
// 	froggy.msgprint("family_members child table rendered event")
// }   /// ye family_members ky side edit ko click krya tb ay ga


// before_submit: function(frm){
// 	froggy.throw("before_submit event")
// }	

// on_submit:function(frm){
// 	froggy.msgprint("on_submit event")
// } /// successfully submit hoga han


// before_cancel:function(frm){
// 		froggy.throw("before_cancel event")
// 	} // ye cancel krna ky bad ay ga		


//  after_cancel:function(frm){
		// 		froggy.throw("after_cancel event")
// 	} 	// ye bd ma ay ga

});


//////////////////////// Child Table Script           //////////////////////

// froggy.ui.form.on('Family Members', {

// 	// name1: function(frm){
// 	// 	froggy.msgprint("Child DocType 'name1' event")
// 	// } // child event 

// 	age(frm, cdt, cdn){
// 		froggy.msgprint("age doctype fieldname event")
// 	}


// 	})
