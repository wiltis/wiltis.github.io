/**
 * Created by William on 27.02.2017.
 */
import React from "react"
import {CLOCK_HEIGHT, CLOCK_BOX, POINT_SIZE} from "./ConstValues"

export const angleToPosition = (angle) => {
    let origin = [CLOCK_HEIGHT/2, CLOCK_HEIGHT/2]
    let radius = CLOCK_BOX/2 - POINT_SIZE
    let xpos = origin[0] + Math.cos(angle)*(radius) - POINT_SIZE/2
    let ypos = origin[1] - Math.sin(angle)*(radius) - POINT_SIZE/2
    return {x: xpos, y: ypos}
}

export const drawCircle = (origin=[0,0], radius, color) => {
    return (
        <svg height={2*radius} width={2*radius}>
            <circle cx={origin[0]} cy={origin[1]} r={radius} stroke={color} fill={color}/>
        </svg>
    )
}

export const drawHand = () => {

}