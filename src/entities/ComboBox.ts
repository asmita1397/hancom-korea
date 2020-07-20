import { BasicProperty, BasicBoxProperty, BasicComboAndListBoxProperty } from './attributes/BasicProperty';
import { MouseIcon } from './attributes/Picture';

export interface ComboBox extends ComboBoxProperty {

    style:ComboBoxStyle
}

export interface ComboBoxProperty extends BasicBoxProperty,BasicComboAndListBoxProperty,MouseIcon {
    
    autoSize: boolean,

    autoTab:boolean,
    autoWordSelect:boolean,
    boundColumn:number,
   
    dragBehavior:string,
    dropButtonStyle:string,
    enterFieldBehavior:string,
    hideSelection:boolean,
    
    listRows:number,
    listWidth:string,

    matchRequired:boolean,
    maxLength:number,

    selectionMargin:boolean,
    showDropButtonWhen:string,


}


export interface ComboBoxStyle extends BasicProperty  {

    borderStyle:string,

}