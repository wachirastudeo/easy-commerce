import { defineStore } from 'pinia';
import { auth } from '@/firebase';

import {
    GoogleAuthProvider,
    onAuthStateChanged,
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
        async checkAuthState() {
            return new Promise((resolve) => {
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        this.user = user;
                        this.isLoggedIn = true;
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                });
            });
        },
        async signInWithGoogle() {
            try {
                const result = await signInWithPopup(auth, provider);
                this.user = result.user;
                this.isLoggedIn = true;

            } catch (error) {

            }

        },
        async logout() {
            this.isLoggedIn = false;
            await signOut(auth);
        }
    }

});