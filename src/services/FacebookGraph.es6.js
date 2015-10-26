import _      from 'lodash';
import async  from 'async';

export default class FacebookGraph {
  constructor($facebook, defaultObjectID) {
    this.$facebook        = $facebook;
    this.defaultObjectID  = defaultObjectID;
  }

  albums(ret, page = this.defaultObjectID, filter = albumFilter){
    this.$facebook.api(`/${page}/albums`, 'GET', {"fields":"count,likes,location,cover_photo,name,description"})
      .then((albums) => {
        let filteredAlbums = _(albums.data).filter(filter).sortBy((album) => {
          return album.likes.data.length;
        }).reverse().value();
        let albumsWithCoverPic = async.map(filteredAlbums, (album, cb) => {
          this.imageInfo(album.cover_photo.id, (err, image) => {
            if (image != null){
              album.cover_photo.pic = image;
              cb(null, album);
            } else {
              console.error("error in photo fetch");
              cb(true, album);
            }
          });
        }, ret);
      }, (error) => {
        console.error(error);
        ret(error, null);
      });
  }

  images(album, height, ret){
    this.$facebook.api(`/${album}/photos`, 'GET', {"fields":"likes,images,name"})
      .then((images) => {
        let filteredImages = _(images.data).map((image) => {
          return {
            thumb :  _(image.images).find((e) => { return e.height == height }),
            id    : image.id,
            name  : image.name,
            likes : image.likes.data.length
          };
        }).value();
        console.log(filteredImages);
        async.map(filteredImages, (image, cb) => {
          this.imageInfo(image.id, (err, source) => {
            if (image != null){
              image.full = source;
              cb(null, image);
            } else {
              console.error("error in photo fetch");
              cb(true, image);
            }
          });
        }, ret);
      }, (error) => {
        console.error(error);
        ret(error, null);
      });
  }

  imageInfo(image, cb){
    this.$facebook.api(`/${image}`, 'GET', {"fields":"images,source"})
      .then((image) => {
        cb(null, image);
      }, (error) => {
        console.error(error);
        return cb(error, null);
      });
  }

  posts(ret, page = this.defaultObjectID){
    this.$facebook.api(`/${page}/feed`, 'GET', {"fields":"likes{profile_type},message,name,status_type,from"})
      .then((posts) => {
        ret(null, _(posts.data).filter((post) => {
          return post.status_type == "wall_post";
        }).filter((post) => {
          return post.likes ? _.find(post.likes.data, (like) => {
            return like.profile_type == 'page'
          }) : false;
        }).value());
      }, (error) => {
        console.error(error);
        return cb(error, null);
      });
  }

}

FacebookGraph.$inject = ['$facebook', 'defaultObjectID'];

function albumFilter(album){
  return !album.location ? false : album.location.toLowerCase().indexOf("australia") > -1;
}
