export type CardMaker = {
    currentTemplate: Template,
    selectedComponentsId: string[],
    history: History,
    selectedArea: Position,
    card: Card,

}

export type Template = {
    defaultBackground: string,
    filterColor: string,
    textStyle: {
        color: string,
        size: number,
    },
    components: Component[],

}

export type History = {
    currentHistoryIndex: number,
    states: {
        cardStates: Card[],
        selectedComponentsIdStates : string[],
    },
    
}

export type Src = {
    src: string,
}

export type Card = {
    width: number,
    height: number,
    filter: Filter,
    background : string | undefined | Src ,
    components: Component[],
}

export type Filter = {
    color: string|undefined,
}

export type Component = {
    position: Position,
    id: string,
    content: TextObject | ArtObject | ImageObject,
    size: Size,

}

export type Size = {
    width: number,
    height: number,
}

export type ImageObject = {
    src: string,
}

export type ArtObject = {
    ArtType: String,
}

export type Position = {
    PosX: number,
    PosY: number,
}

export type TextObject = {
    content: string,
    bold: boolean,
    italic: boolean,
    underline: boolean,
    fontSize: number,
    fontColor: string,
    fontFamily: string,
}
//fontfam,backsrc,histdelfilt
export enum ListArtObject {
    triangle,
    square,
    circle,
}

