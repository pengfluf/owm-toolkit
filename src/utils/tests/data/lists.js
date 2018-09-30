export const initial = [
  {
    dt: 1538330400,
    dt_txt: '2018-09-30 18:00:00',
  },
  {
    dt: 1538341200,
    dt_txt: '2018-09-30 21:00:00',
  },
  {
    dt: 1538352000,
    dt_txt: '2018-10-01 00:00:00',
  },
  {
    dt: 1538362800,
    dt_txt: '2018-10-01 03:00:00',
  },
];

export const expected = [
  {
    day: 30,
    hours: [
      {
        dt: 1538330400,
        dt_txt: '2018-09-30 18:00:00',
        time: 18,
      },
      {
        dt: 1538341200,
        dt_txt: '2018-09-30 21:00:00',
        time: 21,
      },
    ],
  },
  {
    day: 1,
    hours: [
      {
        dt: 1538352000,
        dt_txt: '2018-10-01 00:00:00',
        time: 0,
      },
      {
        dt: 1538362800,
        dt_txt: '2018-10-01 03:00:00',
        time: 3,
      },
    ],
  },
];