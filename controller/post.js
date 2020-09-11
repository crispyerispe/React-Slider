const Image = require("../models/Image");
const fs = require("fs");

exports.make = (req, res, next) => {
    req.body.thing = JSON.parse(req.body.thing);
    const url = req.protocol + '://' + req.get('host');
    const info = new Image({
      title: req.body.thing.title,
      description: req.body.thing.description,
      imageUrl: url + '/images/' + req.file.filename
    });
    info.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

exports.receive = (req, res, next) => {
  Image.getImg({
    _id: req.params.id
  }).then(
    (info) => {
      res.status(200).json(info);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modify = (req, res, next) => {
    let info = new Image({ _id: req.params._id });
    if (req.file) {
      const url = req.protocol + '://' + req.get('host');
      req.body.info = JSON.parse(req.body.info);
      info = {
        _id: req.params.id,
        title: req.body.thing.title,
        description: req.body.thing.description,
        imageUrl: url + '/images/' + req.file.filename
      };
    } else {
      info = {
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl
      };
    }
    Image.updateImg({_id: req.params.id}, info).then(
      () => {
        res.status(201).json({
          message: 'Thing updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.delete = (req, res, next) => {
    Image.findImg({_id: req.params.id}).then(
      (info) => {
        const filename = info.imageUrl.split("/images")[1];
        fs.unlink("images/" + filename, () => {
          Image.deleteImg({_id: req.params.id}).then(
            () => {
              res.status(200).json({
                message: 'Deleted!'
              });
            }
          ).catch(
            (error) => {
              res.status(400).json({
                error: error
              });
            }
          );
        });
      }
    );
  };

exports.getAll = (req, res, next) => {
  Image.find().then(
    (found) => {
      res.status(200).json(found);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

