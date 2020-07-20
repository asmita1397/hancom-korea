export interface Picture {
    picture: string,
    
}

export interface PictureProperty {
    pictureSizeMode: string,
    pictureTiling: boolean,
}

export interface PictureParent extends Picture,PictureProperty {

}

export interface PictureControls extends Picture {
     picturePosition:string,
}

export interface PictureTypesControls extends PictureProperty {
    pictureAlignment:string,
}


export interface MouseIcon {
    mouseIcon: string,
}