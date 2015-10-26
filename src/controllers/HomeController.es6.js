export default class HomeController {
    constructor(FacebookGraph, $state) {
        this.FacebookGraph  = FacebookGraph;
        this.$state         = $state;

        FacebookGraph.albums((err, albums) => {
          if(err){
            console.error(err, "error in facebook graph");
          } else {
            this.albums = albums;
          }
        });

        FacebookGraph.posts((err, posts) => {
          if(err){
            console.error("error fetching messages");
          } else {
            console.log(posts)
            this.posts = posts;
          }
        });
    }
}

HomeController.$inject = ['FacebookGraph', '$state'];
