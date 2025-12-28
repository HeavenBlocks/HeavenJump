import { scene } from "../core/scene.js";

export const platforms = [];

function createPlatform(x, y, z, w = 5, h = 1, d = 5) {
    const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(w, h, d),
        new THREE.MeshStandardMaterial({ color: 0x888888 })
    );
    mesh.position.set(x, y, z);
    scene.add(mesh);
    platforms.push(mesh);
}

createPlatform(0, -0.5, 0, 50, 1, 50);
createPlatform(5, 2, 0);
createPlatform(-5, 4, -3);
createPlatform(0, 6, 5);
