import { CardMaker, Card, History, Template, TextObject, ImageObject, ArtObject, Component, Size } from "./types";


function initCardMaker(): CardMaker {
    return {
        currentTemplate: initTemplate(),
        card: initCard(),
        history: initHistory(),
        selectedComponentsId: [],
        selectedArea:{
            PosX:1,
            PosY:1,
        }

    }

}

function initTemplate(): Template {
    return {
        defaultBackground: '',
        filterColor: 'red',
        textStyle: {
            color: 'red',
            size: 14,
        },
        components: [],
    }
}

function initCard(): Card {
    return {
        components: [],
        width: 500,
        height: 500,
        filter: {
            color: "red",
        },
        background: undefined,
    }
}

function initHistory(): History {
    const emptyCard: Card = initCard()
    return {
        currentHistoryIndex: 0,
        states: {
            cardStates: [],
            selectedComponentsIdStates: [],
        },
    }

}


export function EditCardSize(cardMaker: CardMaker, width: number, height: number): CardMaker {
    const currentCard: Card = cardMaker.card;
    cardMaker.history.states.cardStates.push(currentCard)
    cardMaker.history.currentHistoryIndex++
    return {
        ...cardMaker,
        card: {
            ...cardMaker.card,
            width: width,
            height: height,
        }
    };


}

export type componentContent = 'TEXT' | 'FIGURE' | 'PICTURE';

export function isText(component: TextObject | ArtObject | ImageObject): component is TextObject {
    return (component as TextObject).fontSize !== undefined
}

export function isArtObject(component: TextObject | ArtObject | ImageObject): component is ArtObject {
    return (component as ArtObject).ArtType !== undefined
}

export function isImage(component: TextObject | ArtObject | ImageObject): component is ImageObject {
    return (component as ImageObject).src !== undefined
}

export function getComponentContent(component: TextObject | ArtObject | ImageObject): componentContent {
    if (isText(component)) {
        return 'TEXT'
    }
    else if (isArtObject(component)) {
        return 'FIGURE'
    }
    else {
        return 'PICTURE'
    }
}

export function Idgenerator(): string {
    const template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.split('')
    const rawUUID = template.map((symbol) => {
        const value = Math.random() * 16
        if (symbol !== 'x' && symbol !== 'y') {
            return symbol
        }
        const currHalfByte = symbol === 'x'
            ? Math.floor(value)
            : (value & 0x3) | 0x8

        return currHalfByte.toString(16)
    })

    return rawUUID.join('').toString()
}

export function AddTextComponent(cardMaker: CardMaker, PosX: number, PosY: number,): CardMaker {
    const currentCard: Card = cardMaker.card;
    const textObject: TextObject = {
        content: '',
        bold: false,
        italic: false,
        underline: false,
        fontFamily: 'auto',
        fontSize: 14,
        fontColor: '#ffff',
    }
    const component: Component = {
        position: {
            PosX : 1,
            PosY : 1,
        },
        id: Idgenerator(),
        size: {
            width: 15,
            height: 15,
        },
        content: textObject,
    }
    cardMaker.history.states.cardStates.push(currentCard)
    cardMaker.history.currentHistoryIndex++
    return {
        ...cardMaker,
        card: currentCard,
        selectedComponentsId: [component.id]
    }
}




export function EditTextSize(cardMaker: CardMaker, fontSize: number, card: Card): CardMaker {
    const currentCard: Card = cardMaker.card;
    const newComponents: Component[] = currentCard.components.map(component => {
        if (cardMaker.selectedComponentsId.includes(component.id) && isText(component.content)) {
            return {
                ...component,
                content: {
                    ...component.content,
                    fontSize: fontSize,
                }
            }
        }
        return component
    })
    cardMaker.history.states.cardStates.push(currentCard)
    cardMaker.history.currentHistoryIndex++
    const newCard: Card = {
        ...currentCard,
        components: newComponents
    }
    return {
        ...cardMaker,
        card: newCard
    }
}

export function EditTextColor(cardMaker: CardMaker, fontColor: string, card: Card): CardMaker {
    const currentCard: Card = cardMaker.card;
    const newComponents: Component[] = currentCard.components.map(component => {
        if (cardMaker.selectedComponentsId.includes(component.id) && isText(component.content)) {
            return {
                ...component,
                content: {
                    ...component.content,
                    fontColor: fontColor,
                }
            }
        }
        return component
    })
    cardMaker.history.states.cardStates.push(currentCard)
    cardMaker.history.currentHistoryIndex++
    const newCard: Card = {
        ...currentCard,
        components: newComponents
    }
    return {
        ...cardMaker,
        card: newCard
    }
}

