<script context="module">
/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/

    /**
     * Can manually trigger a drag gesture on one or more `drag`-enabled `motion` components.
     *
     * @library
     *
     * ```jsx
     * const dragControls = useDragControls()
     *
     * function startDrag(event) {
     *   dragControls.start(event, { snapToCursor: true })
     * }
     *
     * return (
     *   <>
     *     <Frame onTapStart={startDrag} />
     *     <Frame drag="x" dragControls={dragControls} />
     *   </>
     * )
     * ```
     *
     * @motion
     *
     * ```jsx
     * const dragControls = useDragControls()
     *
     * function startDrag(event) {
     *   dragControls.start(event, { snapToCursor: true })
     * }
     *
     * return (
     *   <>
     *     <div onPointerDown={startDrag} />
     *     <MotionDiv drag="x" dragControls={dragControls} />
     *   </>
     * )
     * ```
     *
     * @public
     */
    export const DragControls = /** @class */ (function () {
        function DragControls() {
            this.componentControls = new Set();
        }
        /**
         * Subscribe a component's internal `VisualElementDragControls` to the user-facing API.
         *
         * @internal
         */
        DragControls.prototype.subscribe = function (controls) {
            var _this = this;
            this.componentControls.add(controls);
            return function () {
                return _this.componentControls.delete(controls);
            };
        };
        /**
         * Start a drag gesture on every `motion` component that has this set of drag controls
         * passed into it via the `dragControls` prop.
         *
         * ```jsx
         * dragControls.start(e, {
         *   snapToCursor: true
         * })
         * ```
         *
         * @param event - PointerEvent
         * @param options - Options
         *
         * @public
         */
        DragControls.prototype.start = function (event, options) {
            this.componentControls.forEach(function (controls) {
                controls.start(event.nativeEvent || event, options);
            });
        };
        DragControls.prototype.updateConstraints = function () {
            this.componentControls.forEach(function (controls) {
                controls.prepareBoundingBox();
                controls.resolveDragConstraints();
            });
        };
        return DragControls;
    })();
    const createDragControls = function () {
        return new DragControls();
    };
</script>

<script>
    /**
     * Usually, dragging is initiated by pressing down on a `motion` component with a `drag` prop
     * and moving it. For some use-cases, for instance clicking at an arbitrary point on a video scrubber, we
     * might want to initiate that dragging from a different component than the draggable one.
     *
     * By creating a `dragControls` using the `useDragControls` hook, we can pass this into
     * the draggable component's `dragControls` prop. It exposes a `start` method
     * that can start dragging from pointer events on other components.
     *
     * @library
     *
     * ```jsx
     * const dragControls = useDragControls()
     *
     * function startDrag(event) {
     *   dragControls.start(event, { snapToCursor: true })
     * }
     *
     * return (
     *   <>
     *     <Frame onTapStart={startDrag} />
     *     <Frame drag="x" dragControls={dragControls} />
     *   </>
     * )
     * ```
     *
     * @motion
     *
     * ```jsx
     * const dragControls = useDragControls()
     *
     * function startDrag(event) {
     *   dragControls.start(event, { snapToCursor: true })
     * }
     *
     * return (
     *   <>
     *     <div onPointerDown={startDrag} />
     *     <MotionDiv drag="x" dragControls={dragControls} />
     *   </>
     * )
     * ```
     *
     * @public
     */
    
    let dragControls = createDragControls();
</script>
<slot {dragControls}/>
