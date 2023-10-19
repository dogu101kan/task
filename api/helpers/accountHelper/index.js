const ustHesap = data => {
    
    const idBorclari = {};

    data.forEach(obj => {
        if(obj.tipi === "A"){
            const id = obj.ust_hesap_id;
        const borc = obj.borc;
      
        if (id in idBorclari) {
          idBorclari[id].borclar += borc;
        } else {
          idBorclari[id] = { id, borclar: borc };
        }
        }
      });

    return Object.values(idBorclari)
}

const dataPrepare = data => {
  const newData = data.map(item => {
    return {
      id: item.id,
      hesap_kodu: item.hesap_kodu,
      tipi: item.tipi,
      ust_hesap_id: item.ust_hesap_id,
      borc: item.borc === "" ? 0 :item.borc
    };
  });

  return newData
}

module.exports = {
    ustHesap,
    dataPrepare
}