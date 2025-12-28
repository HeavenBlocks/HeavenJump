import { scene } from "../core/scene.js";

export const platforms = [];

function platform(x, y, z, w = 4, h = 1, d = 4) {
    const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(w, h, d),
        new THREE.MeshStandardMaterial({ color: 0x888888 })
    );
    mesh.position.set(x, y, z);
    scene.add(mesh);
    platforms.push(mesh);
}

// Ground
platform(0, -0.5, 0, 50, 1, 50);

// Course
platform(0, 2, -6);
platform(3, 4, -10);
platform(-3, 6, -14);
platform(0, 8, -18);
platform(5, 10, -22);
platform(0, 12, -26);
platform(0, 14, -30, 6, 1, 6); // Goal
