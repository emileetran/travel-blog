Posts = new Meteor.Collection('posts');
Posts.remove({});

Meteor.publish('visible-posts', function() {
  return Posts.find({visible: true});
});

if(!Posts.findOne({name: 'patong'})) {
  Posts.insert({
    visible: true,
    name: 'patong',
    lat: 7.8900,
    lng: 98.2900,
    content: Assets.getText('patong.md'),
    thumbnailUrl: '/patong-small.jpg'
  })
}

if(!Posts.findOne({name: 'istanbul'})) {
  Posts.insert({
    visible: true,
    name: 'istanbul',
    lat: 41.0136,
    lng: 28.9550,
    content: Assets.getText('istanbul.md'),
    thumbnailUrl: '/istanbul-small.jpg'
  })
}

if(!Posts.findOne({name: 'mumbai'})) {
  Posts.insert({
    visible: true,
    name: 'mumbai',
    lat: 18.9750,
    lng: 72.8258,
    content: Assets.getText('mumbai.md'),
    thumbnailUrl: '/mumbai-small.jpg'
  })
}

if(!Posts.findOne({name: 'kathmandu'})) {
  Posts.insert({
    visible: false,
    name: 'kathmandu',
    lat: 27.7000,
    lng: 85.3333,
    content: Assets.getText('istanbul.md'),
    thumbnailUrl: '/kathmandu -small.jpg'
  })
}