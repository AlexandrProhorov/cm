const Index = {
  index: 0,
}

const Component = {
  id: 0,
  posX: 500,
  posY: 500,
  width: 100,
  height: 100,
  content: 'text',
}

const Filter = {
  color: "fff",
}


const Card = {
  filters: Filter,
  width: 100,
  height: 100,
  components: [
    Component,
  ],  
}

const StepsHistory = {
  stepslist: [
    Card,
    Index,
  ]
}

const Template = {
  Card,
}

const ListArtObject = {
  triangle: "./folder/triangle.png",
  square: "./folder/square.png",
  circle: "./folder/circle.png",
}

const ArtObj = {
  ...Component,
  ArtType:'triangle'
}

const ArtObjSquare = {
  ...Component,
  ArtType:'Square'
}

const ArtObjCircle = {
  ...Component,
 ArtType:'Circle'
}


const Picture = {
  ...Component,
  src: '',
}

const TextObj = {
  ...Component,
  text: 'Enter your text here',
  size: 12,
  bold: false,
  italic: false,
  underline: false,
  fontFamily: "arial",
}

const СardMaker = {
  card: Card,
  history: StepsHistory,
  templates: [Card],
  selectedObj: [],
}


/**
 * @return {Card}
 */
function CreateCard() { }

/**
 * @param {Card} card
 * @param {number} width
 * @param {number} height
 * @return {Card}
 */
function EditCardSize(card, width, height) { }

/**
 * @param {Card} card
 * @param {string} color
 * @return {Card}
 */
function ChangeFilterColor(card, color) { }

/**
 * @param {Card} card
 * @param {number} id
 * @param {string} text
 * @param {string} type
 * 
 * @return {Card}
 */
function AddTextComponent(card, type, id, text) { } 

/**
 * @param {Card} card
 * @param {boolean} isBold
 * @param {number} id
 * 
 * @return {Card}
 */
function SetTextBold(card, isBold, id) { }

/**
 * @param {Card} card
 * @param {boolean} isItalic
 * @param {number} id
 * 
 * @return {Card}
 */
 function SetTextItalic(card, isItalic, id) { }

 /**
 * @param {Card} card
 * @param {boolean} isUnderline
 * @param {number} id
 * 
 * @return {Card}
 */
function SetTextUnderline(card, isUnderline, id) { }


/**
 * @param {Card} card
 * @param {number} size
 * @param {number} id
 * 
 * @return {Card}
 */
function SetTextSize(card, size, id) { }


/**
 * @param {Card} card
 * @param {number} id
 * @param {string} src
 * @param {string} type
 * 
 * @return {Card}
 */
function AddImage(card, type, id, src) { }
  

/**
 * @param {Card} card
 * @param {string} type
 * @param {string} ArtType
 * @param {number} id
 * 
 * @return {Card}
 */
function AddArtObject(card, type, ArtTybe, id) { }

/**
 * @param {Card} card
 * @param {number} width
 * @param {number} height
 * @param {number} id
 * @return {Card}
 */
 function EditComponentSize(card, id, width, height) { }

/**
 * @param {Card} card
 * @param {number} id
 * 
 * @return {Card}
 */
function DeleteComponent(card, id) { }

/**
 * @param {Card} card
 * @param {number} id
 * @param {number} posX
 * @param {number} posY
 * 
 * @return {Card}
 */
function MoveComponent(card, posX, posY, id) { }

/**
 * @param {StepsHistory} history
 * @param {number} index
 * @return {Card}
 */
function Undo(history, index) { }

/**
 * @param {StepsHistory} history
 * @param {number} index
 * @return {Card}
 */
function Redo(history, index) { }


/**
 * @param {Card} card
 * @param {Template} template
 * 
 * @return {Card}
 */
function addTemplate(card, template) { }  

/**
 * @param {Card} card
 * @param {number[]} id
 * 
 * @return {Card}
 */
function SelectObj(card, id) { }

/**
 * @param {Card} card
 * @param {number} posX
 * @param {number} posY
 * 
 * @return {Card}
 */
function SelectArea(card, posX, posY) { }

