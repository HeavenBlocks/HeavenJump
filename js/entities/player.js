import { scene } from "../core/scene.js";

export const player = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({ color: 0xff4444 })
);

player.position.set(0, 2, 0);
scene.add(player);

export const playerState = {
    velocityY: 0,
    onGround: false
};
