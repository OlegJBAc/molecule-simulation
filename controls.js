export function initCameraControls(controls, renderer) {
    let isPanning = false;
    let previousMousePosition = { x: 0, y: 0 };

    function onMouseMove(event) {
        if (isPanning) {
            const deltaX = event.clientX - previousMousePosition.x;
            const deltaY = event.clientY - previousMousePosition.y;

            const panSpeed = 0.5;
            controls.target.x -= deltaX * panSpeed;
            controls.target.y += deltaY * panSpeed;

            previousMousePosition = { x: event.clientX, y: event.clientY };
        }
    }

    function onMouseDown(event) {
        if (event.buttons === 3) {
            isPanning = true;
            previousMousePosition = { x: event.clientX, y: event.clientY };
            controls.enableRotate = false;
        }
    }

    function onMouseUp() {
        isPanning = false;
        controls.enableRotate = true;
    }

    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mouseup', onMouseUp);
}
