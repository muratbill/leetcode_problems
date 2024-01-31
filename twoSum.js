var twoSum = function(nums, target) {
 const a1 = [];
const a2 = [];
  var cikarma;
  if (nums.length === 2 && nums[0] + nums[1] === target){
    a1.push(0);
    a1.push(1);
    return a1;
  }
  if (nums.length > 2){
     for (var i=0; i < nums.length; i++){
       if (nums[i] == target/2){
         a2.push(i);
       }else{
         cikarma = target - nums[i];
         if (nums.includes(cikarma)){
           var index = nums.indexOf(cikarma);
           if (index !== i){
             a1.push(i);
       }
       
     }
       }
   
  
  }
    if(a2.length >1){
       return a2;
     }else{
       return a1;
     }
}
}
