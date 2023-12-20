
var RecentCounter = function() {
    this.request = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    // 특정 요청 t가 들어왔을때, 지난 3000밀리초 동안 발생한 요청의 수를 return해야한다.

    this.request.push(t);

    while(this.request.length > 0 && t - this.request[0] > 3000) this.request.shift();

    return this.request.length || null;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */