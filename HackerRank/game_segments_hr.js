function playSegments(coins) {
    //helper function to count remaining points
    let player1 = 0;
    let count = 0;
    let coinsCopy = [...coins];
    if (countPoints(coinsCopy) <= player1) return player1;

    for (let i = 0; i < coins.length; i++) {
        if (coins[i] === 0) {
            player1--;
        } else if (coins[i] === 1) {
            player1++;
        }
        count++;
        coinsCopy.shift();
        if (countPoints(coinsCopy) < player1) { break; }
    }
    return count;
}

function countPoints(remainingCoins) {
    let player2 = 0;
    for (let i = 0; i < remainingCoins.length; i++) {
        if (remainingCoins[i] === 0) {
            player2--;
        } else if (remainingCoins[i] === 1) {
            player2++;
        }
    }
    return player2;
}