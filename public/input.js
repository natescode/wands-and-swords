const keyMap = {
    'w': 'up',
    'a': 'down',

}

const actionsEnum = ['MoveUp',
    'MoveDown',
    'MoveLeft',
    'MoveRight',
    'AbilitySlot1',
    'AbilitySlot2',
    'AbilitySlot3',
    'AbilitySlot4',
    'Menu',
    'Chat',
    'Jump',
    'Interact']

document.addEventListener('keydown', ev => {
    const keyName = ev.code.split('Key')[1].toLocaleLowerCase()

})