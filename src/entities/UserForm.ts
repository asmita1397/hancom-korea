import { BasicProperty } from "./attributes/BasicProperty";
import { ScrollProperty } from "./attributes/Scroll";
import { PictureTypesControls } from "./attributes/Picture";
import { MouseProperty } from "./attributes/Picture";
import ZIndex from "./styles/ZIndex";
import Size from "./styles/Size";
import { Position } from "./styles/Position";

export class UserFormEntity implements UserForm {
  elementsCount: ElementsCount;
  property: UserForm1;
  controls: object;
  constructor() {
    this.elementsCount = { label: 0, commandButton: 0 };
    this.property = {
      zIndex: "2",
      position: "relative",
      textAlign: "left",
      border: "none",
      width: "400px",
      height: "250px",
      resize: "both",
      overflow: "hidden",
      borderTopLeftRadius: "4px",
      borderTopRightRadius: "4px",
      maxWidth: "98%",
      maxHeight: "88%",
      margin: "4px",
      backColor: "white",
      borderColor: "ghostwhite",
      font: "Tahoma",
      foreColor: "black",
      left: "0",
      top: "0",
      zoom: "100%",
      mousePointer: "0 - fmMousePointerDefault",
      specialEffect: "none",
      pictureSizeMode: " 9px 10px",
      picture:
        "radial-gradient(circle, rgb(0, 0, 0) 0.5px, rgba(0, 0, 0, 0) 0.2px)",
      controlZIndex: 3,
      name: "UserForm1",
      type: "UserForm",
      visible: true,
      autoSize: false,
      isActive: false,
      caption: "UserForm1",
      cycle: "0 - fmCycleAllForms",
      drawBuffer: 32000,
      enabled: true,
      helpContextId: 0,
      keepScrollsBarsVisible: "fmScrollBarsNone",
      mouseIcon: "(None)",
      pictureAlignment: "0 - fmPictureAlignmentTopLeft",
      pictureTiling: false,
      rightToLeft: false,
      scrollBars: "0 - fmScrollBarsNone",
      scrollHeight: 0,
      scrollLeft: 0,
      scrollTop: 0,
      startUpPosition: "0 - Manual",
      scrollWidth: 0,
      showModal: true,
      tag: "",
      whatsThisButton: false,
      whatsThisHelp: false,
      display: "block",
      outerWindowZIndex: "2",
      outerWindowtop: "50px",
      outerWindowleft: "50px",
    };
    this.controls = {};
  }
}

export interface UserForm {
  elementsCount: ElementsCount;
  property: UserForm1;
  controls: object;
}

export interface UserForm1
  extends BasicProperty,
    ScrollProperty,
    MouseProperty,
    Position,
    ZIndex,
    Size,
    UserFormStyle,
    PictureTypesControls {
  controlZIndex: number;
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
  display: string;
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
  border: string;
}

export interface UserFormStyle extends MouseProperty, Position, ZIndex, Size {
  backColor: string;
  borderColor: string;
  font: string;
  textAlign: string;
  foreColor: string;
  mousePointer: string;
  specialEffect: string;
}

export interface ElementsCount {
  label: number;
  commandButton: number;
}