
import moment from "moment";

export default {
    methods: {
      getPorcentag(total, value) {
        const porcentag = Math.round((value * 100)/total, -2);
        return `${porcentag}%`
      },
      getElapsedTime(date) {
        return moment(date).fromNow();
      },
      delay(ms) {
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
      },
    },
  };
  