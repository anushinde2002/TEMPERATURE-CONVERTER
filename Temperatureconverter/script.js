function convertTemperature() {
    var inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
    var outputTemperature = document.getElementById("outputTemperature");
  
    if (inputUnit === outputUnit) {
    
      outputTemperature.value = inputTemperature.toFixed(2);
    } else if (inputUnit === "celsius" && outputUnit === "fahrenheit") {
      
      outputTemperature.value = (inputTemperature * 9/5 + 32).toFixed(2);
    } else if (inputUnit === "fahrenheit" && outputUnit === "celsius") {
      
      outputTemperature.value = ((inputTemperature - 32) * 5/9).toFixed(2);
    } else if (inputUnit === "celsius" && outputUnit === "kelvin") {
      
      outputTemperature.value = (inputTemperature + 273.15).toFixed(2);
    } else if (inputUnit === "kelvin" && outputUnit === "celsius") {
    
      outputTemperature.value = (inputTemperature - 273.15).toFixed(2);
    } else if (inputUnit === "fahrenheit" && outputUnit === "kelvin") {
    
      outputTemperature.value = ((inputTemperature + 459.67) * 5/9).toFixed(2);
    } else if (inputUnit === "kelvin" && outputUnit === "fahrenheit") {
      
      outputTemperature.value = (inputTemperature * 9/5 - 459.67).toFixed(2);
    } else if (inputUnit === "celsius" && outputUnit === "rankine") {
     
      outputTemperature.value = ((inputTemperature * 9/5) + 491.67).toFixed(2);
    } else if (inputUnit === "rankine" && outputUnit === "celsius") {
      
      outputTemperature.value = ((inputTemperature - 491.67) * 5/9).toFixed(2);
    } else if (inputUnit === "fahrenheit" && outputUnit === "rankine") {
      
      outputTemperature.value = (inputTemperature + 459.67).toFixed(2);
    } else if (inputUnit === "rankine" && outputUnit === "fahrenheit") {
     
      outputTemperature.value = (inputTemperature - 459.67).toFixed(2);
    } else if (inputUnit === "kelvin" && outputUnit === "rankine") {
      
      outputTemperature.value = (inputTemperature * 9/5).toFixed(2);
    } else if (inputUnit === "rankine" && outputUnit === "kelvin") {
      
      outputTemperature.value = (inputTemperature * 5/9).toFixed(2);
    }
  }