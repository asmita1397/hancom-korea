import Size from './styles/Size';
import { Position } from './styles/Position';
import ZIndex from './styles/ZIndex';
import { BasicAttribute, BasicRefProperty } from './attributes/BasicProperty';
import { MouseProperty } from './attributes/Picture';

export interface RefEdit extends RefEditProperty,RefEditStyle {

}

export interface RefEditProperty extends BasicRefProperty,RefEditStyle {
   
    autoSize: boolean,
    autoWordSelect:boolean,
    dragBehavior:string,
    enterFieldBehavior:string,
    enterKeyBehavior:boolean,
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
    
}

export interface RefEditStyle extends Size,Position,ZIndex, MouseProperty {

}