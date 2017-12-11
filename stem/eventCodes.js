  //Declaration of event catagories:
  var eventCatagory = {};
  eventCatagory.error = {};
  eventCatagory.hidden = {};
  eventCatagory.user = {};
  eventCatagory.execution = {};
  eventCatagory.security = {};
  
  eventCatagory.error.name = "Error";
  eventCatagory.error.color = "RGB(255,0,0)";
  eventCatagory.error.eventCodes = [0,1,2,3,4,13,417,404];
  
  eventCatagory.hidden.name = "Hidden";
  eventCatagory.hidden.color = "RGB(255,0,255)";
  eventCatagory.hidden.eventCodes = [5,6,7,8];
    
  eventCatagory.user.name = "User";
  eventCatagory.user.color = "RGB(0,255,0)";
  eventCatagory.user.eventCodes = [9,10,11,12];
    
  eventCatagory.execution.name = "Execution";
  eventCatagory.execution.color = "RGB(0,0,255)";
  eventCatagory.execution.eventCodes = [14,15,16,17];
    
  eventCatagory.security.name = "Security";
  eventCatagory.security.color = "RGB(255,128,0)";
  eventCatagory.security.eventCodes = [18,19,20,21];
  //End declaration of event catagories
  
  //Declaration of event codes:
  var eventCode = {};
     
  eventCode[1] = {};  
  eventCode[1].name = "Load error";
  eventCode[1].description = "Attempted load of unfound file";
  eventCode[1].parameters = ["fileLocation"]; //eventCode(1,param0,param1,param2,param3,paramEtc)
  eventCode[1].catagory = eventCatagory.error;
    
  eventCode[5] = {};  
  eventCode[5].name = "hiddenTest";
  eventCode[5].description = "Test of 'Hidden' event catagory";
  eventCode[5].parameters = ["testParam0","testParam1"]; //eventCode(1,param0,param1,param2,param3,paramEtc)
  eventCode[5].catagory = eventCatagory.hidden;
    
  eventCode[9] = {};  
  eventCode[9].name = "userTest";
  eventCode[9].description = "Test of 'User' event catagory";
  eventCode[9].parameters = ["testParam0","testParam1"]; //eventCode(1,param0,param1,param2,param3,paramEtc)
  eventCode[9].catagory = eventCatagory.user;
    
  eventCode[14] = {};  
  eventCode[14].name = "executionTest";
  eventCode[14].description = "Test of 'Execution' event catagory";
  eventCode[14].parameters = ["testParam0","testParam1"]; //eventCode(1,param0,param1,param2,param3,paramEtc)
  eventCode[14].catagory = eventCatagory.execution;
    
  eventCode[18] = {};  
  eventCode[18].name = "securityTest";
  eventCode[18].description = "Test of 'Security' event catagory";
  eventCode[18].parameters = ["testParam0","testParam1"]; //eventCode(1,param0,param1,param2,param3,paramEtc)
  eventCode[18].catagory = eventCatagory.security;
  //End declaration of event codes
  
  //Calling event codes:
  function callEventCode(eventCodeN) {
    //log to server-side (txt file, database, etc.?)
    var logString = "%c" + eventCode[eventCodeN].catagory.name + ": Event Code " + eventCodeN + ": " + eventCode[eventCodeN].name + " - " + eventCode[eventCodeN].description + " - "
    for (i = 0; i < eventCode[eventCodeN].parameters.length; i++) {
      logString += eventCode[eventCodeN].parameters[i] + ": " + arguments[i + 1] + "; "
    };
    console.log(logString, "color: " + eventCode[eventCodeN].catagory.color);
  };
  //End calling event codes
