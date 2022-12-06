import create from 'zustand'
import { persist } from "zustand/middleware"
import AsyncStorage from '@react-native-community/async-storage'

const useUserState = create(
    persist(
        set => ({
            user: {},
            setUser: (newUser) => set(({
                user: newUser
            })),
            removeUser: () => set(({
                user: {}
            })),
        }),
        {
            name: 'app@user',
            getStorage: () => AsyncStorage,
        },
    ))

export default useUserState;