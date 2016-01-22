(function() {
    var Program = {};
    Program["code.Game2"] = function(module, exports) {
        var Game2 = function() {
            // Initialize player level
            players.radius = players.ship.body.height / 2;
            players.radius2 = circle.width / 2;
            players.centerx = circle.x;
            players.centery = circle.y;
            players.live(this);

            // Respond to button events
            start_btn.addEventListener(MouseEvent.CLICK, this.clickHandler);

            // Update screen every frame
            addEventListener(Event.ENTER_FRAME, this.enterFrameHandler);
        };

        Game2.prototype = Object.create(MovieClip.prototype);


        Game2.prototype.bonusLifeScore = 2000;
        Game2.prototype.score = 0;
        Game2.prototype.lives = 0;
        Game2.prototype.level = 6;
        Game2.prototype.buttonFadeOut = false;
        Game2.prototype.clickHandler = function(event) {
            switch (event.target) {
                case start_btn:

                    this.initiate();
                    break;
            }
        };
        Game2.prototype.enterFrameHandler = function(event) {
            // Add bonus life every 2000 points
            if (this.score > this.bonusLifeScore) {
                this.bonusLifeScore += 2000;
                this.lives += 1;
            }

            // Button fade in and out
            with(start_btn) {
                if (this.lives == 0) {
                    if (alpha < 1) {
                        alpha += .1;
                        mouseEnabled = true;
                    }
                }
                if (alpha > 0 && this.buttonFadeOut) {
                    alpha -= .1;
                    mouseEnabled = false;
                } else {
                    this.buttonFadeOut = false;
                }
            }

            // Update text
            score_txt.text = String(this.score);
            lives_txt.text = String(this.lives);
        };
        Game2.prototype.initiate = function() {
            // Set defaults
            this.score = 0;
            this.level = 2;
            this.lives = 3;
            this.buttonFadeOut = true;

            // Set players
            players.initiate();
        }


        module.exports = Game2;
    };
    Program["code.amoebaclasses.Amoeba"] = function(module, exports) {
        var Amoeba = function() {
            this.amoebaSnd = null;
            this.amoebaSndChannel = null;
            this.owner = null;
            this.id = null;
            // Wait to be started...
        };

        Amoeba.prototype = Object.create(MovieClip.prototype);


        Amoeba.prototype.moveTime = 0;
        Amoeba.prototype.appearTime = 0;
        Amoeba.prototype.pause = 0;
        Amoeba.prototype.xSpeed = 0;
        Amoeba.prototype.ySpeed = 0;
        Amoeba.prototype.rotateSpeed = 0;
        Amoeba.prototype.xDirection = 0;
        Amoeba.prototype.yDirection = 0;
        Amoeba.prototype.amoebaSnd = null;
        Amoeba.prototype.amoebaSndChannel = null;
        Amoeba.prototype.soundStartable = true;
        Amoeba.prototype.owner = null;
        Amoeba.prototype.id = null;
        Amoeba.prototype.live = function(ref, i) {
            // Set game level reference
            this.owner = ref;
            this.id = i;

            // Set properties at start
            this.moveTime = getTimer();
            this.appearTime = getTimer();
            this.pause = Math.random() * 7000 + 7000;
            this.rotateSpeed = Math.random() * 8 - 4;
            this.ySpeed = 4;

            // Initialize sound
            this.amoebaSnd = new saucerSound();
            this.amoebaSndChannel = this.amoebaSnd.play();
            this.soundStartable = true;

            // Update screen every frame
            addEventListener(Event.ENTER_FRAME, this.enterFrameHandler);
        };
        Amoeba.prototype.enterFrameHandler = function(event) {
            if (!visible) {
                // Stop sound and rest x position
                // when amoeba is invisible
                this.amoebaSndChannel.stop();
                this.soundStartable = true;

                // Determine if amoeba will
                // travel left or right
                this.xDirection = Math.random() * 2;

                // Set speed
                if (this.xDirection == 0) {
                    this.xSpeed = 4;
                }
                if (this.xDirection == 1) {
                    this.xSpeed = -4;
                }
            }

            // Amoeba appears after pausing for the length
            // of time generated in the Death function
            if (getTimer() - this.appearTime > this.pause) {
                visible = true;
            }

            // Set state if visible
            if (visible) {
                // Check for collisions
                this.owner.collisions(this);

                // Loop to opposite side of stage
                // when cell goes offscreen
                this.owner.wrapAround(this);

                // Play amoeba sound when amoeba is
                // onscreen only if game is in progress
                if (this.owner.started && this.soundStartable) {
                    var adjustVol = new SoundTransform();
                    adjustVol.volume = .5;
                    this.amoebaSndChannel = this.amoebaSnd.play();
                    this.amoebaSndChannel.soundTransform = adjustVol;
                    this.soundStartable = false;
                }

                // Stop looping across stage after 30 seconds
                if (getTimer() - this.appearTime > 30000 && (x < 0 || x > 640)) {
                    this.owner.death(this);
                }

                // Move amoeba
                x += this.xSpeed;
                y += this.ySpeed;
                rotation += this.rotateSpeed;
            }

            // Change vertical direction every 2-4 seconds
            if ((getTimer() - this.moveTime) > (Math.random() * 2000 + 2000)) {
                this.yDirection = Math.random() * 3;
                this.rotateSpeed = Math.random() * 8 - 4;
                this.moveTime = getTimer();

                if (this.yDirection == 0) {
                    this.ySpeed = 4;
                }
                if (this.yDirection == 1) {
                    this.ySpeed = -4;
                }
                if (this.yDirection == 2) {
                    this.ySpeed = 0;
                }
            }
        };
        Amoeba.prototype.hit = function() {
            this.owner.splitAmoeba(this);
            this.owner.death(this);
        }


        module.exports = Amoeba;
    };
    Program["code.amoebaclasses.Glob"] = function(module, exports) {
        var Glob = function() {
            this.owner = null;
            this.id = null;
            // Wait to be started...
        };

        Glob.prototype = Object.create(MovieClip.prototype);


        Glob.prototype.speed = 0;
        Glob.prototype.xSpeed = 0;
        Glob.prototype.ySpeed = 0;
        Glob.prototype.rotateSpeed = 0;
        Glob.prototype.owner = null;
        Glob.prototype.id = null;
        Glob.prototype.live = function(ref, i) {
            // Set game level reference
            this.owner = ref;
            this.id = i;

            // Set random values
            var angle = Math.random() * (2 * Math.PI);
            this.speed = Math.random() * 5 + 1;
            this.xSpeed = Math.sin(angle) * this.speed;
            this.ySpeed = Math.cos(angle) * this.speed;
            this.rotateSpeed = Math.random() * 8 - 4;

            // Update screen every frame
            addEventListener(Event.ENTER_FRAME, this.enterFrameHandler);
        };
        Glob.prototype.die = function() {
            removeEventListener(Event.ENTER_FRAME, this.enterFrameHandler);
        };
        Glob.prototype.enterFrameHandler = function(event) {
            // Check for collisions
            this.owner.collisions(this);

            // Loop to opposite side of stage
            // when cell goes offscreen
            this.owner.wrapAround(this);

            // Move and rotate cell
            x += this.xSpeed;
            y += this.ySpeed;
            rotation += this.rotateSpeed;
        };
        Glob.prototype.hit = function() {
            x += 20;

            this.die();
            this.owner.explosion(this);
            this.owner.removeCell(this.id);
        }


        module.exports = Glob;
    };
    Program["code.amoebaclasses.GuidedCell"] = function(module, exports) {
        var GuidedCell = function() {
            this.owner = null;
            this.id = null;
            // Wait to be started...
        };

        GuidedCell.prototype = Object.create(MovieClip.prototype);


        GuidedCell.prototype.speed = 5;
        GuidedCell.prototype.owner = null;
        GuidedCell.prototype.id = null;
        GuidedCell.prototype.live = function(ref, i) {
            // Set game level reference
            this.owner = ref;
            this.id = i;

            // Update screen every frame
            addEventListener(Event.ENTER_FRAME, this.enterFrameHandler);
        };
        GuidedCell.prototype.die = function() {
            removeEventListener(Event.ENTER_FRAME, this.enterFrameHandler);
        };
        GuidedCell.prototype.enterFrameHandler = function(event) {
            if (this.owner.ship.dead) {
                this.owner.removeCell(this.id);
                this.owner.explosion(this);
                return;
            }
            rotation += 10;

            // Move seeker
            var deltaX = x - this.owner.ship.x;
            var deltaY = y - this.owner.ship.y;
            var angle = -Math.atan2(deltaX, deltaY);
            var ySpeed = this.speed * Math.cos(angle);
            var xSpeed = this.speed * Math.sin(angle);

            y -= ySpeed;
            x += xSpeed;

            // Check for collisions
            this.owner.collisions(this);
        };
        GuidedCell.prototype.hit = function() {
            x += 20;

            this.die();
            this.owner.explosion(this);
            this.owner.removeCell(this.id);
        }


        module.exports = GuidedCell;
    };
    Program["code.amoebaclasses.InteractiveLayer"] = function(module, exports) {
        var Amoeba, Glob, GuidedCell, Paramecium, Shot;
        module.inject = function() {
            Amoeba = module.import('code.amoebaclasses', 'Amoeba');
            Glob = module.import('code.amoebaclasses', 'Glob');
            GuidedCell = module.import('code.amoebaclasses', 'GuidedCell');
            Paramecium = module.import('code.amoebaclasses', 'Paramecium');
            Shot = module.import('code.amoebaclasses', 'Shot');
        };

        var InteractiveLayer = function() {
            this.shotSnd = null;
            this.shotSndChannel = null;
            this.cells = new Object();
            this.shots = new Object();
            this.owner = null;
            this.amoebaCell = null;
            // Wait to be started...
        };

        InteractiveLayer.prototype = Object.create(MovieClip.prototype);


        InteractiveLayer.prototype.radius = 0;
        InteractiveLayer.prototype.radius2 = 0;
        InteractiveLayer.prototype.centerx = 0;
        InteractiveLayer.prototype.centery = 0;
        InteractiveLayer.prototype.totalCells = 0;
        InteractiveLayer.prototype.cellNumber = 1;
        InteractiveLayer.prototype.shotNumber = 1000;
        InteractiveLayer.prototype.totalShots = 1;
        InteractiveLayer.prototype.maxShots = 4;
        InteractiveLayer.prototype.shotSpeed = 17;
        InteractiveLayer.prototype.shotXspeed = 17;
        InteractiveLayer.prototype.shotYspeed = 17;
        InteractiveLayer.prototype.xThrustPercent = 0;
        InteractiveLayer.prototype.yThrustPercent = 0;
        InteractiveLayer.prototype.started = false;
        InteractiveLayer.prototype.shotSnd = null;
        InteractiveLayer.prototype.shotSndChannel = null;
        InteractiveLayer.prototype.soundStartable = true;
        InteractiveLayer.prototype.cells = null;
        InteractiveLayer.prototype.shots = null;
        InteractiveLayer.prototype.owner = null;
        InteractiveLayer.prototype.amoebaCell = null;
        InteractiveLayer.prototype.live = function(ref) {
            // Set game level reference
            this.owner = ref;

            // Initialize ship
            ship.live(this);

            // Initialize Amoeba
            this.amoebaCell = new Amoeba();
            this.amoebaCell.live(this, "amoebaCell");
            addChild(this.amoebaCell);

            // Initialize sounds
            this.shotSnd = new shootSound();

            // Update screen every frame
            addEventListener(Event.ENTER_FRAME, this.enterFrameHandler);
        };
        InteractiveLayer.prototype.die = function() {
            removeEventListener(Event.ENTER_FRAME, this.enterFrameHandler);
        };
        InteractiveLayer.prototype.enterFrameHandler = function(event) {
            // Generate cells and increase level
            // when all cells are destroyed
            if (this.totalCells == 0 && this.started) {
                this.owner.level++;
                this.cellNumber = 1;
            }
            if (this.cellNumber <= this.owner.level) {
                var id = "_" + this.cellNumber;
                this.cells[id] = new Paramecium();
                this.cells[id].live(this, id);

                addChild(this.cells[id]);

                this.totalCells++;
                this.cellNumber++;
                this.started = true;
            }

            // After death, wait until center area is
            // clear for 3 seconds before reincarnation
            if (ship.dead && this.owner.lives > 0) {
                ship.pauseTime = getTimer() - ship.deathTime;
                if (ship.pauseTime > 3000 && this.owner.lives > 0) {
                    ship.dead = false;
                    ship.fadeIn = true;
                }
            }
        };
        InteractiveLayer.prototype.initiate = function() {
            // Clean up
            for (var i in this.cells) {
                if (this.cells[i] != null) {
                    removeChild(this.cells[i]);
                }
            }
            this.cells = new Object();
            this.shots = new Object();

            // Reset values
            this.cellNumber = 1;
            this.totalCells = 0;
            this.totalShots = 0;

            // Reset ship
            ship.rotation = 0;
            ship.fadeIn = true;

            // Reset amoeba
            this.death(this.amoebaCell);
        };
        InteractiveLayer.prototype.shoot = function(whichObject) {
            if (this.totalShots < this.maxShots) {
                this.xThrustPercent = Math.sin(whichObject.rotation * (Math.PI / 180));
                this.yThrustPercent = Math.cos(whichObject.rotation * (Math.PI / 180));

                this.shotYspeed = this.shotSpeed * this.yThrustPercent;
                this.shotXspeed = this.shotSpeed * this.xThrustPercent;
                this.shotNumber += 1000;
                this.totalShots++;

                var id = "_" + this.shotNumber;
                this.shots[id] = new Shot();
                this.shots[id].live(this, id);

                addChild(this.shots[id]);
                this.shotSndChannel = this.shotSnd.play();
            }
        };
        InteractiveLayer.prototype.wrapAround = function(whichObject) {
            var delta_x = this.centerx - whichObject.x;
            var delta_y = this.centery - whichObject.y;
            var angle = Math.atan2(delta_y, delta_x);
            var distance = Math.sqrt((delta_x * delta_x) + (delta_y * delta_y));
            if (distance > this.radius2) {
                whichObject.x = (Math.cos(angle) * (this.radius2)) + this.centerx;
                whichObject.y = (Math.sin(angle) * (this.radius2)) + this.centery;
            }
        };
        InteractiveLayer.prototype.collisions = function(whichObject) {
            // Collisions with ship
            if (whichObject.hitTestPoint((ship.x + 4), (ship.y + 4), true) && ship.alpha > .9) {
                whichObject.hit();
                this.death(ship);
            }
            // Collisions with shots
            for (var n in this.shots) {
                if (this.shots[n] != null) {
                    if (whichObject.hitTestPoint(this.shots[n].x, this.shots[n].y, true)) {
                        whichObject.hit();

                        if (whichObject == GuidedCell) {
                            this.owner.score += 150;
                        } else if (whichObject == Amoeba) {
                            this.owner.score += 75;
                        } else if (whichObject == Paramecium) {
                            this.owner.score += 50;
                        } else if (whichObject == Glob) {
                            this.owner.score += 25;
                        }
                        this.removeShot(n);
                    }
                }
            }
        };
        InteractiveLayer.prototype.explosion = function(whichObject) {
            var e = new Explosion();
            e.x = whichObject.x;
            e.y = whichObject.y;

            // Show explosion
            addChild(e);
        };
        InteractiveLayer.prototype.death = function(whichShip) {
            if (this.owner.lives != 0 && whichShip.alpha > .9) {
                this.explosion(whichShip);
            }
            if (whichShip == ship) {
                ship.deathTime = getTimer();

                if (!ship.dead) {
                    this.owner.lives--;
                }
                ship.clear();
                ship.dead = true;
                ship.alpha = 0;
                ship.x = 302;
                ship.y = 295;
            } else {
                whichShip.appearTime = getTimer();
                whichShip.pauseTime = (Math.random() * 7000) + 7000;
                whichShip.visible = false;
            }
        };
        InteractiveLayer.prototype.splitAmoeba = function(target) {
            var id;
            for (var i = 1; i <= 2; i++) {
                this.cellNumber++;
                this.totalCells++;

                id = "_" + this.cellNumber;
                this.cells[id] = new Glob();
                this.cells[id].live(this, id);
                this.cells[id].x = target.x;
                this.cells[id].y = target.y;

                addChild(this.cells[id]);
            }
            if (ship.alpha > 0) {
                this.cellNumber++;
                this.totalCells++;

                id = "_" + this.cellNumber;
                this.cells[id] = new GuidedCell();
                this.cells[id].live(this, id);
                this.cells[id].x = target.x;
                this.cells[id].y = target.y;

                addChild(this.cells[id]);
            }
        };
        InteractiveLayer.prototype.removeCell = function(id) {
            if (this.cells[id] != null) {
                this.totalCells--;
                removeChild(this.cells[id]);
                delete this.cells[id];
            }
        };
        InteractiveLayer.prototype.removeShot = function(id) {
            if (this.shots[id] != null) {
                this.totalShots--;
                removeChild(this.shots[id]);
                delete this.shots[id];
            }
        }


        module.exports = InteractiveLayer;
    };
    Program["code.amoebaclasses.Paramecium"] = function(module, exports) {
        var Paramecium = function() {
            this.owner = null;
            // Wait to be started...
        };

        Paramecium.prototype = Object.create(MovieClip.prototype);


        Paramecium.prototype.moveTime = 0;
        Paramecium.prototype.direction = 0;
        Paramecium.prototype.speed = 0;
        Paramecium.prototype.up = false;
        Paramecium.prototype.down = false;
        Paramecium.prototype.left = false;
        Paramecium.prototype.right = false;
        Paramecium.prototype.id = null;
        Paramecium.prototype.owner = null;
        Paramecium.prototype.live = function(ref, i) {
            // Set game level reference
            this.owner = ref;
            this.id = i;

            // Set properties at start up
            var angle = Math.random() * 360;
            x = Math.sin(angle * (Math.PI / 180)) * (this.owner.radius2 + 10) + this.owner.centerx;
            y = Math.cos(angle * (Math.PI / 180)) * (this.owner.radius2 + 10) + this.owner.centery;
            this.moveTime = getTimer();
            this.speed = Math.random() * 4 + 4;
            this.direction = Math.round(Math.random() * 9);

            // Update screen every frame
            addEventListener(Event.ENTER_FRAME, this.enterFrameHandler);
        };
        Paramecium.prototype.die = function() {
            // do stop routine...
            removeEventListener(Event.ENTER_FRAME, this.enterFrameHandler);
        };
        Paramecium.prototype.enterFrameHandler = function(event) {
            // Handle movement
            if (this.up && this.left) {
                this.go(-45);
            } else if (this.up && this.right) {
                this.go(45);
            } else if (this.down && this.left) {
                this.go(-135);
            } else if (this.down && this.right) {
                this.go(135);
            } else if (this.right && !this.down && !this.up) {
                this.go(90);
            } else if (this.left && !this.down && !this.up) {
                this.go(-90);
            } else if (this.down && !this.right && !this.left) {
                this.go(180);
            } else if (this.up && !this.right && !this.left) {
                this.go(0);
            }
            // Calculate next move
            if (this.direction == 0) {
                this.up = true;
                this.down = false;
                this.right = false;
                this.left = false;
            }
            if (this.direction == 1) {
                this.up = false;
                this.down = true;
                this.right = false;
                this.left = false;
            }
            if (this.direction == 2) {
                this.up = false;
                this.down = false;
                this.right = true;
                this.left = false;
            }
            if (this.direction == 3) {
                this.up = false;
                this.down = false;
                this.right = false;
                this.left = true;
            }
            if (this.direction == 4) {
                this.up = true;
                this.down = false;
                this.right = true;
                this.left = false;
            }
            if (this.direction == 5) {
                this.up = true;
                this.down = false;
                this.right = false;
                this.left = true;
            }
            if (this.direction == 6) {
                this.up = false;
                this.down = true;
                this.right = true;
                this.left = false;
            }
            if (this.direction == 7) {
                this.up = false;
                this.down = true;
                this.right = false;
                this.left = true;
            }
            if (this.direction == 8) {
                this.up = false;
                this.down = false;
                this.right = false;
                this.left = false;
            }

            // Check for collisions
            this.owner.collisions(this);

            // Handle offscreen movement
            this.owner.wrapAround(this);

            // Change vertical direction every 2-4 seconds
            if ((getTimer() - this.moveTime) > (Math.random() * 2000 + 2000)) {
                this.direction = Math.round(Math.random() * 9);
                this.moveTime = getTimer();
            }
        };
        Paramecium.prototype.hit = function() {
            x += 20;

            // If paramecium collides with any shot,
            // it explodes and disappears
            this.owner.explosion(this);
            this.owner.removeCell(this.id);
        };
        Paramecium.prototype.go = function(degree) {
            y -= this.speed * Math.cos(rotation * (Math.PI / 180));
            x += this.speed * Math.sin(rotation * (Math.PI / 180));

            if (rotation < degree) {
                rotation += 15;
            }
            if (rotation > degree) {
                rotation -= 15;
            }
        }


        module.exports = Paramecium;
    };
    Program["code.amoebaclasses.Ship"] = function(module, exports) {
        var Ship = function() {
            this.thrustSnd = null;
            this.thrustSndChannel = null;
            this.owner = null;
            // Ship state
            alpha = 0;
        };

        Ship.prototype = Object.create(MovieClip.prototype);


        Ship.prototype.thrust = 1;
        Ship.prototype.decay = .98;
        Ship.prototype.speed = 0;
        Ship.prototype.xSpeed = 0;
        Ship.prototype.ySpeed = 0;
        Ship.prototype.maxSpeed = 15;
        Ship.prototype.xThrustPercent = 0;
        Ship.prototype.yThrustPercent = 0;
        Ship.prototype.dead = false;
        Ship.prototype.fadeIn = false;
        Ship.prototype.upkeydown = false;
        Ship.prototype.leftkeydown = false;
        Ship.prototype.rightkeydown = false;
        Ship.prototype.thrustSnd = null;
        Ship.prototype.thrustSndChannel = null;
        Ship.prototype.soundStartable = true;
        Ship.prototype.pauseTime = 0;
        Ship.prototype.deathTime = 0;
        Ship.prototype.owner = null;
        Ship.prototype.live = function(ref) {
            // Set game level reference
            this.owner = ref;

            // Initialize sounds
            this.thrustSnd = new thrustSound();

            // Respond to keyboard presses
            stage.addEventListener(KeyboardEvent.KEY_DOWN, this.keyPressHandler);
            stage.addEventListener(KeyboardEvent.KEY_UP, this.keyReleaseHandler);

            // Update screen every frame
            addEventListener(Event.ENTER_FRAME, this.enterFrameHandler);
        };
        Ship.prototype.keyPressHandler = function(event) {
            switch (event.keyCode) {
                case Keyboard.UP:
                    this.upkeydown = true;
                    break;

                case Keyboard.LEFT:
                    this.leftkeydown = true;
                    break;

                case Keyboard.RIGHT:
                    this.rightkeydown = true;
                    break;

                case Keyboard.SPACE:

                    // Fire using space key
                    if (!this.dead && alpha > .9) {
                        this.owner.shoot(this);
                    }
                    break;
            }
        };
        Ship.prototype.keyReleaseHandler = function(event) {
            switch (event.keyCode) {
                case Keyboard.UP:
                    this.upkeydown = false;
                    break;

                case Keyboard.LEFT:
                    this.leftkeydown = false;
                    break;

                case Keyboard.RIGHT:
                    this.rightkeydown = false;
                    break;
            }
        };
        Ship.prototype.enterFrameHandler = function(event) {
            // Loop to opposite side of stage
            // when ship goes offscreen
            this.owner.wrapAround(this);

            // Ship fade in at start of game or after death
            if (alpha < 1 && this.fadeIn) {
                flames.visible = false;
                alpha += .1;
            } else {
                this.fadeIn = false;
            }

            // Navigation controls
            if (!this.dead) {
                if (this.upkeydown) {
                    this.xSpeed += this.thrust * this.xThrustPercent;
                    this.ySpeed += this.thrust * this.yThrustPercent;
                    flames.visible = true;
                    if (this.soundStartable) {
                        this.thrustSndChannel = this.thrustSnd.play(0, 99999999);
                        this.soundStartable = false;
                    }
                } else {
                    this.xSpeed *= this.decay;
                    this.ySpeed *= this.decay;
                    if (this.thrustSndChannel != null) {
                        this.thrustSndChannel.stop();
                        this.soundStartable = true;
                    }
                    flames.visible = false;
                }
                if (this.rightkeydown) {
                    rotation += 10;
                }
                if (this.leftkeydown) {
                    rotation -= 10;
                }
            }

            // Calculate how much thrust to apply to
            // x and y based on the rotation of the ship
            this.xThrustPercent = Math.sin(rotation * (Math.PI / 180));
            this.yThrustPercent = Math.cos(rotation * (Math.PI / 180));

            // Maintain speed limit
            this.speed = Math.sqrt((this.xSpeed * this.xSpeed) + (this.ySpeed * this.ySpeed));

            if (this.speed > this.maxSpeed) {
                this.xSpeed *= this.maxSpeed / this.speed;
                this.ySpeed *= this.maxSpeed / this.speed;
            }

            // Move ship based on calculations above if ship is visible
            y -= this.ySpeed;
            x += this.xSpeed;

            if (this.dead) {
                this.xSpeed = 0;
                this.ySpeed = 0;
            }
        };
        Ship.prototype.clear = function() {
            if (this.thrustSndChannel != null) {
                this.thrustSndChannel.stop();
                this.soundStartable = true;
            }
        }


        module.exports = Ship;
    };
    Program["code.amoebaclasses.Shot"] = function(module, exports) {
        var Shot = function() {
            this.owner = null;
            // Wait to be started...
        };

        Shot.prototype = Object.create(MovieClip.prototype);


        Shot.prototype.shotTime = 0;
        Shot.prototype.xSpeed = 0;
        Shot.prototype.ySpeed = 0;
        Shot.prototype.id = null;
        Shot.prototype.owner = null;
        Shot.prototype.live = function(ref, i) {
            // Set game level reference
            this.owner = ref;
            this.id = i;

            // Each new shot originates at
            // the ship's center
            x = this.owner.ship.x;
            y = this.owner.ship.y;

            // Determine when each shot is fired
            this.shotTime = getTimer();

            // Add ship's velocity to the shot's velocity
            this.xSpeed = this.owner.shotXspeed + this.owner.ship.xSpeed;
            this.ySpeed = this.owner.shotYspeed + this.owner.ship.ySpeed;

            // Update screen every frame
            addEventListener(Event.ENTER_FRAME, this.enterFrameHandler);
        };
        Shot.prototype.die = function() {
            removeEventListener(Event.ENTER_FRAME, this.enterFrameHandler);
        };
        Shot.prototype.enterFrameHandler = function(event) {
            // Loop to opposite side of stage
            // when shot goes offscreen
            this.owner.wrapAround(this);

            // Move shot
            x += this.xSpeed;
            y -= this.ySpeed;

            // Shot disappears after 1.5 seconds
            // if it doesn't hit anything
            if (getTimer() - this.shotTime > 1500) {
                this.owner.removeShot(this.id);
            }
        }


        module.exports = Shot;
    };
    if (typeof module !== 'undefined') {
        module.exports = AS3JS.load({
            program: Program,
            entry: "",
            entryMode: ""
        });
    } else if (typeof window !== 'undefined' && typeof AS3JS !== 'undefined') {
        window[''] = AS3JS.load({
            program: Program,
            entry: "",
            entryMode: ""
        });
    }
})();
