import { writable } from 'svelte/store';


const { subscribe, set, update } = writable({
    serial: '',
    baseAddr: '',
    channelIndex: '',
    totalChannels: '',

    randomFact: "Svelte can be easy",
})

export const store = {
    subscribe,
    set,
    update,

    setSerial: value => update(self => {
        self.serial = value
        return self
    }),

    setBaseAddr: value => update(self => {
        self.baseAddr = value
        return self
    }),


    setChannelIndex: value => update(self => {
        self.channelIndex = value
        return self
    }),

    setTotalChannels: value => update(self => {
        self.totalChannels = value;
        return self
    })
}