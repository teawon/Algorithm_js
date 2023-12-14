var asteroidCollision = function(asteroids) {
    const stack = [];


    for(let i=0; i<asteroids.length; i++){

        if(stack.length > 0 && asteroids[i] < 0){
            //충돌 여부 확인
            const curSize = -asteroids[i];
            let preSize = null;

            while(stack.length > 0){
                preSize = stack[stack.length-1];
                // 이전값과 비교했을때 크다면 이전값 삭제
                if(preSize > 0 && preSize <= curSize){
                    stack.pop();
                    if(preSize === curSize) break;
                    continue;
                }
                break;
            }
            
            if(preSize > 0 && curSize <= preSize) continue;
        }

        stack.push(asteroids[i]);
    }

    return stack;

};