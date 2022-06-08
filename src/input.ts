/**
 * Event that is dispatched when an Event happens or action is performed
 */
enum EventAction {
    MoveUp,
    MoveDown,
    MoveLeft,
    MoveRight,
    AbilitySlot1,
    AbilitySlot2,
    AbilitySlot3,
    AbilitySlot4,
    Menu,
    Chat,
    Jump,
    Interact,
    LEVELUP,
    DIE,
    WIN,
    LOSE
}




type KeyCode = string

const defaultKeyRecord: Record<KeyCode, EventAction> = {
    'KeyW': EventAction.MoveUp,
    'KeyA': EventAction.MoveLeft,
    'KeyS': EventAction.MoveDown,
    'KeyD': EventAction.MoveRight,
    'KeyE': EventAction.Interact,
    'Digit1': EventAction.AbilitySlot1,
    'Digit2': EventAction.AbilitySlot2,
    'Digit3': EventAction.AbilitySlot3,
    'Digit4': EventAction.AbilitySlot4,
    'KeyC': EventAction.Chat,
    'KeyQ': EventAction.Menu
}

const keyMap = defaultKeyRecord;

document.addEventListener('keydown', ev => {
    // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
    let action = keyMap[ev.code]
    // there are 'Events' things that happen in the world
    // there are 'Actions' which are directly caused by the player 
    // i.e. (keyboard / controller input)
    DispatchEvent(action, { type: 'action' })
})

class GameEventRepo extends EventTarget {
    constructor() {
        super();
        // this._secret = mySecret;
    }

    // get secret() { return this._secret; }
}


/**
 * Global EventRepo to handle events
 */
window.EventRepo = new GameEventRepo()

function RegisterEvent(event: EventAction, callback: () => void) {
    window.EventRepo.addEventListener(event, callback)
}
function RegisterBatchEvents(eventBatch: { event: EventAction, callback: () => void }[]) {
    eventBatch.map(evt => RegisterEvent(evt.event, evt.callback))
}

function DispatchEvent(event: EventAction, data: any) {
    window.EventRepo.dispatchEvent(new CustomEvent(EventAction[event], data))
}


class Controllable {
    constructor() {
        RegisterBatchEvents([{
            event: EventAction.MoveUp,
            callback: () => console.log('move up')
        }, {
            event: EventAction.MoveDown,
            callback: () => console.log('move down')
        }, {
            event: EventAction.MoveLeft,
            callback: () => console.log('move left')
        },
        {
            event: EventAction.MoveRight,
            callback: () => console.log('move right')
        }])

    }

}