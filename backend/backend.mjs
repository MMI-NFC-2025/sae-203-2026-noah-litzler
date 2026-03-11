import PocketBase from 'pocketbase';

const pb = new PocketBase('https://sae203.festicloze.litzler.optimiseus.fr:443');

// Auth admin
export async function superUserauth(login, mdp) {
    const authData = await pb.admins.authWithPassword(login, mdp);
    return authData;
}

// Tous les artistes triés par date de représentation
export async function allArtistesSortedByDate() {
    const records = await pb.collection('representations').getFullList({
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

// Tous les artistes triés par ordre alphabétique
export async function allArtistesAlpha() {
    const records = await pb.collection('artistes').getFullList({
        sort: 'nom'
    });
    return records;
}

// Infos d’un artiste par son id
export async function oneArtisteID(id) {
    const records = await pb.collection('artistes').getOne(id);
    return records;
}

// Infos d’une scène par son id
export async function oneSceneID(id) {
    const records = await pb.collection('scenes').getOne(id);
    return records;
}

// Tous les artistes d’une scène par son id, triés par date
export async function allArtistesBySceneId(id) {
    const records = await pb.collection('representations').getFullList({
        filter: `scene = "${id}"`,
        sort: 'date_heure',
        expand: 'artiste,scene'
    });
    return records;
}

// Tous les artistes d’une scène par son nom, triés par date
export async function allArtistesBySceneName(nom) {
    const records = await pb.collection('representations').getFullList({
        filter: `scene.nom = "${nom}"`,
        sort: 'date_heure',
        expand: 'artiste,scene'
    });
    return records;
}

// Ajouter un nouvel artiste
export async function addNewArtiste(newArtiste) {
    const record = await pb.collection('artistes').create(newArtiste);
    return record;
}

// Modifier un artiste par son id
export async function updateArtisteById(id, updatedArtiste) {
    const record = await pb.collection('artistes').update(id, updatedArtiste);
    return record;
}

// Ajouter une nouvelle scène
export async function addNewScene(newScene) {
    const record = await pb.collection('scenes').create(newScene);
    return record;
}

// Modifier une scène par son id
export async function updateSceneById(id, updatedScene) {
    const record = await pb.collection('scenes').update(id, updatedScene);
    return record;
}