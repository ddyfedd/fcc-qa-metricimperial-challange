function numberStringSplit(input) {
  let number = input.match(/[.\d\/]+/g) || ['1'];
  let string = input.match(/[a-zA-Z]+/g)[0];

  return [number[0], string];
}

function checkDiv(possFraction) {
  let nums = possFraction.split('/');
  if (nums.length > 2) {
    return false;
  }
  return nums;
}

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = numberStringSplit(input)[0];
    let nums = checkDiv(result);

    if(!nums){
      return undefined;
    }

    let num1 = nums[0];
    let num2 = nums[1] || '1';

    result = parseFloat(num1) / parseFloat(num2);

    if(isNaN(num1) || isNaN(num2)) {
      return undefined;
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result = numberStringSplit(input)[1].toLowerCase();

    switch (result) {
      case 'km':
        return 'km';
      case 'gal':
        return 'gal';
      case 'lbs':
        return 'lbs';
      case 'mi':
        return 'mi';
      case 'l':
        return 'L';
      case 'kg':
        return 'kg';
      default:
        return undefined;
    }
    
    //return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let unit = initUnit.toLowerCase();
    
    switch (unit) {
      case 'km':
        return 'mi';
      case 'gal':
        return 'L';
      case 'lbs':
        return 'kg';
      case 'mi':
        return 'km';
      case 'l':
        return 'gal';
      case 'kg':
        return 'lbs';
      default:
        return undefined;
    }
  };

  this.spellOutUnit = function(initUnit) {
    let unit = initUnit.toLowerCase();
    
    switch (unit) {
      case 'km':
        return 'kilometers';
      case 'gal':
        return 'gallons';
      case 'lbs':
        return 'pounds';
      case 'mi':
        return 'miles';
      case 'l':
        return 'liters';
      case 'kg':
        return 'kilograms';
      default:
        return 'undefined unit';
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
