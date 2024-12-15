declare module 'three/examples/jsm/controls/OrbitControls' {
    import { Camera, EventDispatcher, MOUSE, Quaternion, Vector2, Vector3 } from 'three';

    export class OrbitControls extends EventDispatcher {
        constructor(object: Camera, domElement: HTMLElement);

        object: Camera;
        domElement: HTMLElement;
        enabled: boolean;
        target: Vector3;
        minDistance: number;
        maxDistance: number;
        minPolarAngle: number;
        maxPolarAngle: number;
        minAzimuthAngle: number;
        maxAzimuthAngle: number;
        enableDamping: boolean;
        dampingFactor: number;
        enableZoom: boolean;
        zoomSpeed: number;
        enableRotate: boolean;
        rotateSpeed: number;
        enablePan: boolean;
        panSpeed: number;
        screenSpacePanning: boolean;
        autoRotate: boolean; // Correction ici
        autoRotateSpeed: number; // Correction ici
        keys: { LEFT: number, UP: number, RIGHT: number, BOTTOM: number };
        mouseButtons: { LEFT: MOUSE, MIDDLE: MOUSE, RIGHT: MOUSE };

        update(): void;
        dispose(): void;
    }
}
