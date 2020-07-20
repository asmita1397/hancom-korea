import Size from './styles/Size';
import { Position } from './styles/Position';
import ZIndex from './styles/ZIndex';
import { MouseIcon } from './attributes/Picture';
import { BasicTabProperty } from './attributes/BasicProperty';


export interface TabStrip extends BasicTabProperty,TabStripStyle,MouseIcon {
    controlTipText:string,
    style:TabStripStyle
}

export interface TabStripStyle extends Size,Position,ZIndex {
    backgroundColor: string,
    color: string,
    borderStyle: string,
    cursor: string,

}