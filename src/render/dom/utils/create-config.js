/** 
based on framer-motion@4.0.3,
Copyright (c) 2018 Framer B.V.
*/
import { __assign } from 'tslib';
import { svgMotionConfig } from '../../svg/config-motion.js';
import { htmlMotionConfig } from '../../html/config-motion.js';

function createDomMotionConfig(
    Component, 
    { forwardMotionProps = false }, 
    preloadedFeatures, 
    createVisualElement) {

    var baseConfig = Component==="SVG"
        ? svgMotionConfig
        : htmlMotionConfig;
        return {
            ...baseConfig,
            preloadedFeatures,
            forwardMotionProps,
            createVisualElement,
            Component,
        }
}

export { createDomMotionConfig };
