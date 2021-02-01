import { addOffers } from "../redux/actions";
import { store } from "../redux";

const URL = "http://cdn.sixt.io/codingtask/offers.json";

const getOffers = async (): Promise<any> => {
  return new Promise((resolve, reject) => {
    fetch(URL)
      .then((response) => {
        response.json().then((result) => {
          store.dispatch(addOffers(result.offers));
          resolve(result);
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const api = {
  getOffers,
};

export default api;
