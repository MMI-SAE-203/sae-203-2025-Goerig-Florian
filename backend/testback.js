import { datefilm, dateactivite, listeinvite, oneID, oneIDActivite, oneIDInvite,
    allActiviteByInvite, allActiviteByName, addNewFilm, addNewInvite, addNewActivite, updateFilmById, updateInviteById, updateActiviteById,

} from './backend.mjs';

/*try {
    const records = await datefilm();
    console.log(records);
} catch (e) {
    console.error(e);
}*/

/*try {
    const records = await dateactivite();
    console.log(records);
} catch (e) {
    console.error(e);
}*/

/*try {
    const records = await listeinvite();
    console.log(records);
} catch (e) {
    console.error(e);
}*/

/*try {
    const Onerecord = await oneID('9sfi4abj4g7k44w');
    console.log(Onerecord);
} catch (e) {
    console.error(e);
}*/

/*try {
    const Onerecord = await oneIDActivite('441wh8368jl2h9j');
    console.log(Onerecord);
} catch (e) {
    console.error(e);
}*/

/*try {
    const Onerecord = await oneIDInvite('c3bb037xysa5804');
    console.log(Onerecord);
} catch (e) {
    console.error(e);
}*/

/*try {
    const records = await allActiviteByInvite('yk3o09f0hvl644p');
    console.table(records);
} catch (e) {
    console.error(e);
    
}*/

/*try {
    const records = await allActiviteByName('Tanaka');
    console.log(records);
} catch (e) {
    console.error(e);

}*/


/*try {
    const newFilm = {
        "annee": "10 avril 2002",
        "genre": "Aventure, Animation, Fantastique",
        "realisateur": "Hayao Miyazaki",
        "langue": "français",
        "synopsis": "Chihiro, une fillette de 10 ans, est en route vers sa nouvelle demeure en compagnie de ses parents. Au cours du voyage, la famille fait une halte dans un parc à thème qui leur paraît délabré. Lors de la visite, les parents s’arrêtent dans un des bâtiments pour déguster quelques mets très appétissants, apparus comme par enchantement. Hélas cette nourriture les transforme en porcs. Prise de panique, Chihiro s’enfuit et se retrouve seule dans cet univers fantasmagorique ; elle rencontre alors l’énigmatique Haku, son seul allié dans cette terrible épreuve.",
        "duree": "2h 05min",
        "bande_annonce": "https://www.allocine.fr/film/fichefilm_gen_cfilm=37485.html",
        "titre": "Le Voyage de Chihiro",
        "invite_film": {
            "id": "c3bb037xysa5804"
        }
    };

    await addNewFilm(newFilm);
    
} catch (e) {
    console.error(e);
}*/


/*try {
    const newInvite = {
        "nom": "test",
        "prenom": "test",
        "role": "test",
        "email": "test@test.com",
        "biographie": "test"
    };

    await addNewInvite(newInvite);

} catch (e) {
    console.error(e);
}*/

/*try {
    const newActivite = {
        "type": "test",
        "date": "test",
        "lieu": "test",
        "description": "test",
      
    };

    await addNewActivite(newActivite);

} catch (e) {
    console.error(e);
}*/

/*try {
    const data = {
        "titre": "update",
        "synopsis": "update",
        "genre": "update",
        "email": "upddate-test@gmail.com",
        "realisateur": "update",
        "langue": "update",
        "duree": "update",

    };

    await updateFilmById('1vg939rsu974l56', data);
} catch (e) {
    console.error(e);
}*/


/*try {
    const data = {
        "nom": "update",
        "prenom": "update",
        "role": "update",
        "email": "upddate-test@gmail.com",
        "biographie": "update",
        
    };

    await updateInviteById('041e979inj43y9d', data);
} catch (e) {
    console.error(e);
}*/

try {
    const data = {
        "type": "update",
        "date": "update",
        "description": "update",
       

    };

    await updateActiviteById('y1ci690y4hvriji', data);
} catch (e) {
    console.error(e);
}