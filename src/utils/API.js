import axios from "axios";

export default {
  // I used randomuser.me to give me the first 200 in the list
  getUsers: function() {

    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};
