
export class Board {
    constructor() {
        this.board = [];
        this.boardSize = 25;
        this.monsterCount = 0;
        this.itemCount = 0;
        this.player = null;
        this.monsters = [];
        this.items = [];
        this.generateBoard();
    }

    generateBoard() {
        for (let i = 0; i < this.boardSize; i++) {
            this.board.push([]);
            for (let j = 0; j < this.boardSize; j++) {
                this.board[i].push(null);
            }
        }
    }

    addPlayer(player) {
        this.player = player;
        this.board[this.player.x][this.player.y] = player;
    }

    addMonster(monster) {
        this.monsters.push(monster);
        this.monsterCount++;
        this.board[monster.x][monster.y] = monster;
    }

    addItem(item) {
        this.items.push(item);
        this.itemCount++;
        this.board[item.x][item.y] = item;
    }

    movePlayer(direction) {
        switch (direction) {

            case 'left':
                if (this.player.y > 0) {
                    this.board[this.player.x][this.player.y] = null;
                    this.player.y--;
                    this.board[this.player.x][this.player.y] = this.player;
                }
                break;
            case 'right':
                if (this.player.y < this.boardSize - 1) {
                    this.board[this.player.x][this.player.y] = null;
                    this.player.y++;
                    this.board[this.player.x][this.player.y] = this.player;
                }
                break;
            case 'up':
                if (this.player.x > 0) {
                    this.board[this.player.x][this.player.y] = null;
                    this.player.x--;
                    this.board[this.player.x][this.player.y] = this.player;
                }
                break;
            case 'down':
                if (this.player.x < this.boardSize - 1) {
                    this.board[this.player.x][this.player.y] = null;
                    this.player.x++;
                    this.board[this.player.x][this.player.y] = this.player;
                }
                break;
        }
    }

    printBoard() {
        for (let i = 0; i < this.boardSize; i++) {
            let row = '';
            for (let j = 0; j < this.boardSize; j++) {
                if (this.board[i][j] === null) {
                    row += ' ';
                } else if (this.board[i][j] instanceof Player) {
                    row += 'P';
                } else if (this.board[i][j] instanceof Monster) {
                    row += 'M';
                } else if (this.board[i][j] instanceof Item) {
                    row += 'I';
                }

            }
            console.log(row);
        }
    }

    checkForMonster() {
        for (let i = 0; i < this.monsters.length; i++) {
            if (this.monsters[i].x === this.player.x && this.monsters[i].y === this.player.y) {
                return true;
            }
        }
        return false;
    }

    checkForItem() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].x === this.player.x && this.items[i].y === this.player.y) {
                return true;
            }
        }
        return false;
    }


}

