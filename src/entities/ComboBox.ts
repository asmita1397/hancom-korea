import { BasicProperty, BasicBoxProperty, BasicComboAndListBoxProperty } from './attributes/BasicProperty';
import { MouseProperty } from './attributes/Picture';
import { Visibility } from './styles/Visibility';

export interface ComboBox extends ComboBoxProperty,ComboBoxStyle {

    
}

export interface ComboBoxProperty extends BasicBoxProperty,BasicComboAndListBoxProperty,ComboBoxStyle {
    
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


export interface ComboBoxStyle extends Visibility, MouseProperty  {

    borderStyle:string,

}