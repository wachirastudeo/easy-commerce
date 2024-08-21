import { defineStore } from 'pinia';
import { auth } from '@/firebase';

import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut, signInWithEmailAndPassword
} from 'firebase/auth';


// ระบุ social provider ที่จะใช้ login
const provider = new GoogleAuthProvider();

export const useAccountStore = defineStore('account', {
    state: () => ({
        isLoggedIn: false,
        isAdmin: false,
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
        async singInWithAdmin() {
            try {
                const result = await signInWithEmailAndPassword(auth, email, password);
                this.isLoggedIn = true;
                this.user = result.user;
                this.isAdmin = true;

            } catch (error) {

            }
        },
        async logout() {

            this.isLoggedIn = false;

            this.isAdmin = false;
            await signOut(auth);

        }
    }

});