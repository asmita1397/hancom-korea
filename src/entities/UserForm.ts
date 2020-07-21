import { BasicProperty } from "./attributes/BasicProperty";
import { ScrollProperty } from "./attributes/Scroll";
import {  PictureTypesControls } from "./attributes/Picture";
import { MouseProperty } from "./attributes/Picture";
import ZIndex from "./styles/ZIndex";
import { TextWrap } from "./styles/TextWrap";
import Size from "./styles/Size";
import { Visibility } from "./styles/Visibility";
import { Position } from "./styles/Position";

export interface UserForm {
  property: UserForm1;
  controls:Object;
}

export interface UserForm1 extends BasicProperty,
  ScrollProperty,
  MouseProperty,
  Position,
  ZIndex,
  Size,
  UserFormStyle,
  PictureTypesControls {
  controlZIndex: string;
  drawBuffer: number;
  cycle: string;
  rightToLeft: boolean;
  startUpPosition: string;
  showModal: boolean;
  whatsThisButton: boolean;
  whatsThisHelp: boolean;
  outerWindowZIndex: string;
  outerWindowtop: string;
  outerWindowleft: string;
  display: string
  resize: string;
  overflow: string;
  borderTopLeftRadius: string;
  borderTopRightRadius: string;
  maxWidth: string;
  maxHeight: string;
  margin: string;
  textAlign: string;
  zoom: string;
  position: string;
  border: string

}




export interface UserFormStyle extends
  MouseProperty,
  Position,
  ZIndex,
  Size {
  backColor: string;
  borderColor: string;
  font: string;
  textAlign: string;
  foreColor: string;
  mousePointer: string;
  specialEffect: string;
}


