import PocketBase from 'pocketbase';

const pb = new PocketBase('https://sae203.festicloze.litzler.optimiseus.fr:443');

// Image simple
export function getImageUrl(record, field) {
    if (!record || !record[field]) return '';
    return pb.files.getURL(record, record[field]);
}

// Galerie d'images
export function getImageUrls(record, field) {
    if (!record || !record[field] || !Array.isArray(record[field])) return [];
    return record[field].map((file) => pb.files.getURL(record, file));
}

// Tous les artistes
export async function allArtistes() {
    const records = await pb.collection('artistes').getFullList();
    return records;
}

// Tous les artistes triés par ordre alphabétique
export async function allArtistesAlpha() {
    const records = await pb.collection('artistes').getFullList({
        sort: 'nom'
    });
    return records;
}

// Un artiste par id
export async function oneArtisteID(id) {
    const record = await pb.collection('artistes').getOne(id);
    return record;
}

// toutes les représentations
export async function allRepresentations() {
    const records = await pb.collection('representations').getFullList({
        sort: 'date_heure',
        expand: 'artiste,scene'
    });
    return records;
}

// Toutes les représentations triées par date
export async function allRepresentationsSorted() {
    const records = await pb.collection('representations').getFullList({
        sort: 'date_heure',
        expand: 'artiste,scene'
    });
    return records;
}

// Toutes les représentations d’un artiste
export async function allRepresentationsByArtiste(id) {
    const records = await pb.collection('representations').getFullList({
        filter: `artiste = "${id}"`,
        sort: 'date_heure',
        expand: 'artiste,scene'
    });
    return records;
}

// Toutes les scènes triées par nom
export async function allScenesSorted() {
    const records = await pb.collection('scenes').getFullList({
        sort: 'nom'
    });
    return records;
}

// Une scène par id
export async function oneSceneID(id) {
    const record = await pb.collection('scenes').getOne(id);
    return record;
}

// Toutes les représentations d’une scène
export async function allRepresentationsByScene(id) {
    const records = await pb.collection('representations').getFullList({
        filter: `scene = "${id}"`,
        sort: 'date_heure',
        expand: 'artiste,scene'
    });
    return records;
}

// Tous les artistes d’un genre musical triés par ordre alphabétique
export async function allArtistesByGenre(genre) {
    const records = await pb.collection('artistes').getFullList({
        filter: `genre_musical = "${genre}"`,
        sort: 'nom'
    });
    return records;
}

// Authentification de l'utilisateur
export async function Userauth(login, mdp) {
    const authData = await pb.collection('users').authWithPassword(login, mdp);
    return authData;
}

// Récupérer l'utilisateur actuellement connecté
export function currentUser() {
    return pb.authStore.model;
}

// Vérifier si l'utilisateur est connecté
export function isUserValid() {
    return pb.authStore.isValid;
}

// Déconnexion de l'utilisateur
export function logoutUser() {
    pb.authStore.clear();
}

// Ajouter un nouveau message de contact
export async function addNewMessageContact(newMessage) {
    const record = await pb.collection('messages_contact').create(newMessage);
    return record;
}

// Ajouter un nouvel artiste
export async function addNewArtiste(newArtiste) {
    const record = await pb.collection('artistes').create(newArtiste);
    return record;
}

// Modifier une scène par id
export async function updateSceneById(id, updatedScene) {
    const record = await pb.collection('scenes').update(id, updatedScene);
    return record;
}