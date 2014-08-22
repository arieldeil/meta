/** @jsx React.DOM */

(function() {
  var PeoplePageMixin = require('../mixins/people_page.js.jsx');

  var FollowerList = React.createClass({
    mixins: [PeoplePageMixin],

    glob: function(users) {
      var currentUser = app.currentUser();
      var currentUsername = currentUser.get('username');
      var currentUserAvatar = [];
      var avatars = [];

      for (var i = 0, l = users.length; i < l; i++) {
        var user = users[i];

        if (user && user.username === currentUsername) {
          currentUserAvatar.push(
            <span style={{ display: 'inline-block' }} key={user.id}>
              {this.avatar(user)}
            </span>
          );
        } else {
          avatars.push(
            <span style={{ display: 'inline-block' }} key={user.id}>
              {this.avatar(user)}
            </span>
          );
        }
      }

      return currentUserAvatar.concat(avatars).slice(0, 100);
    },

    render: function() {
      return (
        <div className="list-group list-group-breakout list-group-padded">
          <h4>Followers</h4>
          {this.rows(this.props.followers)}
        </div>
      );
    },

    rows: function(users) {
      return (
        <div>
          {this.glob(users)}
        </div>
      );
    }
  });

  if (typeof module !== 'undefined') {
    module.exports = FollowerList;
  }

  window.FollowerList = FollowerList;
})();
