const ip ='http://192.168.0.104:5000/'
class API{
    async getCityByName(cidade) {
        try {
          const repoCall = await fetch(`${ip}/cidade/${cidade}`, {
            method: 'GET',
            headers: {
              charset: 'utf-8',
              'Content-Type': 'application/json; charset=utf-8',
            },
            // body: 'user=' + user + '&key=' + key,
          });
          const response = await repoCall.json();
          return response;
        } catch (error) {
          console.warn("ERROR!-->"+error)
        }
      }
}

export default new API();