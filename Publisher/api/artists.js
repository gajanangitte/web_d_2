const express = require('express');
const artistRouter = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

artistRouter.param('artistId', (req, res, next, artistId) => {
    const sql = "SELECT * FROM Artist WHERE Artist.id = $artistId";
    const values = { $artistId : artistId };

    db.get(sql, values, (err, row) => {
        if(err) {
            next(err);
        }

        if(row) {
            req.artist = row;
            next();
        } else {
            res.sendStatus(404);
        }

    });
    
});


artistRouter.get('/', (req, res, next) => {
    db.all('SELECT * FROM Artist WHERE Artist.is_currently_employed = 1',
     (error, artists) => {
        if(error) {
            next(error);
        } else {
            res.status(200).json({artists: artists});
        }
    }) 
});

artistRouter.get('/:artistId', (req,res,next) => {
    res.status(200).json({ artist : req.artist});
} )

artistRouter.post('/', (req, res, next) => {
    const artista = req.body.artist;

    if( !artista.name || !artista.dateOfBirth || !artista.biography) {
        return res.sendStatus(400);
    }
    
    const isCurrentlyEmployed = artista.isCurrentlyEmployed === 0  ? 0 : 1;

    const sql = `INSERT INTO Artist (name, date_of_birth, biography, is_currently_employed) VALUES ($name, $dateOfBirth, $biography, $isCurrentlyEmployed)`;
    const val = {
        $name : artista.name,
        $dateOfBirth : artista.dateOfBirth,
        $biography : artista.biography,
        $isCurrentlyEmployed : isCurrentlyEmployed,
    }

    db.run( sql, val, function(error) {
        if(error) {
            next(error);
        } else {
            db.get( `SELECT * FROM Artist WHERE Artist.id = $id`,
             { $id : this.lastID},
             (err, artist) => {

                     res.status(201).json( {artist: artist} );         
             }
             )
        }
    } )

});

artistRouter.put('/:artistId', (req, res, next) => {
    const artista = req.body.artist;

    if( !artista.name || !artista.dateOfBirth || !artista.biography) {
        return res.sendStatus(400);
    }

    const isCurrentlyEmployed = artista.isCurrentlyEmployed !== 1 ? 0 : 1;    

    const sql = 'UPDATE Artist SET name = $name, date_of_birth = $dateOfBirth, biography = $biography, is_currently_employed = $isCurrentlyEmployed WHERE Artist.id = $artistId';
    const values = {
    $name: artista.name,
    $dateOfBirth: artista.dateOfBirth,
    $biography: artista.biography,
    $isCurrentlyEmployed: isCurrentlyEmployed,
    $artistId: req.params.artistId
    };

    db.run(sql, values, (error) => {
        if(error) {
            next(error);
        }  else {
            db.get( `SELECT * FROM Artist WHERE Artist.id = $id`,
             { $id : req.params.artistId},
             (err, artist) => {

                     res.status(200).json( {artist: artist} );         
             }
             )
        }
    });
    });

artistRouter.delete('/:artistId', (req, res, next) => {

    const isCurrentlyEmployed = 0;    

    const sql = 'UPDATE Artist SET is_currently_employed = $isCurrentlyEmployed WHERE Artist.id = $artistId';
    const values = {
    $isCurrentlyEmployed: isCurrentlyEmployed,
    $artistId: req.params.artistId
    };

    db.run(sql, values, (error) => {
        if(error) {
            next(error);
        }  else {
            db.get( `SELECT * FROM Artist WHERE Artist.id = $id`,
             { $id : req.params.artistId},
             (err, artist) => {

                     res.status(200).json( {artist: artist} );         
             }
             )
        }
    });
    });

module.exports = artistRouter;