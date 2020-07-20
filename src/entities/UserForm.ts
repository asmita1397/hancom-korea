import {BasicProperty} from "./attributes/BasicProperty";
import { ScrollProperty } from "./attributes/Scroll";
import { PictureParent } from "./attributes/Picture";
import { MouseIcon } from "./attributes/Picture";
import ZIndex from "./styles/ZIndex";
import { TextWrap } from "./styles/TextWrap";
import Size from "./styles/Size";
import { Visibility } from "./styles/Visibility";
import { Position } from "./styles/Position";

export interface UserForm
  extends BasicProperty,
    ScrollProperty,
    PictureParent,
    MouseIcon {
  controlZIndex: string,
  keepScrollsBarsVisible: string,
  drawBuffer: number,
  cycle: string,
  rightToLeft: boolean;
  startUpPosition: string;
  showModal: boolean;
  whatsThisButton: boolean;
  whatsThisHelp: boolean;
  controls: Array<any>;
  outerWindowStyle: OuterWindowStyle;
  innerWindowStyle: InnerWindowStyle;
}

export interface OuterWindowStyle {
  container: OuterStyleContainer;
  top: Top;
  closeButton: CloseButton;
}

export interface InnerWindowStyle {
  container: InnerStyleContainer;
  top: Top;
  innerContainer: InnerContainer;
  closeButton: CloseButton;
  whatsThisButton: WhatsThisButton;
}

export interface Container {
  borderTopLeftRadius: string;
  borderTopRightRadius: string;
  backgroundColor: string;
  overflow: string;
  resize: string;
  textAlign: string;
  border: string;
}

export interface OuterStyleContainer extends Size, ZIndex, Position, Container {
  display: string;
  minHeight: string;
  minWidth: string;
}

export interface InnerStyleContainer extends Size, Position, Container {
  maxWidth: string;
  maxHeight: string;
  margin: string;
  borderColor: string;
  fontFamily: string;
  color: string;
  zoom: string;
  cursor: string;
  boxShadow: string;
}

export interface Top {
  padding: string;
  background: string;
  height: string;
}

export interface CloseButton {
  right: string;
  position: string;
  backgroundColor: string;
}

export interface InnerContainer extends Size, Position {
  backgroundColor: string;
  backgroundSize: string;
  backgroundImage: string;
}

export interface WhatsThisButton extends Position {
  right: string,
  top: string,
  borderStyle: string,
  color: string,
  backgroundColor: string,
}
