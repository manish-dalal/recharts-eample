const data = [
  {
    name: "01/Jan",
    uv: 2000,
    pv: 2013,
    amt: 6000,
    time: 1,
    uvError: 500,
    pvError: 710
  },
  {
    name: "02/Jan",
    uv: 3300,
    pv: 2000,
    amt: 6000,
    time: 2,
    uvError: 120,
    pvError: 50
  },
  {
    name: "03/Jan",
    uv: 2800,
    pv: 2800,
    amt: 6000,
    time: 4,
    uvError: 100,
    pvError: 30
  },
  {
    name: "04/Jan",
    uv: 2000,
    pv: 2013,
    amt: 6000,
    time: 1,
    uvError: 700,
    pvError: 110
  },
  {
    name: "05/Jan",
    uv: 2000,
    pv: 2013,
    amt: 6000,
    time: 1,
    uvError: 100,
    pvError: 110
  },
  {
    name: "06/Jan",
    uv: 3300,
    pv: 2000,
    amt: 6000,
    time: 2,
    uvError: 120,
    pvError: 50
  },
  {
    name: "07/Jan",
    uv: 3200,
    pv: 1398,
    amt: 6000,
    time: 3,
    uvError: 720,
    pvError: 200
  },
  {
    name: "08/Jan",
    uv: 2800,
    pv: 2800,
    amt: 6000,
    time: 4,
    uvError: 100,
    pvError: 30
  },
  {
    name: "09/Jan",
    uv: 2000,
    pv: 2013,
    amt: 6000,
    time: 1,
    uvError: 500,
    pvError: 110
  },
  {
    name: "10/Jan",
    uv: 3200,
    pv: 1398,
    amt: 6000,
    time: 3,
    uvError: 620,
    pvError: 200
  },
  {
    name: "11/Jan",
    uv: 2800,
    pv: 2800,
    amt: 6000,
    time: 4,
    uvError: 100,
    pvError: 30
  },
  {
    name: "12/Jan",
    uv: 2000,
    pv: 2013,
    amt: 6000,
    time: 1,
    uvError: 300,
    pvError: 110
  },
  {
    name: "13/Jan",
    uv: 3200,
    pv: 1398,
    amt: 6000,
    time: 3,
    uvError: 120,
    pvError: 200
  },
  {
    name: "14/Jan",
    uv: 2800,
    pv: 2800,
    amt: 6000,
    time: 4,
    uvError: 100,
    pvError: 30
  },
  {
    name: "15/Jan",
    uv: 2000,
    pv: 2013,
    amt: 6000,
    time: 1,
    uvError: 100,
    pvError: 110
  },
  {
    name: "16/Jan",
    uv: 3200,
    pv: 1398,
    amt: 6000,
    time: 3,
    uvError: 520,
    pvError: 200
  },
  {
    name: "17/Jan",
    uv: 2800,
    pv: 2800,
    amt: 6000,
    time: 4,
    uvError: 100,
    pvError: 30
  },
  {
    name: "18/Jan",
    uv: 2000,
    pv: 2013,
    amt: 6000,
    time: 1,
    uvError: 900,
    pvError: 310
  },
  {
    name: "19/Jan",
    uv: 3200,
    pv: 1398,
    amt: 6000,
    time: 3,
    uvError: 120,
    pvError: 200
  },
  {
    name: "20/Jan",
    uv: 3200,
    pv: 1398,
    amt: 6000,
    time: 3,
    uvError: 620,
    pvError: 200
  },
  {
    name: "21/Jan",
    uv: 2800,
    pv: 2800,
    amt: 6000,
    time: 4,
    uvError: 100,
    pvError: 30
  },
  {
    name: "22/Jan",
    uv: 2000,
    pv: 2013,
    amt: 6000,
    time: 1,
    uvError: 300,
    pvError: 110
  },
  {
    name: "23/Jan",
    uv: 3200,
    pv: 1398,
    amt: 6000,
    time: 3,
    uvError: 120,
    pvError: 200
  },
  {
    name: "24/Jan",
    uv: 2800,
    pv: 2800,
    amt: 6000,
    time: 4,
    uvError: 100,
    pvError: 30
  },
  {
    name: "25/Jan",
    uv: 2000,
    pv: 2013,
    amt: 6000,
    time: 1,
    uvError: 100,
    pvError: 110
  },
  {
    name: "26/Jan",
    uv: 3200,
    pv: 1398,
    amt: 6000,
    time: 3,
    uvError: 520,
    pvError: 200
  },
  {
    name: "27/Jan",
    uv: 2800,
    pv: 2800,
    amt: 6000,
    time: 4,
    uvError: 100,
    pvError: 30
  },
  {
    name: "28/Jan",
    uv: 2000,
    pv: 2013,
    amt: 6000,
    time: 1,
    uvError: 900,
    pvError: 310
  },
  {
    name: "29/Jan",
    uv: 3200,
    pv: 1398,
    amt: 6000,
    time: 3,
    uvError: 120,
    pvError: 200
  },
  {
    name: "30/Jan",
    uv: 3200,
    pv: 1398,
    amt: 6000,
    time: 3,
    uvError: 520,
    pvError: 200
  },
  {
    name: "31/Jan",
    uv: 2800,
    pv: 2800,
    amt: 6000,
    time: 4,
    uvError: 100,
    pvError: 30
  }
];

const dataGen = () => {
  const data = [
    {
      name: "01/Jan",
      uv: 0,
      pv: 0,
      amt: 62000,
      time: 0,
      uvError: 0,
      pvError: 0
    }
  ];
  for (var i = 2; i < 32; i++) {
    const newItem = {};
    newItem.name = `${i < 10 ? "0" + i : i}/Jan`;
    newItem.uv = (i - 1) * 200;
    newItem.pv = (i - 1) * 213;
    newItem.amt = 62000;
    newItem.time = (i - 1) * 1;
    newItem.uvError = (i - 1) * 500;
    newItem.pvError = (i - 1) * 710;
    data.push(newItem);
  }
  return data;
};

const dataGenRan = () => {
  const data = [
    {
      name: "01/Jan",
      uv: 0,
      pv: 0,
      amt: 62000,
      time: 0,
      uvError: 0,
      pvError: 0
    }
  ];
  for (var i = 2; i < 3200; i++) {
    const newItem = {};
    newItem.name = `${i < 10 ? "0" + i : i}/Jan`;
    newItem.uv = (i - 1) * 200;
    newItem.pv = (i - 1) * 213;
    newItem.amt = 62000;
    newItem.time = (i - 1) * 1;
    newItem.uvError = (i - 1) * 500;
    newItem.pvError = (i - 1) * 710;
    data.push(newItem);
  }
  return data;
};

export { data, dataGen, dataGenRan };
