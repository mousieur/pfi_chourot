import Model from './model.js';
import User from './user.js';
import Like from './like.js'

export default class Post extends Model {
    constructor() {
        super(true /* secured Id */);

        this.addField('Title', 'string');
        this.addField('Text', 'string');
        this.addField('Category', 'string');
        this.addField('Image', 'asset');
        this.addField('Date', 'integer');
        this.addField('OwnerId', 'string')
        this.setKey("Title");
    }
    bindExtraData(post){
        this.join(
            post, 'Likes', Like, User, "Name, Avatar"
        )
        this.bind(
            post, 'OwnerId', User, "Name, Avatar"
        )
        return post
    }
}