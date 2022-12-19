const STAT_DEFS = {
  STR: {
    base: 10,
    cost: 1,
    points: 1,
    hasRoll: true
  },
  DEX: {
    base: 10,
    cost: 2,
    points: 1,
    hasRoll: true
  },
  CON: {
    base: 10,
    cost: 1,
    points: 1,
    hasRoll: true
  },
  INT: {
    base: 10,
    cost: 1,
    points: 1,
    hasRoll: true
  },
  EGO: {
    base: 10,
    cost: 1,
    points: 1,
    hasRoll: true
  },
  PRE: {
    base: 10,
    cost: 1,
    points: 1,
    hasRoll: true
  },
  OCV: {
    base: 3,
    cost: 5,
    points: 1
  },
  DCV: {
    base: 3,
    cost: 5,
    points: 1
  },
  OMCV: {
    base: 3,
    cost: 3,
    points: 1
  },
  DMCV: {
    base: 3,
    cost: 3,
    points: 1
  },
  SPD: {
    base: 2,
    cost: 10,
    points: 1
  },
  PD: {
    base: 2,
    cost: 1,
    points: 1
  },
  ED: {
    base: 2,
    cost: 1,
    points: 1
  },
  REC: {
    base: 4,
    cost: 1,
    points: 1
  },
  END: {
    base: 20,
    cost: 1,
    points: 5
  },
  STUN: {
    base: 20,
    cost: 1,
    points: 2
  },
  BODY: {
    base: 10,
    cost: 1,
    points: 1
  }
};


$(function () {
  const statNames = ["STR", "DEX", "CON", "INT", "EGO", "PRE", "OCV", "DCV", "OMCV", "DMCV", "SPD", "PD", "ED", "REC", "END", "BODY", "STUN"];

  const pointsSpent = {};

  for( const stat of statNames ) {
    pointsSpent[stat] = 0;
    const sb = STAT_DEFS[stat].base;
    const sc = STAT_DEFS[stat].cost;
    const sp = STAT_DEFS[stat].points;
    const sr = STAT_DEFS[stat].hasRoll;
    const newHtml = '<tr>' +
      '<td id="Value_'+stat+'">'+sb+'</td>' +
      '<td id="Name_'+stat+'">'+stat+'</td>' +
      '<td id="Points_'+stat+'"><input id="Spinner_'+stat+'" type="number" value="0"></td>' +
      '<td id="Cost_'+stat+'">0&nbsp;@&nbsp;'+ sc +'/' + sp +'</td>'+
      ( sr
          ? '<td id="Roll_'+stat+'">11-</td>'
          : '<td></td>'
      ) +
      '</tr>';
    $("#stat_block > tbody").append(newHtml);

    const hv = $("#Value_"+stat);
    const hs = $("#Spinner_"+stat);
    const hc = $("#Cost_"+stat);

    hs.change(function() {
      const v = parseInt(hs.val());
      const q = sb + sp * v;
      hv.text( q );
      hc.html( (sc*v) + '&nbsp;@&nbsp' + sc + '/' +sp );
      if(sr) {
        const newRoll = (9+Math.round(q/5))+'-';
        $("#Roll_"+stat).text( newRoll );
      }
      pointsSpent[stat] = sc * v;

      let total = 0;
      for(const s of statNames) {
        total += pointsSpent[s];
      }
      $("#Points_Total").text(total);
    })
  }
});
