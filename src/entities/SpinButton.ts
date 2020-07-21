import Size from './styles/Size';
import ZIndex from './styles/ZIndex';
import {Position} from './styles/Position'
import { MouseProperty } from './attributes/Picture';

export interface SpinButton extends SpinButtonProperty,SpinButtonStyle{


    delay:number,
    orientation:string,
    smallChange:number,
   
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

export interface SpinButtonStyle  extends Size,Position,ZIndex,MouseProperty {
    backColor: string,
    foreColor: string,
    min:string,
    max:string
}

