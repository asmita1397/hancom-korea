import Size from './styles/Size';
import { Position } from './styles/Position';
import ZIndex from './styles/ZIndex';
import { MouseProperty } from './attributes/Picture';
import { BasicTabProperty } from './attributes/BasicProperty';


export interface TabStrip extends BasicTabProperty,TabStripStyle {
    controlTipText:string,
    
}

export interface TabStripStyle extends Size,Position,ZIndex, MouseProperty {
    backColor: string,
    foreColor: string,
    style: string,

}