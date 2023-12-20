/**
 * @param {string} senate
 * @return {string}
 */

 /**
        Radiant vs Dire 승리자 예측 반환
        1. 이번턴과 다음턴에 다른 의원의 권리 박탈
        2. 자신의 팀이 모든 투표권을 가지고 있다면 승리 결정

        => 자신외의 가장 빠른 상대편의원의 권리를 박탈시킨다.
  */
var predictPartyVictory = function(senate) {
    let rLive = [];
    let dLive = [];

    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === 'R') rLive.push(i);
        else dLive.push(i);
    }

    while(rLive.length > 0 && dLive.length > 0){
              
        const r = rLive.shift(); // r팀중 가장 빠른 사람
        const d = dLive.shift(); // d팀중 가장 빠른 사람

        const nextRound = senate.length
        if(r < d) rLive.push(r+nextRound);
        else dLive.push(d+nextRound);

 
    }

    return rLive.length > dLive.length ? "Radiant" : "Dire"
};
