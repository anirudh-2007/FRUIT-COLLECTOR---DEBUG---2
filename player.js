class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    getScore(){
        var scoreCountRef = database.ref('point');
        scoreCountRef.on("value", (data)=> {
            this.point = data.val();
        })
    }

   static updatescore(score){
        database.ref('/').update({
            point : score
        })
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            'name': this.name,
            'distance': this.distance,
            'score':this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
