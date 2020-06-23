const express = require('express');
const seriesRouter = express.Router();

const sqlite = require('sqlite3');
const issuesRouter = require('./issues');
const db = new sqlite.Database(process.env.TEST_DATABASE || './database.sqlite');
seriesRouter.use('/:seriesId/issues', issuesRouter);



seriesRouter.param('seriesId', (req, res, next, seriesId) => {
    const sql = "SELECT * FROM Series WHERE Series.id = $seriesId";
    const values = { $seriesId : seriesId };

    db.get(sql, values, (err, row) => {
        if(err) {
            next(err);
        }
        if(row) {
            req.serial = row;
            next();
        } else {
           return res.sendStatus(404);
        }

    });
});

seriesRouter.get('/' , (req, res, next) => {
    db.all("SELECT * FROM Series" ,
     (err, series)=> {
        if(err) {
            next(err);
        } else {
            return res.status(200).json({series : series});
        }
    });
})

seriesRouter.get('/:seriesId' , (req, res, next) => {
    
    res.status(200).json({series: req.serial});

});

seriesRouter.post('/', (req, res, next) => {

    const name = req.body.series.name;
    const description = req.body.series.description;

    if(!name || !description) {
        return res.sendStatus(400);
    }

    db.run(`INSERT INTO Series ( name, description) VALUES ( $name, $description);`,
    {
        $name : name,
        $description: description
    },
        function (err) {
            if(err) {
                next(err);
            }
            db.get(`SELECT * FROM Series WHERE Series.id = $id;`, 
            {$id : this.lastID}, 
            (err, row) => {
                    res.status(201).json({series: row});
                
            })
        }
    );

});

seriesRouter.put('/:seriesId', (req, res, next) => {
    const name = req.body.series.name;
    const description = req.body.series.description;

    if(!name || !description) {
        return res.sendStatus(400);
    }

    db.run("UPDATE Series SET name = $name, description = $description WHERE Series.id = $id", 
    {
        $id: req.params.seriesId,
        $name: name,
        $description: description
    }, function(err) {
        if(err) {
            next(err);
        } else {
            db.get(`SELECT * FROM Series WHERE Series.id = $id` ,
            {$id : req.params.seriesId}, 
            (err, row) => {
                res.status(200).json({ series: row});
            })
        }
    })

});

seriesRouter.delete('/:seriesId', (req, res, next) => {
    const issueSql = "SELECT * FROM Issue WHERE Issue.series_id = $id";
    const val = {$id : req.params.seriesId};

    db.get(issueSql, val, (err, issue) => {
        if(err) {
            next(err);
        } else if (issue) {
            return res.sendStatus(400);
        } else {
            db.run("DELETE FROM Series WHERE Series.id = $id", {$id: req.params.seriesId},
            (err) => {
                if(err) {
                    next(err);
                } else {
                    return res.sendStatus(204);
                }
            })
        }
    });
})

module.exports = seriesRouter;