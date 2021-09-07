import  {Blot, NetworkProvider, Account} from 'blot';
const state = {
    blot: null,
    provider: null,
    allAccounts: null,
    value: 0
}
// const initProvider = async () => {
//     state.provider = await new NetworkProvider('ws://127.0.0.1:9944').connect();
// }

// const initBlot = async () => {
//     const blot = new Blot(provider);
//     state.blot = blot
//     try {
//         await blot.enable('Example Vanilla App');
//       } catch (err) {
//         console.warn("User didn't accept authorization or no extension installed.")
//     }
//     state.allAccounts = await blot.getAccounts();
// }

window.setValue = (value) => {
    state.value = value;
    document.getElementById("countValue").innerHTML = value;
}
window.getValue = async () => {
    console.log('getValue')
    const getValueFromContract = 0;
    window.setValue(0)
}

window.incriment = async () => {
    console.log('incriment');
    window.setValue(state.value + 1)
}

window.decrement = async () => {
    console.log('decrement');
    window.setValue(state.value - 1)
}

