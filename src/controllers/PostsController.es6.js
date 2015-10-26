export default class PostsController {
    constructor(FacebookGraph, $state, $stateParams) {
        this.FacebookGraph  = FacebookGraph;
        this.$state         = $state;
        this.$stateParams   = $stateParams;
        
        FacebookGraph.posts((err, posts) => {
          if(err){
            console.error("error fetching messages");
          } else {
            this.posts = posts;
          }
        });
    }
}

PostsController.$inject = ['FacebookGraph', '$state', '$stateParams'];
