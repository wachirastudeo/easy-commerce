import { defineStore } from 'pinia';
import { auth } from '@/firebase';

import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from 'firebase/auth';


// ระบุ social provider ที่จะใช้ login
const provider = new GoogleAuthProvider();

export const useAccountStore = defineStore('account', {
    state: () => ({
        isLoggedIn: false,
        user: {}
    }),
    actions: {
        async signInWithGoogle() {
            try {
                const result = await signInWithPopup(auth, provider);
                this.isLoggedIn = true;
                this.user = result.user;

            } catch (error) {

            }

        },
        async logout() {
            this.isLoggedIn = false;
            await signOut(auth);
        }
    }

});