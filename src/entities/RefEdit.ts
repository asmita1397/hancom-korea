import Size from './styles/Size';
import { Position } from './styles/Position';
import ZIndex from './styles/ZIndex';
import { BasicAttribute, BasicRefProperty } from './attributes/BasicProperty';

export interface RefEdit extends RefEditProperty,RefEditStyle {

    style:RefEditStyle
}

export interface RefEditProperty extends BasicRefProperty {
   
    autoSize: boolean,
    autoWordSelect:boolean,
    dragBehavior:string,
    enterFieldBehavior:string,
    enterKeyBehavior:string,
    hideSelection:boolean,
    integralHeight:boolean,
    maxLength:number,
    multiLine:boolean,
    passwordChar:string,
    selectionMargin:boolean,
    selLength:number,
    selStart:number,
    selText:string,
    tabKeyBehavior:boolean,
    style:RefEditStyle
}

export interface RefEditStyle extends Size,Position,ZIndex {

}