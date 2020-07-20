import Size from './styles/Size';
import { Position } from './styles/Position';
import ZIndex from './styles/ZIndex';
import { MouseIcon } from './attributes/Picture';
import BasicProperty, { BasicBoxProperty, BasicComboAndListBoxProperty } from './attributes/BasicProperty';

export interface ListBox {

}

export interface ListBoxProperty extends BasicBoxProperty,BasicComboAndListBoxProperty
,MouseIcon,ListBoxStyle {

    boundColumn:number,
    multiSelect:string,
    style:ListBoxStyle

}



export interface ListBoxStyle extends Size,Position,ZIndex,BasicProperty {
   borderStyle: string,
}

