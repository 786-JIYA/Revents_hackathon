import { initializeApp ,cert} from "firebase-admin/app";
import {readFileSync} from 'fs';
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";
import { Timestamp } from "firebase-admin/firestore";
import { users } from "../data/sampleData";
import { events } from "../data/sampleData";

const serviceAccount = JSON.parse(readFileSync('./src/lib/firebase/admin-cred.json','utf-8'));

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
const auth = getAuth();

async function seedAuthUser(){
    for(const user of users){
        try{
            const createdUser = await auth.createUser({
                 uid:user.uid,
                 email:user.email,
                 password:'Pa$$w0rd',
                 displayName:user.displayName,
                    photoURL:user.photoURL
            });

            console.log(`Created user ${createdUser.uid} successfully`);

            await db.collection('users').doc(createdUser.uid).set({
                displayName: user.displayName,
                photoURL: user.photoURL,
                email: user.email,
                createdAt:Timestamp.now()
            })

        }catch(error){
            console.log(`Error creating user ${user.displayName}:`,error);
        }
    }
}

async function seedEvents(){
    const batch = db.batch();
    events.forEach(event =>{
        const eventRef = db.collection('events').doc(event.id);
        batch.set(eventRef,{
            ...event,
            date: Timestamp.fromDate(new Date(event.date))
        });
    });
    batch.commit();
    console.log('Seeded events successfully');
}

(async ()=>{
    await seedAuthUser();
    await seedEvents(); 
    console.log('Seeding completed');
})();