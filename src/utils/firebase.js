import {initializeApp} from "firebase/app";
import {doc, query, where, addDoc, setDoc, getDocs, collection, arrayUnion, arrayRemove, getFirestore} from "firebase/firestore";
import {getAuth, signOut, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";

const config = {
    apiKey: "AIzaSyBIKT43K8rf10w4xfrAS_vwsSVOzz9z64M",
    authDomain: "react-slowkilo.firebaseapp.com",
    projectId: "react-slowkilo",
    storageBucket: "react-slowkilo.appspot.com",
    messagingSenderId: "154051748722",
    appId: "1:154051748722:web:229ec3518ccd39ff1f73eb"
};

export const firebase = initializeApp(config);
export const firestore = getFirestore(firebase);
export const auth = getAuth();

export async function doesUsernameExist(username) {
    const results = await getDocs(query(collection(firestore, "users"), where("username", "==", username)));

    return !!results.size;
};

export async function getUserByUserId(userId) {
    let results = await getDocs(query(collection(firestore, "users"), where("userId", "==", userId)));

    return results.docs[0].data();
};

export async function getSuggestedProfiles(userId, following) {
    let results = await getDocs(query(collection(firestore, "users"), where("userId", "!=", userId)));

    return results.docs.map((profile) => profile.data()).filter((profile) => !following.includes(profile.userId));
};

export async function updateLoggedInUserFollowing(loggedInUserDocId, profileUserId, isFollowingProfile) {
    return await setDoc(doc(firestore, "users", loggedInUserDocId), {
        
        following : isFollowingProfile ? arrayRemove(profileUserId) : arrayUnion(profileUserId),
    }, {merge : true});
};

export async function updateFollowedUserFollowers(profileDocId, loggedInUserUserId, isFollowingProfile) {
    return await setDoc(doc(firestore, "users", profileDocId), {

        followers : isFollowingProfile ? arrayRemove(loggedInUserUserId) : arrayUnion(loggedInUserUserId),
    }, {merge : true});
};

export async function getPhotos(userId, following) {

    let results = await getDocs(query(collection(firestore, "photos"), where("userId", "in", following)));

    const photos = results.docs.map((photo) => ({
        ...photo.data(),
        docId : photo.id
    }));

    const users = await Promise.all(
        photos.map(async (photo) => {
            let userLikedPhoto = false;

            if(photo.likes.includes(userId)) {
                userLikedPhoto = true;
            }

            const user = await getUserByUserId(photo.userId);
            const {username} = user;
            return {username, ...photo, userLikedPhoto};
        })
    );

    return users;
};

export {
    doc,
    where, 
    query, 
    setDoc,
    addDoc, 
    getDocs, 
    signOut, 
    collection, 
    updateProfile, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword
};