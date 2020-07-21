import Size from './styles/Size';
import { Position } from './styles/Position';
import ZIndex from './styles/ZIndex';
import { MouseProperty } from './attributes/Picture';
import {BasicProperty, BasicBoxProperty, BasicComboAndListBoxProperty } from './attributes/BasicProperty';
import { Visibility } from './styles/Visibility';

export interface ListBox {

}

export interface ListBoxProperty extends BasicBoxProperty,BasicComboAndListBoxProperty, 
MouseProperty,ListBoxStyle {

    boundColumn:number,
    multiSelect:string,
   

}



export interface ListBoxStyle extends Size,Position,ZIndex,BasicProperty, Visibility {
   borderStyle: string,
}

