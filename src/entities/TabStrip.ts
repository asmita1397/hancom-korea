import Size from './styles/Size';
import { Position } from './styles/Position';
import ZIndex from './styles/ZIndex';
import { MouseProperty } from './attributes/Picture';
import { BasicTabProperty } from './attributes/BasicProperty';


export interface TabStrip extends BasicTabProperty,TabStripStyle,MouseProperty {
    controlTipText:string,
    style:TabStripStyle
}

export interface TabStripStyle extends Size,Position,ZIndex {
    backColor: string,
    foreColor: string,
    borderStyle: string,
    cursor: string,

}