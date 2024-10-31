import { makeObservable } from "mobx"

if (!makeObservable) {
    throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available")
}
