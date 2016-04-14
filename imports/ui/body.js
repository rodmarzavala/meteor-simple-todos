import { Template } from 'meteor/templating';

import { Tasks } from '../../imports/api/tasks';

import './body.html';

Template.body.helpers({
    tasks(){
        return Tasks.find({});
    }
});