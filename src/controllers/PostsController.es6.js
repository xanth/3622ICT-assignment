export default class PostsController {
    constructor(FacebookGraph, $state, $stateParams) {
        this.FacebookGraph  = FacebookGraph;
        this.$state         = $state;
        this.$stateParams   = $stateParams;

        FacebookGraph.Messages((err, messages) => {
          if(err){
            console.error("error fetching messages");
          } else {
            this.messages = messages;
          }
        });
    }
}

PostsController.$inject = ['FacebookGraph', '$state', '$stateParams'];
