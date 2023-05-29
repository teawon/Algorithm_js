function solution(sizes) {

    var maxWidth = 0
    var maxHeight = 0
    for(let i=0; i<sizes.length; i++){
        width_1 = sizes[i][0];
        width_2 = sizes[i][1];
        
        if(width_1 < width_2){
            maxWidth = Math.max(maxWidth,width_2);
            maxHeight =  Math.max(maxHeight, width_1);
        }
        else{
            maxWidth = Math.max(maxWidth,width_1);
            maxHeight =  Math.max(maxHeight, width_2);
        }
    }
    
    return maxWidth*maxHeight;
}