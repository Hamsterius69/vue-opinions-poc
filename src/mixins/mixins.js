
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
      notifySnackBar(message, color, time = 4000, active = true) {
        this.$store.dispatch('globalSetNotifySnackBar', {
          color,
          active,
          message,
          duration: time,
        });
      },
    },
  };
  