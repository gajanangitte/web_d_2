const express = require('express');
const issuesRouter = express.Router({mergeParams: true});

const sqlite = require('sqlite3');
const db = new sqlite.Database(process.env.TEST_DATABASE || './database.sqlite');

issuesRouter.param('issueId', (req, res, next, issueId) => {
    db.get(`SELECT * FROM Issue WHERE Issue.id = $issueId`,{$issueId : issueId},
    (err, issue) => {
        if(err) {
            next(err);
        }else if(issue) {
            next();
        } else {
            // console.log("dada")
            res.sendStatus(404);
        }
    })
});


issuesRouter.get('/', (req, res, next) => {
    db.all("SELECT * FROM Issue WHERE Issue.series_id = $seriesId",
    { $seriesId: req.params.seriesId},
     (err, issues)=> {
        if(err) {
            next(err);
        } else {
            return res.status(200).json({issues : issues});
        }
    });
})

issuesRouter.post('/', (req, res, next) => {

    const name = req.body.issue.name;
    const issueNumber = req.body.issue.issueNumber;
    const publicationDate = req.body.issue.publicationDate;
    const artistId = req.body.issue.artistId;
    
    const artistSql = "SELECT * FROM Artist WHERE Artist.id = $id"
    const artistVal = {$id: artistId};
    db.get(artistSql, artistVal, (err, artist) => {
        if(err) {
            next(err);
        } 
        else {
            
            if(!name || !issueNumber || !publicationDate || !artist) {
                return res.sendStatus(400);
            }
        

            db.run(`INSERT INTO Issue ( name, issue_number , publication_date, artist_id, series_id ) VALUES ( $name, $issueNumber, $publicationDate, $artistId, $seriesId);`,
            {
                $name : name,
                $issueNumber: issueNumber,
                $publicationDate: publicationDate,
                $artistId: artistId,
                $seriesId: req.params.seriesId
            },
            function (error) {
                    if(error) {
                        next(error);
                    }
                    db.get(`SELECT * FROM Issue WHERE Issue.id = $id;`, 
                    {$id : this.lastID}, 
                    (err, issue) => {
                            return res.status(201).json({issue: issue});
                        
                    })
                }
            );


        }
    });

});

issuesRouter.put('/:issueId', (req, res, next) => {
    const name = req.body.issue.name;
    const issueNumber = req.body.issue.issueNumber;
    const publicationDate = req.body.issue.publicationDate;
    const artistId = req.body.issue.artistId;

    const artistSql = "SELECT * FROM Artist WHERE Artist.id = $id"
    const artistVal = {$id: artistId};
    
    db.get(artistSql, artistVal, (err, artist) => {
        if(err) {
            next(err);
        } else {

            if(!name || !issueNumber || !publicationDate || !artist) {
                return res.sendStatus(400);
            }

            const sql = `UPDATE Issue set name = $name, issue_number = $issueNumber, publication_date = $publicationDate, artist_id = $artistId WHERE Issue.id = $id `;
            const val = {
                $name: name,
                $issueNumber: issueNumber,
                $publicationDate: publicationDate,
                $artistId: artistId,
                $id : req.params.issueId
            };

            db.run(sql, val, function(err) {
                if(err) {
                    next(err);
                } else {
                    db.get(`SELECT * FROM Issue WHERE Issue.id = $id` ,
                    {$id : req.params.issueId}, 
                    (err, issue) => {
                        return res.status(200).json({ issue: issue});
                    })
                }
            });

        } });


});

issuesRouter.delete('/:issueId', (req, res, next) => {
    db.run(`DELETE FROM Issue WHERE Issue.id = $id`, {$id: req.params.issueId} ,
    (err) => {
        if(err) {
            next(err);
        } else {
         res.sendStatus(204);
        }
        })
});


module.exports= issuesRouter;