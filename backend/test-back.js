import {
    superUserauth,
    allArtistesSortedByDate,
    allScenesSorted,
    allArtistesAlpha,
    oneArtisteID,
    oneSceneID,
    allArtistesBySceneId,
    allArtistesBySceneName,
    addNewArtiste,
    updateArtisteById,
    addNewScene,
    updateSceneById
} from './backend.mjs';


try {
    const record = await superUserauth('noah.litzler@gmail.com', 'Noah24032007*');
    console.table(record);
} catch (e) {
    console.error(e);
}

try {
    const records = await allArtistesSortedByDate();
    console.table(records);
} catch (e) {
    console.error(e);
}

try {
    const records = await allScenesSorted();
    console.table(records);
} catch (e) {
    console.error(e);
}

try {
    const records = await allArtistesAlpha();
    console.table(records);
} catch (e) {
    console.error(e);
}

try {
    const record = await oneArtisteID('b0e65o08xnvj2ot');
    console.table(record);
} catch (e) {
    console.error(e);
}

try {
    const record = await oneSceneID('sbshqnx6d7eidul');
    console.table(record);
} catch (e) {
    console.error(e);
}

try {
    const records = await allArtistesBySceneId('i336dh89f258ao7');
    console.table(records);
} catch (e) {
    console.error(e);
}

try {
    const records = await allArtistesBySceneName('Scène Royale');
    console.table(records);
} catch (e) {
    console.error(e);
}

try {
    const newArtiste = {
        "nom": "Artiste Test",
        "genre_musical": "Musique test",
        "description": "Description de test"
    };
    const record = await addNewArtiste(newArtiste);
    console.table(record);
} catch (e) {
    console.error(e);
}

try {
    const record = await updateArtisteById('1vja5e9scytp4s8', {
        nom: 'Artiste Test Modifié'
    });
    console.table(record);
} catch (e) {
    console.error(e);
}

try {
    const newScene = {
        "nom": "Scène Test",
        "description": "Description de test",
        "localisation": "Montbéliard",
        "capacite": 200
    };
    const record = await addNewScene(newScene);
    console.table(record);
} catch (e) {
    console.error(e);
}

try {
    const record = await updateSceneById('i336dh89f258ao7', {
        capacite: 500
    });
    console.table(record);
} catch (e) {
    console.error(e);
}