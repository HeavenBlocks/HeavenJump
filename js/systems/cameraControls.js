let yaw = 0;
let pitch = 0;

export function enableCameraControls(camera, player) {
    document.body.addEventListener("click", () => {
        document.body.requestPointerLock();
    });

    document.addEventListener("mousemove", e => {
        if (document.pointerLockElement !== document.body) return;

        yaw -= e.movementX * 0.002;
        pitch -= e.movementY * 0.002;
        pitch = Math.max(-1.2, Math.min(1.2, pitch));
    });

    return () => {
        const radius = 6;
        camera.position.x = player.position.x + Math.sin(yaw) * radius;
        camera.position.z = player.position.z + Math.cos(yaw) * radius;
        camera.position.y = player.position.y + 3 + pitch * 2;
        camera.lookAt(player.position);
    };
}