export function EditTextContent(cardMaker: CardMaker, content: string, card: Card): CardMaker {
    const currentCard: Card = cardMaker.card;
    const newComponents: Component[] = currentCard.components.map(component => {
        if (cardMaker.selectedComponentsId.includes(component.id) && isText(component.content)) {
            return {
                ...component,
                content: {
                    ...component.content,
                    content: content,
                }
            }
        }
        return component
    })
    cardMaker.history.states.cardStates.push(currentCard)
    cardMaker.history.currentHistoryIndex++
    const newCard: Card = {
        ...currentCard,
        components: newComponents
    }
    return {
        ...cardMaker,
        card: newCard
    }
}

export function AddImageComponent(cardMaker: CardMaker, src: string, PosX: number, PosY: number,): CardMaker {
    const currentCard: Card = cardMaker.card;
    const imageObject: ImageObject = {
        src,
    }
    const component: Component = {
        position: {
            PosX : 1,
            PosY : 1,
        },
        id: Idgenerator(),
        size: {
            width: 15,
            height: 15,
        },
        content: imageObject,
    }
    cardMaker.history.states.cardStates.push(currentCard)
    cardMaker.history.currentHistoryIndex++
    return {
        ...cardMaker,
        card: currentCard,
        selectedComponentsId: [component.id]
    }
}

export function AddFigureComponent(cardMaker: CardMaker, ArtType: string, PosX: number, PosY: number, width: number, height: number): CardMaker {
    const currentCard: Card = cardMaker.card;
    const artObject: ArtObject = {
        ArtType,
    }
    const component: Component = {
        position: {
            PosX : 1,
            PosY : 1,
        },
        id: Idgenerator(),
        size: {
            width: 15,
            height: 15,
        },
        content: artObject,
    }
    cardMaker.history.states.cardStates.push(currentCard)
    cardMaker.history.currentHistoryIndex++
    return {
        ...cardMaker,
        card: currentCard,
        selectedComponentsId: [component.id]
    }
}

export function EditComponentSize(cardMaker: CardMaker, ScaleX: number, ScaleY: number): CardMaker {
    const currentCard: Card = cardMaker.card;
    const scale: Size = {
        width: ScaleX,
        height: ScaleY,
    };
    const newComponents: Component[] = currentCard.components.map(component => {
        if (cardMaker.selectedComponentsId.includes(component.id)) {
            const size: Size = {
                width: component.size.width * scale.width,
                height: component.size.height * scale.height,
            };
            return {
                ...component,
                size,
            }
        }
        return {
            ...component,
            component
        }

    });
    cardMaker.history.states.cardStates.push(currentCard)
    cardMaker.history.currentHistoryIndex++
    const newCard: Card = {
        ...currentCard,
        components: newComponents
    }
    return {
        ...cardMaker,
        card: newCard
    };

}

export function DeleteComponent(cardMaker: CardMaker): CardMaker {
    const currentCard: Card = cardMaker.card;
    const newComponents: Component[] = currentCard.components.filter(component => {
        return !cardMaker.selectedComponentsId.includes(component.id)
    });
    cardMaker.history.states.cardStates.push(currentCard)
    cardMaker.history.currentHistoryIndex++
    const newCard: Card = {
        ...currentCard,
        components: newComponents
    }
    return {
        ...cardMaker,
        card: newCard
    };

}

export function MoveComponent(cardMaker: CardMaker, moveX: number, moveY: number): CardMaker {
    const currentCard: Card = cardMaker.card;
    const newComponents: Component[] = currentCard.components.filter(component => {
        if (cardMaker.selectedComponentsId.includes(component.id)) {
            return {
                ...component,
                position: {
                    x: component.position.PosX + moveX,
                    y: component.position.PosY + moveY,
                }
            }
        }
        return component;
    });
    cardMaker.history.states.cardStates.push(currentCard)
    cardMaker.history.currentHistoryIndex++
    const newCard: Card = {
        ...currentCard,
        components: newComponents
    }
    return {
        ...cardMaker,
        card: newCard
    };
}




export function Undo(cardMaker: CardMaker): void {
    if (cardMaker.history.currentHistoryIndex > 0) {
        cardMaker.history.currentHistoryIndex -= 1
        const currentState: number = cardMaker.history.currentHistoryIndex;
        cardMaker.card = cardMaker.history.states.cardStates[currentState];
        cardMaker.selectedComponentsId = [cardMaker.history.states.selectedComponentsIdStates[currentState]];
    }
}

export function Redo(cardMaker: CardMaker): void {
    if (cardMaker.history.currentHistoryIndex !== cardMaker.history.states.cardStates.length -1 ) {
        cardMaker.history.currentHistoryIndex += 1
        const currentState: number = cardMaker.history.currentHistoryIndex;
        cardMaker.card = cardMaker.history.states.cardStates[currentState];
        cardMaker.selectedComponentsId = [cardMaker.history.states.selectedComponentsIdStates[currentState]];
    }
}

export function AddFilter(cardMaker: CardMaker): CardMaker {
    return { 
        ...
    }
}

export function RemoveFilter(cardMaker: CardMaker): CardMaker {
    return { 
        ...
    }
}


