<template>
  <div id="countdown">
    <ul>
      <li>
        <span id="days">{{ day }}</span
        >days
      </li>
      <li>
        <span id="hours">{{ hours }}</span
        >Hours
      </li>
      <li>
        <span id="minutes">{{ minuts }}</span
        >Minutes
      </li>
      <li>
        <span id="seconds">{{ second }}</span
        >Seconds
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countDownToTime: new Date("Nov 03, 2022 00:00:00").getTime(),
      timerOutput: null,
      day: null,
      hours: null,
      minuts: null,
      second: null,
    };
  },
  methods: {
    startTimer: function () {
      const timeNow = new Date().getTime();
      const timeDifference = this.countDownToTime - timeNow;
      const millisecondsInOneSecond = 1000;
      const millisecondsInOneMinute = millisecondsInOneSecond * 60;
      const millisecondsInOneHour = millisecondsInOneMinute * 60;
      const millisecondsInOneDay = millisecondsInOneHour * 24;
      const differenceInDays = timeDifference / millisecondsInOneDay;
      const remainderDifferenceInHours =
        (timeDifference % millisecondsInOneDay) / millisecondsInOneHour;
      const remainderDifferenceInMinutes =
        (timeDifference % millisecondsInOneHour) / millisecondsInOneMinute;
      const remainderDifferenceInSeconds =
        (timeDifference % millisecondsInOneMinute) / millisecondsInOneSecond;
      const remainingDays = Math.floor(differenceInDays);
      const remainingHours = Math.floor(remainderDifferenceInHours);
      const remainingMinutes = Math.floor(remainderDifferenceInMinutes);
      const remainingSeconds = Math.floor(remainderDifferenceInSeconds);
      this.timerOutput =
        remainingDays +
        " Days " +
        ": " +
        remainingHours +
        " Hours " +
        ": " +
        remainingMinutes +
        " Minutes " +
        ": " +
        remainingSeconds +
        " Seconds";
      this.day = remainingDays;
      this.hours = remainingHours;
      this.minuts = remainingMinutes;
      this.second = remainingSeconds;
    },
  },
  mounted() {
    setInterval(() => {
      this.startTimer();
    }, 1000);
  },
};
</script>
