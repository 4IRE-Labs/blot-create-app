import Blot from 'blot';
const state = {
    blot: null,
    allAccounts: null,
    value: 0
}

// window.initBlot = async () => {
//     const blot = await Blot.create('ws://127.0.0.1:9944');
//     state.blot = blot;
//     try {
//         await blot.enable('Example Vanilla App');
//         await blot.setAccount(0);
//       } catch (err) {
//         console.warn("User didn't accept authorization or no extension installed.")
//     }
//     // state.allAccounts = await blot.getAccounts();
// }

window.setCounterValue = (value) => {
    state.value = value;
    document.getElementById("countValue").innerHTML = value;
}
window.getCounterValue = async () => {
    console.log('getValue')
    const getValueFromContract = 0;
    window.setValue(0)
}

window.increment = async () => {
    console.log('incriment');
    window.setValue(state.value + 1)
}

window.decrement = async () => {
    console.log('decrement');
    window.setValue(state.value - 1)
}

