function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const app = Vue.createApp({
  data() {
    return {
      playerHp: 100,
      monsterHp: 100,
      currRound: 0,
      winner: null,
      logMsgs: [],
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHp < 0) return { width: "0%" };
      return { width: this.monsterHp + "%" };
    },
    playerBarStyles() {
      if (this.playerHp < 0) return { width: "0%" };
      return { width: this.playerHp + "%" };
    },
    mayUseSpecialAttack() {
      return this.currRound % 3 !== 0 || this.currRound === 0;
    },
  },
  watch: {
    playerHp(value) {
      if (value <= 0 && this.monsterHp <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHp(value) {
      if (value <= 0 && this.playerHp <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  methods: {
    startGame() {
      this.playerHp = 100;
      this.monsterHp = 100;
      this.currRound = 0;
      this.winner = null;
      this.logMsgs = [];
    },
    attackMonster() {
      this.currRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHp -= attackValue;
      this.addLogMsg("player", "attack", attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHp -= attackValue;
      this.addLogMsg("monster", "attack", attackValue);
    },
    specialAttackMonster() {
      this.currRound++;
      const attackValue = getRandomValue(10, 20);
      this.monsterHp -= attackValue;
      this.addLogMsg("player", "special attack", attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.currRound++;
      const healHp = getRandomValue(8, 20);
      if (this.playerHp + healHp > 100) this.playerHp = 100;
      else this.playerHp += healHp;
      this.addLogMsg("player", "heal", healHp);
      this.attackPlayer();
    },
    surrenderGame() {
      this.winner = "monster";
      this.logMsgs = [];
      this.addLogMsg("player", "surrender");
    },
    addLogMsg(who, what, value) {
      this.logMsgs.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value ?? null,
        playerHp: this.playerHp > 0 ? this.playerHp : 0,
        monsterHp: this.monsterHp > 0 ? this.monsterHp : 0,
      });
    },
  },
});

app.mount("#game");
