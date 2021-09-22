import Blot from 'blot';
import './global.css';

const state = {
    blot: null,
    allAccounts: null,
    value: 0
}
window.initBlot = async () => {
    const blot = await Blot.create('ws://127.0.0.1:9944');
    console.log(blot)
    state.blot = blot;
    // try {
    //     await blot.enable('Example Vanilla App');
    //     await blot.setAccount(0);
    //   } catch (err) {
    //     console.warn("User didn't accept authorization or no extension installed.")
    // }
    // state.allAccounts = await blot.getAccounts();
}

window.setCounterValue = (value) => {
    state.value = value;
    document.getElementById("countValue").innerHTML = value;
}
window.getCounterValue = async () => {
    console.log('getValue')
    const getValueFromContract = 0;
    window.setCounterValue(0)
}

window.increment = async () => {
    console.log('incriment');
    window.setCounterValue(state.value + 1)
}

window.decrement = async () => {
    console.log('decrement');
    window.setCounterValue(state.value - 1)
}

