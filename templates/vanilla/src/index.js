import Blot from 'blot';
import './global.css';
import {abi, wasm} from './contract'

const state = {
    blot: null,
    contract: null,
    value: 0
}
window.state = state;
window.initBlot = async () => {
    const blot = await Blot.create('ws://127.0.0.1:9944');
    state.blot = blot;
    window.Blot = blot;

    try {
        await blot.enable('Example Vanilla App');
        await blot.setAccount(0);
      } catch (err) {
        console.warn("User didn't accept authorization or no extension installed.")
    }
    await window.deployContract()
    
}

window.deployContract = async ( ) => {
    const factory = state.blot.getContractFactory(abi, wasm);
    const contract = await factory.deploy([1], {
    weight: 10000000000000,
    value: 100000000000,
});
    state.contract = contract

}


setInterval(()=>{
    window.getCounterValue()
}, 2500);


window.setCounterValue = (value) => {
    state.value = value;
    document.getElementById("countValue").innerHTML = value;
}
window.getCounterValue = async () => {
    if(!state.contract) { return; };
    const getValueFromContract = (await state.contract.get()).toString();
    window.setCounterValue(getValueFromContract);
}

window.increment = async () => {
    if(!state.contract) { return; };
    await state.contract.increment();
    window.getCounterValue();
}

window.decrement = async () => {
    if(!state.contract) { return; };
    await state.contract.decrement();
    window.getCounterValue();
}

