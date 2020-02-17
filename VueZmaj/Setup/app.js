new Vue ({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            this.monsterHealth -= this.calculateDamage(3, 10)

            if (this.monsterHealth <= 0) {
                alert("YOU WON!");
                this.gameIsRunning = false;
                return
            }

            this.playerHealth -= this.calculateDamage(5, 12)

            if (this.playerHealth <= 0) {
                alert("YOU LOST BOI!");
                this.gameIsRunning = false;
            }

        },
        specialAttack: function() {

        },
        heal: function() {

        },
        giveUp: function() {

        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                if (confirm("You Von! New Game?")) {
                    this.startGame()
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm("You lost! New Game?")) {
                    this.startGame()
                } else {
                    this.gameIsRunning = false;
                }
                return false;
            }
        }
    }

})