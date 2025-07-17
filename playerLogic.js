export function getPlayerMovementLeftVelocity() {
  return -160;
}

export function getPlayerMovementRightVelocity() {
  return 160;
}

export function getPlayerJumpVelocity() {
  return -330;
}

export function createPlayer(scene) {
  const player = scene.physics.add.sprite(100, 450, "dude");
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  scene.anims.create({
    key: "left",
    frames: scene.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1,
  });

  scene.anims.create({
    key: "turn",
    frames: [{ key: "dude", frame: 4 }],
    frameRate: 20,
  });

  scene.anims.create({
    key: "right",
    frames: scene.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1,
  });

  return player;
}

export function updatePlayer(player, cursors) {
  if (cursors.left.isDown) {
    player.setVelocityX(getPlayerMovementLeftVelocity());
    player.anims.play("left", true);
  } else if (cursors.right.isDown) {
    player.setVelocityX(getPlayerMovementRightVelocity());
    player.anims.play("right", true);
  } else {
    player.setVelocityX(0);
    player.anims.play("turn");
  }

  if (cursors.space.isDown && player.body.touching.down) {
    player.setVelocityY(getPlayerJumpVelocity());
  }
}
