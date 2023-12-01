/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    function getWater(lIndex, rIndex){
        return Math.min(height[lIndex],height[rIndex]) * (rIndex-lIndex);
    }


    let left = 0;
    let right = height.length-1;
    let maxWater = 0

    while(left < right){
        maxWater = Math.max(maxWater, getWater(left,right));

        if(height[left] > height[right]){
            right--;
        }
        else{
            left++;
        }
    }

    return maxWater;
};
/**
     let left = 0;
    let right = height.length-1;

    let leftBar = left;
    let rightBar = right;

    // 초기값
    let maxWater = getWater(leftBar,rightBar);

    while(left < right){
        
        if(height[left] < height[right]){
            const beforeLeft = left;
            while(left < right && height[beforeLeft] > height[left]) left++;
        }
        else{
            const beforeRight = right;
            while(left < right && height[beforeRight] > height[right]) right--;
        }

        const newWater = getWater(left,right);
        if(maxWater <newWater) maxWater = newWater;
    
    }

    return maxWater;

 */