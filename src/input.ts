enum Action {
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
    Interact
}

type KeyCode = string

const defaultKeyMap: Record<KeyCode, Action> = {
    'KeyW': Action.MoveUp,
    'KeyA': Action.MoveLeft,
    'KeyS': Action.MoveDown,
    'KeyD': Action.MoveRight,
    'KeyE': Action.Interact,
    'Digit1': Action.AbilitySlot1,
    'Digit2': Action.AbilitySlot2,
    'Digit3': Action.AbilitySlot3,
    'Digit4': Action.AbilitySlot4,
    'KeyC': Action.Chat,
    'KeyQ': Action.Menu
}

const keyMap = defaultKeyMap;


document.addEventListener('keydown', ev => {
    // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
    let action = keyMap[ev.code]
    performAction(action)
})

const performAction = (action: Action) => {
    switch (action) {
        case Action.MoveUp: MoveUp(); break;
        case Action.MoveDown: MoveDown(); break;
        case Action.MoveLeft: MoveLeft(); break;
        case Action.MoveRight: MoveRight(); break;
    }
}

function MoveUp() {
    throw new Error("Function not implemented.");
}

function MoveDown() {
    throw new Error("Function not implemented.");
}
function MoveLeft() {
    throw new Error("Function not implemented.");
}

function MoveRight() {
    throw new Error("Function not implemented.");
}

