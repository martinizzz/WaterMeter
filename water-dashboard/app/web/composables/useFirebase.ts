import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getDatabase, type Database } from 'firebase/database';

let appInstance: FirebaseApp | null = null;
let dbInstance: Database | null = null;

export const useFirebase = () => {
    if (!appInstance) {
        const config = {
            apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
            authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
            databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
            projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
            storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
            appId: import.meta.env.VITE_FIREBASE_APP_ID
        };

        appInstance = getApps().length === 0 ? initializeApp(config) : getApp();
        dbInstance = getDatabase(appInstance);
    }

    return { db: dbInstance! };
};

// Al final de tu archivo useFirebase.ts
export const { db } = useFirebase();
