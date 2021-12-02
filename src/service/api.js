const ip = 'http://10.0.1.94:5000/';
class API {
  async getCityByName(cidade) {
    try {
      const repoCall = await fetch(`${ip}/cidade/${cidade}`, {
        method: 'GET',
        headers: {
          charset: 'utf-8',
          'Content-Type': 'application/json; charset=utf-8',
        },
      });
      const response = await repoCall.json();
      return response;
    } catch (error) {
      console.warn('ERROR!-->' + error);
    }
  }

  async getForecastById(IDcidade) {
    try {
      const repoCall = await fetch(`${ip}/previsao_tempo/${IDcidade}`, {
        method: 'GET',
        headers: {
          charset: 'utf-8',
          'Content-Type': 'application/json; charset=utf-8',
        },
      });
      const response = await repoCall.json();
      return response;
    } catch (error) {
      console.warn('ERROR!-->' + error);
    }
  }
}

export default new API();
