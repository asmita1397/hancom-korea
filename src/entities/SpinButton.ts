import Size from './styles/Size';
import ZIndex from './styles/ZIndex';
import {Position} from './styles/Position'

export interface SpinButton extends SpinButtonProperty {


    delay:number,
    orientation:string,
    smallChange:number,
    style:SpinButtonStyle
}

export interface SpinButtonProperty {
    id: number,
    name: string,
    type: string,
    visible: boolean,
    enabled: boolean,
    helpContextId: number,
    tag: string,
    tabIndex:number,
    tabStop:boolean,
    controlTipText:string,
    controlSource:string,
    value:boolean,
}

export interface SpinButtonStyle  extends Size,Position,ZIndex {
    backgroundColor: string,
    color: string,
    cursor: string,
    min:string,
    max:string
}

